import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';
import { Restangular } from "ngx-restangular";
import { ModalController } from '@ionic/angular';
import { MisProductosPage } from '../mis-productos/mis-productos.page';
@Component({
  selector: 'app-importadoras',
  templateUrl: './importadoras.page.html',
  styleUrls: ['./importadoras.page.scss'],
})
export class ImportadorasPage implements OnInit {

  importadorImagen:any;
  importadoras$:any=[];
  textoBuscar:string='';
  productos$:any;

  constructor(public api:AuthProvider,private router: Router, private rest:Restangular,
    public modalController: ModalController) { }

  ngOnInit() {
    this.getImportadoras();
    //this.getProducts();
  }

  getImportadoras(){
    this.api.getAllObject('importadoras')
    .subscribe((res) =>{ 
      this.importadoras$ = res;
      this.importadoras$ = Object.values(this.importadoras$)      
    });
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
  }
  perfil(){
    this.router.navigate(['/perfil']);
  }


  onSelect(element){   
    this.presentModal(element);
  }

  async presentModal(element:any) {
    const modal = await this.modalController.create({
      component: MisProductosPage,
      cssClass: 'my-modal-products',
      componentProps: {
        data:{element:element},
        'id':element.id,
        'importadora':element.importadora,
        'user_id': element.user_id,
      }
    });
    return await modal.present();
  }
}