import { Component, Input, OnInit, VERSION } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../providers/auth/auth';


@Component({
  selector: 'app-pedidomodal',
  templateUrl: './pedidomodal.page.html',
  styleUrls: ['./pedidomodal.page.scss'],
})
export class PedidomodalPage implements OnInit {
  
  @Input() id: string;
  @Input() nombre: string;
  @Input() importadora: string;
  @Input() estado: string;
  @Input() disponibilidad: string;
  @Input() confirmacion: string;
  @Input() codigo: string;
  @Input() color: string;
  @Input() descripcion: string;
  @Input() imagen: string;
  @Input() novedad: string;
  @Input() precio: string;
  @Input() alto: string;
  @Input() ancho: string;
  @Input() puntuacion: string;
  @Input() categorias_id: string;
  @Input() subcategorias_id: string;
  @Input() tipo_medida: string;
  

  dataForm: FormGroup;
  data:any='';
  
  constructor(public modalController: ModalController,private _formBuilder: FormBuilder,
    public auth:AuthProvider,public loadingController: LoadingController,
    public alertController: AlertController
    ) { }
 

  ngOnInit() {
    this.dataForm = this.createForm();
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      id : [this.id],
      nombre: [this.nombre,Validators.compose([Validators.required])],
      importadora: [this.importadora,Validators.compose([Validators.required])],
      estado: [this.estado,Validators.compose([Validators.required])],
      disponibilidad: [this.disponibilidad,Validators.compose([Validators.required])],
      confirmacion: [this.confirmacion,Validators.compose([Validators.required])],
      codigo: [this.codigo],
      color: [this.color],
      descripcion: [this.descripcion],
      imagen: [this.imagen],
      novedad: [this.novedad],
      precio: [this.precio],
      alto: [this.alto],
      ancho: [this.ancho],
      puntuacion: [this.puntuacion],
      categorias_id: [this.categorias_id],
      subcategorias_id: [this.subcategorias_id],
      tipo_medida: [this.tipo_medida],
      user_id : [this.data.user_id],
      cantidad_pedido : [this.data.cantidad_pedido],

    });
  }


  submitData(){
    let data = this.dataForm.value;
    console.log(data);

    if(this.data){
      this.auth.postPedido('guardarPedido/', data).subscribe((datav)=>{ 
          this.dismiss();
          
          console.log(datav);
          this.presentLoading();
          //this.presentAlert();
      });
    }else{
      (error)=>{
        console.log(error);
      };
    }  
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Agregando a Carrito',
      duration: 4000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    //console.log('Loading dismissed!');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Carrito',
      //subHeader: 'Subtitle',
      message: 'Se añadio a Carrito',
      buttons: ['OK']
    });

    await alert.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  name = 'Angular ' + VERSION.major;
  value = 0;

  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }

  
}
