import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { AuthProvider } from '../providers/auth/auth';
import { Restangular } from "ngx-restangular";


@Component({
  selector: 'app-modalfavoritos',
  templateUrl: './modalfavoritos.page.html',
  styleUrls: ['./modalfavoritos.page.scss'],
})
export class ModalfavoritosPage implements OnInit {

  dataForm: FormGroup;
  user_id:number;
  logs:any=[];
  usuarios$:any=[];
  
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

  constructor(public modalController: ModalController, public auth:AuthProvider,
     private _formBuilder: FormBuilder,private restangular:Restangular,
     public loadingController: LoadingController) { }

  ngOnInit() {
    this.dataForm = this.createForm();
    this.getUser();
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
      productos_id : [this.id],
      user_id:[this.user_id],
    });
  }

  guardarFavorito(){
    let data = this.dataForm.value;
    console.log(data);
    if(data){
      this.restangular.all('guardarFavorito').post(data).subscribe((datav)=>{ 
          this.dismiss();
          this.presentLoading();
      });
    }else{
      (error)=>{
        console.log(error);
      }
    }
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Agregando a Favoritos!!',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    //console.log('Loading dismissed!');
  }

  getUser(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    
    this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res;
    });
  }
}
