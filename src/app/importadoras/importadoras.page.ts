import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';

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
  constructor(public api:AuthProvider,private router: Router,) { }

  ngOnInit() {
    this.getImportadoras();
    this.getProducts();
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

  onSelect(){
    this.router.navigate(['/productos',])
  }


  verProductos(){

  
    // this.api.getAllObject('importadoras')
    // .subscribe((res) =>{ 
    //   this.importadoras$ = res;
    //   this.importadoras$ = Object.values(this.importadoras$)      
    // });
  }

  getProducts(){
    this.api.getAllObject('misProductos')
    .subscribe((res) =>{ 
      this.productos$ = res; 
      console.log(this.productos$);
            
    });
}
}