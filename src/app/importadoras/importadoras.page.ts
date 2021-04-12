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
  constructor(public api:AuthProvider,private router: Router,) { }

  ngOnInit() {
    this.getImportadoras();
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

  verProductos(element){
    console.log(element);
    
    // this.api.getAllObject('importadoras')
    // .subscribe((res) =>{ 
    //   this.importadoras$ = res;
    //   this.importadoras$ = Object.values(this.importadoras$)      
    // });
  }
}