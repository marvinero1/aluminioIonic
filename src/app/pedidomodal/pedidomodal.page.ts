import { Component, Input, OnInit, VERSION } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../providers/auth/auth';
import { Restangular } from 'ngx-restangular';
import { empty } from 'rxjs';


@Component({
  selector: 'app-pedidomodal',
  templateUrl: './pedidomodal.page.html',
  styleUrls: ['./pedidomodal.page.scss'],
})
export class PedidomodalPage implements OnInit {
  
  @Input() id: string;
  @Input() nombre: string;
  @Input() importadora: string;
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
  
  formularioarrito : FormGroup;
  dataForm: FormGroup;
  data:any='';
  carrito$:any=[];
  user_id=2;
  carrito_id:string;
  btnCarrito:boolean;
  
  constructor(public modalController: ModalController,private _formBuilder: FormBuilder,
    public auth:AuthProvider,public loadingController: LoadingController,
    public alertController: AlertController,private restangular:Restangular
    ) { }
 

  ngOnInit() {
    this.dataForm = this.createForm();
    this.getmyCars();
  }

  getmyCars(){  
    let data = this.dataForm.value;
    //console.log(data);
    this.auth.getCarrito('getCartAttribute/', data.user_id)
    .subscribe((res) =>{ 
      this.carrito$ = res as string[];
      //this.carrito$ = Object.values(this.carrito$);
      if(this.carrito$.estado == 'false' ||this.carrito$.user_id == data.user_id){
        this.btnCarrito = true;
        //console.log("si hay algo");
      }else{
        //console.log("no lo hay");
        this.btnCarrito = false;
      }
      //this.loadData();    
    });
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      //id : [this.id], //pertenece al id del producto
      //estado: [this.estado,Validators.compose([Validators.required])],
      carro_id : [this.data.carro_id],
      importadora: [this.importadora,Validators.compose([Validators.required])],
      descripcion: [this.descripcion],
      color: [this.data.color],
      cantidad_pedido:[this.data.cantidad_pedido],
      user_id : [this.user_id],

      nombre:[this.nombre],
      imagen:[this.imagen],
      precio:[this.precio],
      ancho:[this.ancho],
      alto:[this.alto],
      codigo:[this.codigo],
      tipo_medida:[this.tipo_medida],
      categorias_id:[this.categorias_id],
      subcategorias_id:[this.subcategorias_id],

    });
  }

  submitData(){
    let data = this.dataForm.value;
    console.log(data);
    
    console.log(data);
    if(this.data){
      this.restangular.all('guardarPedido').post(data).subscribe((datav)=>{ 
          this.dismiss();
          this.presentLoading();
          this.presentAlert();
      });
    }else{
      (error)=>{
        console.log(error);
      };
    }  
  }

  crearCarrito(){
    let estado:string = 'false';
    this.formularioarrito = this._formBuilder.group({
      id : [this.id],
      estado: [estado],
      importadora: [this.importadora],
      descripcion: [this.descripcion],
      user_id : [this.user_id],
    });
    let data = this.formularioarrito.value;
    if(data){
        this.restangular.all('guardarCarrito/').post(data).subscribe((datav)=>{ 
            this.dismiss();
            // this.presentLoading();
            // this.presentAlert();
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
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Carrito',
      //subHeader: 'Subtitle',
      message: 'Se añadio a Carrito',
      buttons: ['OK']
    });
    await alert.present();
  }

  dismiss(){
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