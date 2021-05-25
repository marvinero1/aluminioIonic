import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';
import { Router } from '@angular/router';

import { Restangular } from "ngx-restangular";
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  
  titulo= "Productos";
  productos$:any=[];
  textoBuscar:string='';

  constructor(public api:AuthProvider,private router: Router){ 
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
      this.api.getAllObject('productos').subscribe((res) =>{ 
        this.productos$ = res;       
      });
  }

  onSelect(element){
    this.router.navigate(['/producto',element.id])
  }

  buscar(event){
    this.textoBuscar = event.detail.value;
    
  }
  perfil(){
    this.router.navigate(['/perfil']);
  }

}
