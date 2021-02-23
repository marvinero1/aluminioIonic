import { Component, OnInit } from '@angular/core';
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
  constructor(public api:AuthProvider) { }

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
  
  
}
