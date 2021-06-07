import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ActionSheetController  } from '@ionic/angular';
import { AuthProvider } from '../providers/auth/auth';
import { Restangular } from 'ngx-restangular';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calculadora-historial',
  templateUrl: './calculadora-historial.page.html',
  styleUrls: ['./calculadora-historial.page.scss'],
})
export class CalculadoraHistorialPage implements OnInit {

  calculo$:any=[];
  dataForm: FormGroup;
  user_id=1;
  id:number;
  total:number;
  resultadoM:number;
  logs:any=[];
  usuarios$:any=[];

  data1:any=[];
  nombre_cliente:any;
  total_suma:any;
  celular:any;
  descripcion:any;
  precio:any;

  constructor(public auth: AuthProvider,public alertController: AlertController,
    public actionSheetController: ActionSheetController,private _formBuilder: FormBuilder,
    private restangular:Restangular,private loadingCtrl:LoadingController,
    private router: Router,  public toastController: ToastController) { 

    }

  ngOnInit() {
    this.getUser();
  }

  async guardarOperacion(){
    const loading = await this.loadingCtrl.create({
      // message: 'Registrando.',
      spinner: 'dots'
      // duration: 1500
    });

    loading.present().then(() => {
      let data = this._formBuilder.group({
        id:[this.id],
        celular: [this.celular],
        nombre_cliente: [this.nombre_cliente],
        precio: [this.precio],
        total_suma:[this.resultadoM],
        descripcion: [this.descripcion],
        user_id: [this.user_id]
      });
      try {
        this.data1 = data.value;
        let a = this.data1.id; 
        //console.log('actualizarCalculo/',this.data1.id);
        console.log(this.data1);

        if (a != 0) {
          this.auth.updateObjectById('actualizarCalculo/', a , this.data1).subscribe((datav) => {
            loading.dismiss().then(()=>{
              console.log(datav);
            // this.navCtrl.back();
            //this.modalController.dismiss();
            // this.closemodal(response.data);
            window.location.reload();
        });
        },
        ()=>{
          loading.dismiss();
        });
      } else{
        loading.dismiss();

        this.presentToast("Ingrese Datos para Actualizar")
      }
    }catch (error) {
        console.log(error);
      }
    });
  }
 
  getCalculos(user_id) {
    this.auth.getAllObjectById('historialCalculos/', user_id)
      .subscribe((res) => {
        this.calculo$ = res;
        console.log(this.calculo$);
      });
  }

  sumaTotalesTotales() {
    this.resultadoM =  this.total_suma * this.precio;
    console.log(this.resultadoM);
    
   return this.resultadoM;
   }

  async deleteAll(item){
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
            this.auth.deleteObjectById('calculadoraHistorialDelete/', item.id).subscribe(res=>{
              window.location.reload();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async presentActionSheet(element) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Historial Calculadora',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.auth.deleteObjectById('calculadoraHistorialDelete/', element.id).subscribe(res=>{
            window.location.reload();
          });
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
         let data = this._formBuilder.group({
            id : [element.id],
            celular: [element.celular],
            nombre_cliente : [element.nombre_cliente],
            precio: [element.precio],
            total_suma:[element.total_suma],
            descripcion:[element.descripcion],
            user_id:[element.user_id]
          });
          this.id = element.id;
          this.celular = element.celular;
          this.nombre_cliente = element.nombre_cliente;
          this.precio = element.precio;
          this.total_suma = element.total_suma;
          this.descripcion = element.descripcion;
          this.user_id = element.user_id;
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
  perfil(){
    this.router.navigate(['/perfil']);
  }

  async presentToast(message:any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  getUser(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    
    this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res;
      let user_id =  this.usuarios$.id;

      this.getCalculos(user_id);
      //console.log(this.usuarios$);
    });
  }
}
