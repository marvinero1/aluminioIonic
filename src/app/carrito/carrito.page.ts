import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
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
  carrito$:any = [];

  data:any='';
  nombre_cotizacion:string;
  dataForm: FormGroup;
  confirmacion:string='true';
  id_carrito;
  user_id=2;
  estado=true;

  constructor(public api:AuthProvider,public loadingController: LoadingController,
    public alertController: AlertController,private _formBuilder: FormBuilder,
    private router: Router,private restangular:Restangular,public modalController: ModalController,) { }

  ngOnInit() {
    this.dataForm = this.createForm();
    this.getCarrito();
  }

  getCarrito(){
    return this.api.getAllObjectById('getCartAttribute/', this.user_id)
      .subscribe((res) =>{ 
      this.carrito$ = res;
      console.log(this.carrito$.id);
      this.getCarritoProductos(this.carrito$.id)
      });
  }

  getCarritoProductos(id_carrito:number){
    return this.api.getAllObjectById('carritoProductosIonic/', id_carrito)
      .subscribe((res) =>{ 
      this.pedidos$ = res;
      });
  }

  sendOrder(){
    let data =  this._formBuilder.group({
        //id : [this.id],
        //nombre: [this.data.nombre,Validators.compose([Validators.required])],
        
        estado:[this.estado]
       
      });
      let data1 = data.value
     console.log(data1); 

     return this.api.updateObjectById('updateStatusCart/', this.carrito$.id)
      .subscribe((res) =>{ 
      
      
      });
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
            this.api.deleteObjectById('deleteProductoCarrito/',element.id).subscribe(res=>{
              console.log(res);
            window.location.reload();

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

  dissmis(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
function id_carrito(id_carrito: any) {
  throw new Error('Function not implemented.');
}

