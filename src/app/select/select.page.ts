import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {
  public isLogged:boolean = false;
  logs:any=[];
  usuarios$:any=[];
  role:string;
  constructor(public router:Router,public auth:AuthProvider,) { }

  ngOnInit() {
    this.onCheckUser();  
    this.getUser();
  }

  goCalculator(){
    this.router.navigate(['/calculadora']);
  }

  goImportadoras(){
    this.router.navigate(['/importadoras']);
  }
  goCortadora(){
    this.router.navigate(['/cortadora-perfil']);
  }

  getCurrentUser() {
    let user_string = localStorage.getItem("currentUser");
    if (user_string) {
      let user = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  onCheckUser(): void {
    if (this.getCurrentUser() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }

  getUser(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    
    this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res;
      let user_id =  this.usuarios$.id;
      this.role = this.usuarios$.role;
    });
  }
}
