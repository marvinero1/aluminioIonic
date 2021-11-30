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

  constructor(public auth: AuthProvider,public alertController: AlertController,
    public actionSheetController: ActionSheetController,private _formBuilder: FormBuilder,
    private restangular:Restangular,private loadingCtrl:LoadingController,
    private router: Router,  public toastController: ToastController) { }

  ngOnInit(){
    this.getUser();
    this.dataFormHistorial = this.createFormHist();
  }

  getCalculos(user_id) {
    this.auth.getAllObjectById('getHistorialCalculos/', user_id)
      .subscribe((res) => {
        this.calculoPerfil$ = res;
        // console.log(this.calculoPerfil$);
      });
  }

  async presentActionSheet(element) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Historial Cortes',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.confirmacion(element);
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          this.btnboolean(); 
          this.id = element.id;
          this.combinacion = element.combinacion;
          this.ancho = element.ancho;
          this.alto = element.alto;
          this.linea = element.linea;
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

  createFormHist(): FormGroup {
    return this._formBuilder.group({
      combinacion: [this.combinacion],
      ancho: [this.ancho, Validators.compose([Validators.required])],
      alto: [this.alto, Validators.compose([Validators.required])],
      linea:[this.linea, Validators.compose([Validators.required])],
    });
  }
 
  async guardarOperacion(element) {
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
  cerrar(){
    if (this.btnbool) {
      this.btnbool = false;
    } else {
      this.btnbool = true;
    }
  }

  async confirmacion(element){
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
          this.auth.deleteObjectById('HistorialDelete/', element.id).subscribe(res=>{
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
      this.getCalculos(user_id);
    });
  }
}
