import { Component, OnInit, Input, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';
import { IMProducto } from'../model/models';
import { ActionSheetController, IonInfiniteScroll, ModalController, PopoverController } from '@ionic/angular';
import { PedidomodalPage } from '../pedidomodal/pedidomodal.page';
import { CarritoPage } from '../carrito/carrito.page';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.page.html',
  styleUrls: ['./mis-productos.page.scss'],
})
export class MisProductosPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  @Input() id: string; //id de la importadora
  @Input() user_id:any;
  @Input() importadora:any;

  dataForm: FormGroup;
  productos$:any=[];
  textoBuscar:string='';
  //importadora:string;
  data: any;
  IMProducto
  misProductos:any={};

  constructor(private route: ActivatedRoute, private _formBuilder: FormBuilder,
    public api:AuthProvider, public actionSheetController: ActionSheetController,
    public popoverController: PopoverController, public modalController: ModalController,
    private router: Router,
   ) {
    
   }

  ngOnInit() {
    this.misProductos = this.data;  
    this.dataForm = this.createForm();
    this.getmyProducts();
  }

  async presentActionSheet(element) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Producto Importadora',
      cssClass: 'my-custom-class-pedido',
      buttons: [{
        text: 'Ver',
        role: 'show',
        cssClass: 'my-custom-class-pedido',
        icon: 'eye',
        handler: () => {
          console.log(element);
          this.router.navigate(['/producto/' + element.id]);
          this.modalController.dismiss({
            'dismissed': true
          });
          
        }
      }, {
        text: 'Comprar',
        icon: 'cart',
        cssClass: 'my-custom-class-pedido',
        role: 'buy',
        handler: () => {
          this.add_productCartShop(element);
          
        }
      },
      // {
      //   text: 'Editar',
      //   icon: 'create',
      //   handler: () => {
      //    let data = this._formBuilder.group({
      //       id : [element.id],
      //       extra: [element.extra],
      //       nombre_operacion : [element.nombre_operacion],
      //       total_suma: [element.total_suma],
      //       total_extra:[element.total_extra],
      //       descripcion:[element.descripcion],
      //       user_id:[element.user_id]
      //     });
      //     this.id = element.id;
      //     this.nombre_operacion = element.nombre_operacion;
      //     this.extra = element.extra;
      //     this.descripcion = element.descripcion;
      //     this.total_extra = element.total_extra;
      //     this.total_suma = element.total_suma;
      //   }
      // },
        {
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
    //console.log('onDidDismiss resolved with role', role);
  }

  async add_productCartShop(element) {
    const modal = await this.modalController.create({
      component: PedidomodalPage,
      cssClass: 'my-custom-class-pedidoModal',
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

  async cartDetails(){
    const modal = await this.modalController.create({
      component: CarritoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (event.length == 20) {
        event.target.disabled = true;
      }
    }, 500);
  }
  createForm(): FormGroup {
    return this._formBuilder.group({
      id : [this.id],
      importadora:[this.importadora],
      user_id:[this.user_id],
    });
  }

  getmyProducts(){  
    let data = this.dataForm.value;
    let a = data.id;
    console.log(data);
    
    this.api.getAllObjectById('getMyProducts/', a)
    .subscribe((res) =>{ 
      this.productos$ = res;
      this.productos$ = Object.values(this.productos$);
      this.loadData(this.productos$);    
    });
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
    
  }

  dissmis(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
