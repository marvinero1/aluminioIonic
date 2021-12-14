import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.page.html',
  styleUrls: ['./novedades.page.scss'],
})
export class NovedadesPage implements OnInit {

  novedades$:any=[]
  constructor(public api:AuthProvider,private router: Router) { }

  ngOnInit() {
    this.getProductoNovedad();
  }

  getProductoNovedad(){
    this.api.getAllObject('productosNovedad')
    .subscribe((res) =>{ 
      this.novedades$ = res;        
    });
  }
  perfil(){
    this.router.navigate(['/perfil']);
  }

  ver(element){
    this.router.navigate(['/producto',element.id])
  }

}
