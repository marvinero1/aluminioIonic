import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ActionSheetController  } from '@ionic/angular';
import { AuthProvider } from '../providers/auth/auth';
import { Restangular } from 'ngx-restangular';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-cortes',
  templateUrl: './mis-cortes.page.html',
  styleUrls: ['./mis-cortes.page.scss'],
})
export class MisCortesPage implements OnInit {

  calculoPerfil$:any=[];
  hoja_calculo_perfil$:any=[];
  logs:any=[];
  usuarios$:any=[];
  data:any=[];
  data1:any=[];
  combinacion:any;
  dataFormHistorial: FormGroup;
  ancho:any;
  alto:any;
  linea:any;
  id:number;
  btnbool:boolean = false;
  btnboolPefil:boolean = false;
  role:string;

  nombre_cliente:any;
  celular:any;
  descripcion:any;


  constructor(public auth: AuthProvider,public alertController: AlertController,
    public actionSheetController: ActionSheetController,private _formBuilder: FormBuilder,
    private restangular:Restangular,private loadingCtrl:LoadingController,
    private router: Router,  public toastController: ToastController) { }

  ngOnInit(){
    this.getUser();
    this.dataFormHistorial = this.createFormHist();
  }

  getHojaCalculo(user_id) {
    this.auth.getAllObjectById('getHojaCalculoPerfilEditapp/', user_id)
      .subscribe((res) => {
        this.hoja_calculo_perfil$ = res;
        console.log(this.hoja_calculo_perfil$);
      });
  }


  getPerfils(user_id) {
    this.auth.getAllObjectById('getHistorialCalculos/', user_id)
      .subscribe((res) => {
        this.calculoPerfil$ = res;
        // console.log(this.calculoPerfil$);
      });
  }

  async selectOptionHojaPerfil(element) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Historial Cortes',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteHojaCalculo(element);
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          this.btnboolean(); 
          this.id = element.id;
          this.nombre_cliente = element.nombre_cliente;
          this.celular = element.celular;
          this.descripcion = element.descripcion;
        }
      },  {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          actionSheet.dismiss();
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async selectOptionPerfil(element) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Perfiles',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deletePerfil(element);
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          this.btnbooleanPerfil(); 
          this.id = element.id;
          this.alto = element.alto;
          this.ancho = element.ancho;
          this.linea = element.linea;
          this.combinacion = element.combinacion;
        }
      },{
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          actionSheet.dismiss();
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  createFormHist(): FormGroup {
    return this._formBuilder.group({
      combinacion: [this.combinacion],
      ancho: [this.ancho, Validators.compose([Validators.required])],
      alto: [this.alto, Validators.compose([Validators.required])],
      linea:[this.linea, Validators.compose([Validators.required])],
    });
  }
 
  async guardarOperacionHoja(element) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Actualización',
      message: '¿Desea Actualizar este Item?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            let data = this._formBuilder.group({
              id:[this.id],
              nombre_cliente: [this.nombre_cliente, Validators.compose([Validators.required])],
              celular: [this.celular,  Validators.compose([Validators.required])],
              descripcion: [this.descripcion,  Validators.compose([Validators.required])],
            });

            this.data1 = data.value;
            let a = this.data1.id; 
            console.log(this.data1);
            
            if(data.valid){
              this.auth.updateObjectById('updateStatusHojaAll/', a , this.data1).subscribe((datav) => {
                console.log(datav);
                window.location.reload();
              });
            } else{
              this.presentToast("Ingrese Datos para Actualizar");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async guardarOperacionPerfil(element) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Actualización',
      message: '¿Desea Actualizar este Item?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            let data = this._formBuilder.group({
              id:[this.id],
              ancho: [this.ancho, Validators.compose([Validators.required])],
              alto: [this.alto,  Validators.compose([Validators.required])],
              linea: [this.linea,  Validators.compose([Validators.required])],
              combinacion: [this.combinacion,  Validators.compose([Validators.required])],

            });

            this.data1 = data.value;
            let a = this.data1.id; 
            console.log(this.data1);
            
            if(data.valid){
              this.auth.updateObjectById('actualizarPerfil/', a , this.data1).subscribe((datav) => {
                console.log(datav);
                window.location.reload();
              });
            } else{
              this.presentToast("Ingrese Datos para Actualizar");
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async presentToast(message:any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  btnboolean(){
    if (this.btnbool) {
      this.btnbool = false;
    } else {
      this.btnbool = true;
    }
  }
  btnbooleanPerfil(){
    this.btnboolean();
    if (this.btnboolPefil) {
      this.btnboolPefil = false;
    } else {
      this.btnboolPefil = true;
    }
  }
  cerrar(){
    if (this.btnbool) {
      this.btnbool = false;
    } else {
      this.btnbool = true;
    }
  }

  async deleteHojaCalculo(element){
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: '¿Desea Eliminar este Elemento?',
    message: '',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          return false
          //console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Si',
        handler: () => {
          this.auth.deleteObjectById('deleteHojaPerfil/', element.id).subscribe(res=>{
            window.location.reload();
          });
        }
      }
    ]
  });

    await alert.present();
  }

  async deletePerfil(element){
    const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: '¿Desea Eliminar este Elemento?',
    message: '',
    buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          return false
          //console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Si',
        handler: () => {
          this.auth.deleteObjectById('deletePerfil/', element.id).subscribe(res=>{
            window.location.reload();
          });
        }
      }
    ]
  });

    await alert.present();
  }

  getUser(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    
    this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res;
      let user_id =  this.usuarios$.id;
      this.role = this.usuarios$.role;
       console.log(this.role);
       
      this.getPerfils(user_id);
      this.getHojaCalculo(user_id);
    });
  }
}
