import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageProvider } from '../token-storage/token-storage';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { ILogin, IPedido, IFavoritos, ICalculadora, ICarrito, IUser } from "../../model/models";
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Storage } from '@ionic/storage'

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/catch';

import { NavController,ToastController } from '@ionic/angular';

// import { AccessData, ILogin } from '../../models/models';


export interface AccessData {
  access_token: string;
  refresh_token: string;
}
  
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AuthProvider {

  // apiRoot: string = "http://192.168.1.7:5000/api/";
  apiRoot: string = "http://192.168.1.5:5000/api/";
  // apiRoot: string = "https://altools.es/api/";
  //apiRoot: string = "https://sheconsultinggroupsrl.com/api/";

  valauten:boolean = false;
  logs:any=[];
  usuarios$:any=[];
  
  constructor(private navCtrl: NavController,public http: HttpClient,
              private router:Router,
              // private app:App,
              public toastCtrl: ToastController,
              private tokenStorage: TokenStorageProvider,
              private storage:Storage) {
    //console.log('Hello AuthProvider Provider');
    this.getAccessTokenn();  
    this.getEmail();
  }
  headerDefault(): any {
    let bearerToken;
    this.getAccessTokenn().subscribe((data) =>{
      bearerToken =  data;
    });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${bearerToken}`
      })
    };
    return httpOptions;
  }

  isRreshToken(): Observable<boolean> {
    return this.tokenStorage
      .getRefreshToken()
      .pipe(
        map(token => !!token)
      );
  }
  isAccessToken(): Observable<boolean> {
    return this.tokenStorage
      .getAccessToken()
      .pipe(
        map(token => !!token)
      );
  }

  getAccessTokenn(): Observable <string> {
    this.isAccessToken().subscribe((da)=>{
       if(!da) {
            this.tokenStorage
            .setAccessToken('hEkfn9h6VOrdUJM25tvtVCRjnJTHDedlXyFhx22J');
        }
    });
    return this.tokenStorage.getAccessToken();
  }

  refreshToken(): Observable<AccessData>{
    const url = `${this.apiRoot}/refresh`;
     return this.tokenStorage
    .getRefreshToken()
    .pipe(
      switchMap((refreshToken: string) =>
        // this.http.post(`http://127.0.0.1:8000/api/refresh`, { refreshToken })
        this.http.post(url, {refresh_token: refreshToken,rol:this.tokenStorage.getPayload().scopes[0]}, this.headerDefault())
      ),
      tap((tokens: any) => this.saveAccessData(tokens)),
      catchError((error:HttpErrorResponse) => {
        this.logout();
        // return Observable.throw(err);
        let errorMessage = '';
         if (error.error instanceof ErrorEvent) {
           // client-side error
           errorMessage = `Error: ${error.error.message}`;
         } else {
           // server-side error
           errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
         }
        //  window.alert(errorMessage);
         return throwError(errorMessage);
      })
    );
  }

  salir(){
    this.tokenStorage.clear();
    localStorage.removeItem('userdata');
    this.getAccessTokenn();
    this.navCtrl.navigateRoot('/home');
    // this.router.navigate(['/home']);
    // this.app.getRootNav().setRoot(LoginPage);
  }
 
  login(data:ILogin): Observable<any>{
    const url = `${this.apiRoot}login`;
    const da = { 
      email: data.email,
      password: data.password,
    };
    console.log(da);
    return this.http.post(url, da, this.headerDefault())
    .pipe(
      tap((tokens: any) => {
        this.saveAccessData(tokens);
        this.router.navigate(['/select']);

        //ACA HACER EL GUARDADO EN EL STORAGE
        localStorage.setItem('Usuario', JSON.stringify(data.email));
      }),
      catchError((err) => {
        console.log(err);
        // console.log(err.error.message);
        if(err.error.message == 'Su dirección de correo electrónico no está verificada.'){
          this.presentToast('Su dirección de correo electrónico no está verificada.')
        }else{
          this.presentToast("Las credenciales de usuario fueron incorrectas.");
        }
        return throwError(err);
      })
    );
  }

  getEmail(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    console.log(this.logs);
    this.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res; 
      console.log(this.usuarios$);
    });
  }

  getUsers = (route:string, id:number)=>{
    return this.http.get(`${this.apiRoot}`+ route + id);
  }

  // user() {
  //   const headers = new HttpHeaders({
  //     'Authorization': this.token["token_type"]+" "+this.token["access_token"]
  //   });
  //   return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
  //   .pipe(
  //     tap(user => {
  //       this.storage.setItem("usuario", JSON.stringify(user))
  //         .then(
  //           () => {
  //             console.log('Usuario Guardado');
  //             console.log(user);
  //           },
  //           error => console.error(error)
  //         );
  //       return user;
  //     })
  //   )
  // }

  getuser(): Observable<any>{
    //localStorage.removeItem('userdata');
    const urludata = `${this.apiRoot}userdata`;
    return this.http.get(urludata,this.headerDefault())
    .pipe(
      tap((data: any) => {
        console.log("user login data");
        //localStorage.setItem('userdata', JSON.stringify(data.data.data));
        console.log(data);
      }),
      catchError((err) => {
        // this.salir();
        console.log("No se encontro el usuario");
        return throwError(err);
      })
    );
  }
  saveAccessData({ access_token, refresh_token }: AccessData) {
    this.tokenStorage
      .setAccessToken(access_token)
      .setRefreshToken(refresh_token);
  }

  logout(): Observable<any>{
    const url = `${this.apiRoot}/logout`;
    return this.http.post(url, {}, this.headerDefault())
    // .map(response => response.json())
    .pipe(
      tap((tokens: any) => {
      this.salir();
      }),
      catchError((err) => {
        this.salir();
        return throwError(err);
      })
    );
  }


  isAuthenticated(user):boolean{
      let data = false;
        this.isAccessToken().subscribe((da)=>{
            if(da) {
              for (var i = 0; i < user.length; ++i) {
                if(this.tokenStorage.getPayload().scopes[0]==user[i]) {
                  data = true;
                }
              }
            }else{
              this.salir();
            }
        });
    return data;
  }

  async errorstatus(content,error){
    let mensaje="";
    for (let a in content) {
      mensaje += content[a][0];
    }
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom'
    });
    // toast.onDidDismiss(() => {
    //   console.log('Dismissed toast');
    // });
    toast.present();
    // console.log(mensaje);
    return mensaje;
  }
  async presentToast(mensaje) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 1500
    });
    toast.present();
  }

  getAllObject = (route:string) =>{
    return this.http.get(`${this.apiRoot}`+ route);
  }

  getAllObjectById = (route:string, id:number) =>{
    return this.http.get(`${this.apiRoot}`+ route + id);
  }

  postCalculadora = (route:string,calculadora:ICalculadora)=>{
    return this.http.post<any>(`${this.apiRoot}`+ route, calculadora);
  }

  getCarrito = (route:string, id:number)=>{
    return this.http.get(`${this.apiRoot}`+ route + id);
  }

  getAllObjectByIdforCalculo = (route:string, id:number, hoja_id) =>{
    return this.http.get(`${this.apiRoot}`+ route + id +'/'+ hoja_id);
  }

  postPedido = (route:string,pedido:IPedido)=>{
    return this.http.post<any>(`${this.apiRoot}`+ route, pedido);
  }

  postFavorito = (route:string,favoritos:IFavoritos)=>{
    return this.http.post<any>(`${this.apiRoot}`+ route, favoritos);
  }

  deleteObjectById = (route:string,id:number) =>{
    return this.http.delete(`${this.apiRoot}`+ route +id);
  }

  updateObjectById = (route:string,id:number, carrito:ICarrito) =>{
    return this.http.put<any>(`${this.apiRoot}`+ route + id, carrito);
  }

  updateObjectByIdUser = (route:string,id:number, user:IUser) =>{
    return this.http.put<any>(`${this.apiRoot}`+ route + id, user);
  }

  cerrarCarrito = (route:string,id:number, carrito:ICarrito) =>{
    return this.http.put<any>(`${this.apiRoot}`+ route + id, carrito);
  }

  cerrarHojaCortadora = (route:string,id:number, carrito:ICarrito) =>{
    return this.http.put<any>(`${this.apiRoot}`+ route + id, carrito);
  }

  deleteAllObject = (route:string) =>{
    return this.http.delete(`${this.apiRoot}`+ route);
  }
}
