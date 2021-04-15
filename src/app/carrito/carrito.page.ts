import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Restangular } from 'ngx-restangular';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  pedidos$:any = [];
  data:any='';
  dataForm: FormGroup;
  confirmacion:string='true';

  constructor(public api:AuthProvider,public loadingController: LoadingController,
    public alertController: AlertController,private _formBuilder: FormBuilder,
    private router: Router,private restangular:Restangular,) { }

  ngOnInit() {
    this.getPedido();
  }

  getPedido(){
    this.api.getAllObject('getPedido')
      .subscribe((res) =>{ 
      this.pedidos$ = res;
        //console.log(this.pedidos$);        
      //console.log(this.pedidos$);        
        //console.log(this.pedidos$);        
      });
  }

  async sendOrder(element){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: '¿Desea Cotizar este Elemento?',
        message: '',
        buttons: [{
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              return false
              //console.log('Confirm Cancel: blah');
            } }, 
            {
            text: 'Si',
            handler: () => { 
              this.restangular.all('guardarPedidoRealizado').post(element).subscribe(res=>{
                console.log(res);
                this.deleteObject(element);
            });
            }
          }
        ]
      });
      await alert.present();
  }

  deleteObject(element){
    this.api.deleteObjectById('pedidoDelete/', element.id).subscribe(res=>{
      console.log(res);
    });
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Realizando Cotizacion...',
      duration: 4000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    //console.log('Loading dismissed!');
  }
    
  async presentAlertConfirm(element){
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
            this.api.deleteObjectById('pedidoDelete/',element.id).subscribe(res=>{
              console.log(res);
            });

          }
        }
      ]
    });
    await alert.present();
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      //id : [this.id],
      confirmacion: [this.confirmacion],
    });
  }

  perfil(){
    this.router.navigate(['/perfil']);
  }
}
