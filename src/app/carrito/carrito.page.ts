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
  nombre_cotizacion:string;
  dataForm: FormGroup;
  confirmacion:string='true';

  constructor(public api:AuthProvider,public loadingController: LoadingController,
    public alertController: AlertController,private _formBuilder: FormBuilder,
    private router: Router,private restangular:Restangular,) { }

  ngOnInit() {
    this.dataForm = this.createForm();
    this.getPedido();
  }

  getPedido(){
    this.api.getAllObject('getPedido')
      .subscribe((res) =>{ 
      this.pedidos$ = res;
      
      
      });
  }

  async sendOrder(element){
    let data =  this._formBuilder.group({
        //id : [this.id],
        //nombre: [this.data.nombre,Validators.compose([Validators.required])],
        id: [element.id],
        nombre: [element.nombre],
        imagen: [element.imagen],
        precio: [element.precio],
        color: [element.color],
        ancho: [element.ancho],
        codigo: [element.codigo],
        alto: [element.alto],
        puntuacion: [element.puntuacion],
        descripcion: [element.descripcion],
        importadora: [element.importadora],
        disponibilidad: [element.disponibilidad],
        tipo_medida: [element.tipo_medida],
        cantidad_pedido: [element.cantidad_pedido],
        user_id: [element.user_id],
        
        nombre_pedido: this.nombre_cotizacion,
       
      });
      let data1 = data.value
     console.log(data1); 

     this.loadingSave(data1);
    }

    async loadingSave(element){
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
                //this.deleteObject(element);
            });
            }
          }
        ]
      });
      await alert.present();
    }
    
      
  

  deleteObject(element){
    this.api.deleteObjectById('pedidoDelete/', element.id).subscribe(res=>{
      window.location.reload();
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
