import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input, VERSION } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';
import { ModalController } from '@ionic/angular';
import { PedidomodalPage } from '../pedidomodal/pedidomodal.page';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  @Input() id: string;
  @Input() nombre: string;
  @Input() importadora: string;
  @Input() estado: string;
  @Input() disponibilidad: string;

  @Input() codigo: string;
  @Input() color: string;
  @Input() descripcion: string;
  @Input() imagen: string;
  @Input() novedad: boolean;
  @Input() precio: string;
  @Input() alto: string;
  @Input() ancho: string;
  @Input() puntuacion: string;
  @Input() categorias_id: string;
  @Input() subcategorias_id: string;
  @Input() tipo_medida: string;
  
  public productoId:any = [];
  //public novedad:boolean;

  constructor(private http:HttpClient,public api:AuthProvider,
    private route: ActivatedRoute, private router: Router,
    public modalController: ModalController,
    public alertController: AlertController) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.productoId = id;
    this.getProductById();
    console.log(this.productoId.id);
    
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

  favorito(productoFavorito){
    this.presentAlertConfirm(productoFavorito);
    console.log(productoFavorito);
     
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
            this.api.postFavorito('guardarFavorito/', productoFavorito).subscribe(res=>{
              console.log(res);
              this.return();
            });
            
          }
        }
      ]
    });

    await alert.present();
  }

  return(){
    this.router.navigate(['/favoritos']);
  }
}
