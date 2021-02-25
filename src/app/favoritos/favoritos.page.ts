import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos$:any=[];

  constructor(public api:AuthProvider,private router: Router) { }

  ngOnInit() {
    this.getFavoritos();
  }

  getFavoritos(){  
    this.api.getAllObject('favoritos')
    .subscribe((res) =>{ 
      this.favoritos$ = res;
      console.log(this.favoritos$);       
    });
  }

  perfil(){
    this.router.navigate(['/perfil']);
  }

  show(item){
    console.log(item);
    
  }
}
