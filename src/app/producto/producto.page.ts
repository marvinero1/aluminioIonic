import { HttpClient } from '@angular/common/http';
import { Component, OnInit, VERSION } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';
import { ModalController } from '@ionic/angular';
import { PedidomodalPage } from '../pedidomodal/pedidomodal.page';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  
  public productoId:any = [];
  public novedad:boolean;

  constructor(private http:HttpClient,public api:AuthProvider,
    private route: ActivatedRoute, private router: Router,
    public modalController: ModalController) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get('id'));
    //this.productoId = id;
    this.getProductById();
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
    console.log('favorits');
    
  }

  perfil(){
    this.router.navigate(['/perfil']);
  }

  back(){
    this.router.navigate(['/productos']);
  }
}
