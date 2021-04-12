import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input, VERSION } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';
import { ModalController } from '@ionic/angular';
import { PedidomodalPage } from '../pedidomodal/pedidomodal.page';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ModalfavoritosPage } from '../modalfavoritos/modalfavoritos.page';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})

export class ProductoPage implements OnInit {
 
  public productoId:any = [];
  public novedad:boolean;
  dataForm: FormGroup;
  data:any='';

  constructor(public api:AuthProvider, private route: ActivatedRoute,
    private router: Router,
    public modalController: ModalController,
    public alertController: AlertController,
    private _formBuilder: FormBuilder,public loadingController: LoadingController,
    public auth:AuthProvider) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.productoId = id;
    this.getProductById();
    this.dataForm = this.createForm();
    //console.log(productoId);
    
  }

  getProductById(){
    let routeParamId: string | number | null = this.route.snapshot.paramMap.get('id');
    if(routeParamId){
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      let a = this.api.getAllObjectById('productos/',id).subscribe((res) =>{ 
        this.productoId = res;
        console.log(this.productoId);
        this.novedad = this.productoId.novedad 
      });
    }
  }

  async presentModal(element) {
    const modal = await this.modalController.create({
      component: PedidomodalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        data:{element:element},
        'alto': element.alto,
        'ancho': element.ancho,
        'categorias_id': element.categorias_id,
        'codigo': element.codigo,
        'confirmacion': element.confirmacion,
        'color': element.color,
        'descripcion': element.descripcion,
        'disponibilidad': element.disponibilidad,
        'estado': element.estado,
        'id': element.id,
        'imagen': element.imagen,
        'importadora': element.importadora,
        'nombre': element.nombre,
        'novedad':element.novedad,
        'precio': element.precio,
        'puntuacion': element.puntuacion,
        'subcategorias_id': element.subcategorias_id,
        'tipo_medida': element.tipo_medida,
      }
    });
    return await modal.present();
  }

  name = 'Angular ' + VERSION.major;
  value = 0;

  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      //id : [this.id],
      //nombre: [this.data.nombre,Validators.compose([Validators.required])],
      id : [this.data.id],
      nombre: [this.data.nombre],
      alto : [this.data.alto],
    });
  }

  submitData(){
    let data = this.dataForm.value;
    console.log(data);

    // this.auth.postCalculadora('guardarCalculadora/', data).subscribe((datav)=>{ 
    //     console.log(datav);
    //     this.presentLoading();
    //     //this.presentAlert();
    // });
  }

  perfil(){
    this.router.navigate(['/perfil']);
  }

  back(){
    this.router.navigate(['/productos']);
  }

  async presentAlertConfirm(productoFavorito) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Desea Agregar este Elemento a Favoritos?',
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
            this.submitData();
            // this.api.postFavorito('guardarFavorito/', productoFavorito).subscribe(res=>{
            //   console.log(res);
            //   this.return();
            // });
          }
        }
      ]
    });
    await alert.present();
  }

  async presentModalFavorito(element) {
    const modal = await this.modalController.create({
      component: ModalfavoritosPage,
      cssClass: 'my-custom-class-modal-favorito',
      componentProps: {
        data:{element:element},
        'alto': element.alto,
        'ancho': element.ancho,
        'categorias_id': element.categorias_id,
        'codigo': element.codigo,
        'confirmacion': element.confirmacion,
        'color': element.color,
        'descripcion': element.descripcion,
        'disponibilidad': element.disponibilidad,
        'estado': element.estado,
        'id': element.id,
        'imagen': element.imagen,
        'importadora': element.importadora,
        'nombre': element.nombre,
        'novedad':element.novedad,
        'precio': element.precio,
        'puntuacion': element.puntuacion,
        'subcategorias_id': element.subcategorias_id,
        'tipo_medida': element.tipo_medida,
      }
    });
    return await modal.present();
  }

  return(){
    this.router.navigate(['/favoritos']);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Guardando...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    //console.log('Loading dismissed!');
  }
}
