import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Restangular } from 'ngx-restangular';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-cortadora-perfil',
  templateUrl: './cortadora-perfil.page.html',
  styleUrls: ['./cortadora-perfil.page.scss'],
})
export class CortadoraPerfilPage implements OnInit {

  data_hoja: FormGroup;
  dataForm: FormGroup;
  data_hoja1: FormGroup;
  dataFormHistorial: FormGroup;
  btnHoja:boolean;
  logs:any=[];
  usuarios$:any=[];
  hojas$: any = [];
  categorias$: any = [];
  user_id:number;
  linea:any;
  alto:any;
  ancho:any;
  precio:any;
  hoja_id:any;
  repeticion="1";
  combinacion:string;
  nombre_cliente:any;
  celular:any;
  descripcion:any;
  btnbool:boolean = false; 
  isChecked1:boolean = false; 
  isChecked2:boolean = false; 
  isChecked3:boolean = false; 

  // cards = [
  //   0,1,2,3,4,5,6
  // ]

  constructor(public alertController: AlertController, private _formBuilder: FormBuilder,
    public auth: AuthProvider,  private restangular:Restangular,
    public loadingController: LoadingController, public toastController: ToastController,) { }

  ngOnInit() {
    this.getSubCategorias();
    this.getUser();
    this.abrirVentana();
    this.data_hoja1 = this.data_Hoja1();
    this.data_hoja = this.data_Hoja();
    this.dataForm = this.dataCombinacion();
  }

  dataCombinacion(): FormGroup {
    return this._formBuilder.group({
      alto:[this.alto],
      ancho:[this.ancho],
      combinacion:[this.combinacion],
      linea:[this.linea],
      repeticion:[this.repeticion],
      hoja_id:[this.hoja_id],
      precio:[this.precio],
      user_id: [this.user_id]
    });
  } 
  
  data_Hoja1(): FormGroup {
    let estado = "false";
    return this._formBuilder.group({
      estado: [estado],
      user_id: [this.user_id]
    });
  } 
  
  data_Hoja(): FormGroup {
      let estado = "true";
      return this._formBuilder.group({
        nombre_cliente: [this.nombre_cliente],
        celular: [this.celular],
        descripcion: [this.descripcion],
        estado: [estado],
      });
    } 

  submitData(){
    let data = this.dataForm.value;
    console.log(data);
  
      this.restangular.all('guardarCombinacion').post(data).subscribe((datav) => {
      console.log(data);
      this.presentLoading();
      window.location.reload();
      //this.presentAlert();
    });    
  }

  async presentToast(message:any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async crearHojaCalculo(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Desea Crear una Hoja de Calculo?',
      message: '',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            console.log('Confirm Okay');
            let data = this.data_hoja1.value;
            console.log(data);
              if(data){
                this.restangular.all('/guardarHojaCortadoraPerfil').post(data).subscribe((datav)=>{ 
                  this.presentLoading();
                  window.location.reload();
                });
              }else{
                (error)=>{
                  console.log(error);
                }
              }
          }
        }
      ]
    });

    await alert.present();
  }

  getHoja(user_id:number){
    this.auth.getCarrito('getHojaCalculoPerfil/', user_id)
    .subscribe((res) =>{ 
      this.hojas$ = res as string[];
      console.log(this.hojas$);
      let hoja_id = this.hojas$.id

      // this.getCalculs(user_id, hoja_id);
      //this.carrito$ = Object.values(this.carrito$);
      if(this.hojas$.estado == 'false' ){
        this.btnHoja = false;
        //console.log("si hay algo");
      }else{
        //console.log("no lo hay");
        this.btnHoja = true;
      }
      //this.loadData();  
      return this.hojas$;  
    });
  }

  getSubCategorias(){
    this.auth.getAllObject('getSubCategoria').subscribe((res) =>{
      this.categorias$ = res; 
      console.log(this.categorias$);
        
    });
  }

   async cerrarHoja(){
      let estado = 'true';
      let data = this.data_hoja.value;
      let a = this.hojas$.id;
      
      this.auth.cerrarHojaCortadora('updateStatusHojaCortadora/', a , data).subscribe((datav) => {
        window.location.reload();
     });
  }

  abrirVentana(){
    if (this.btnbool) {
      this.btnbool = false;
    } else {
      this.btnbool = true;
    }
  }

  
  guardarOperacion(){
    let data1 = this.dataFormHistorial.value;
    let a = data1.user_id;
    console.log(data1);
    
      this.restangular.all('guardarCalculadoraHistorial').post(data1).subscribe((datav) => {
          this.presentLoading();
          // this.deleteAll(a); //CAMBIARLO POR EL QUE ACTUALIZA SU ESTADO
      });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Guardando...',
      duration: 4000
    });
    await loading.present();
    const {
      role,
      data
    } = await loading.onDidDismiss();
    //console.log('Loading dismissed!');
  }
  getUser(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    
    this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res;
      let user_id =  this.usuarios$.id;
      console.log(user_id);
      
      
      // this.getCalculs(user_id,'');
      this.getHoja(user_id);
      //console.log(this.usuarios$);
    });
  }
}