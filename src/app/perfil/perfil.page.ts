import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
  logs:any=[];
  usuarios$:any=[];

  constructor(public auth:AuthProvider) { }

  ngOnInit() {
    this.getEmail();
  }

  getEmail(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    
    this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res; 
      console.log(this.usuarios$);
    });
  }
}
