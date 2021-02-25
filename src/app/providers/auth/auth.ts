import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageProvider } from '../token-storage/token-storage';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { ILogin } from "../../model/models";
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
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
  // apiRoot: string = "http://127.0.0.1:8000/api";
  apiRoot: string = "http://192.168.1.6:5000/api/";
  // apiRoot: string = "http://192.168.1.34:8000/api";
  //apiRoot: string = "https://sheconsultinggroupsrl.com/api/";
 //apiRoot: string = "https://new.toursecret.club/api";
  valauten:boolean = false;
  constructor(private navCtrl: NavController,public http: HttpClient,
              private router:Router,
              // private app:App,
              public toastCtrl: ToastController,
              private tokenStorage: TokenStorageProvider) {
    //console.log('Hello AuthProvider Provider');
    this.getAccessTokenn();    
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
            .setAccessToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzI5YjZkN2JmNzc0OTU4OWE0ZjU3ZmYyZDk0MGQ3Zjc1MTBjZWM5Mzg4N2Y5OTQ5NWM0MDJjMzk4NDgzNzJlNTAxMTFjODZiMjU2YTllYTgiLCJpYXQiOjE2MDU3NTI1NDgsIm5iZiI6MTYwNTc1MjU0OCwiZXhwIjo0NzYxNDI2MTQ4LCJzdWIiOiIxIiwic2NvcGVzIjpbImFwaXdlYiJdfQ.ICCfGvTcRpSq_16Vpc59kVl1erXXx8zDRw_KRYJz4igy8RKWTFqnDRUaHjtYDYNwWscI7BPT1QqCW13szsqv0J2HzOKT4cpPojFcejChFpSE5nCKs1-olXnCZCHTqieqRuBU50-gnWtPR7AOV7r5H7fAoszF79JXjBfDYoYSQvjXQjP-rn7RAm7ATZzrXFX9FhlWGpMv-asyJBWDau33HVm0kzMmmzdFsQGECzj_cnmKW6BKOBuIcdU3Aij0L1ZpB2DAOhB3l-uTpLoA5msUU73TBZd2iPnBVOgljq61_vTsRbktsN4zrmFSDvKHM38PxOgS7O2Jua-wY_Kd7N7Ko1xH2G0h84IGsSegvIXvd80jKVrk_B5UvFW5QpvSZtPdN0vCIAsOlyjDoITPwSH3hWfV6w75Pwij4n_4Q9HC6GcvomqK5UOFbxO-tWZZxnq0I60BAFBDSdziXMtU6u4IoY0ytKLSz1cBRReFwVutGUNyNNzx6_G4baOaKcnYsok_fHLnM2zXlJEuHkibBb7QxeOc5_cvawNeWS8uKbAXFEts0wJPSv81vaqsY4tuAfx1-FRmL3so7n98_7fYCDzNzL0ckYdnRrjPJvjPx0RcuWInyk-dKxM1l61sFCvnqADnczGHdmuVwUSpLlD_yquroTOS_k9rpivzyDxkdTT2iAc');
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
  loginsocial(data:any): Observable<any>{
    let url = `${this.apiRoot}/social_auth`;
    // const da = { 
    //   usuario: data.usuario,
    //   password: data.password,
    //   // provider: 'adm'
    // };
    return this.http.post(url, data, this.headerDefault())
    .pipe(
      tap((tokens: any) => {
        this.saveAccessData(tokens);
        // return "";
        // this.router.navigate(['/']);
      }),
      catchError((err) => {
        // this.salir();
        console.log("errror");
        return throwError(err);
      })
    );
  }
  login(data:ILogin): Observable<any>{
    const url = `${this.apiRoot}login`;
    const da = { 
      email: data.email,
      password: data.password,
      // provider: 'adm'
    };
    console.log(da);
    
    return this.http.post(url, da, this.headerDefault())
    .pipe(
      tap((tokens: any) => {
        this.saveAccessData(tokens);
        // return "";
        // this.router.navigate(['/']);
      }),
      catchError((err) => {
        // console.log(err);
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

  getuser(): Observable<any>{
    localStorage.removeItem('userdata');
    const urludata = `${this.apiRoot}userdata`;
    return this.http.get(urludata,this.headerDefault())
    .pipe(
      tap((data: any) => {
        console.log("user login data");
        localStorage.setItem('userdata', JSON.stringify(data.data.data));
        console.log(data);
      }),
      catchError((err) => {
        // this.salir();
        console.log("errror");
        return throwError(err);
      })
    );
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

  saveAccessData({ access_token, refresh_token }: AccessData) {
    this.tokenStorage
      .setAccessToken(access_token)
      .setRefreshToken(refresh_token);
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
}
