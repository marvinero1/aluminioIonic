import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';
// import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { Router } from '@angular/router';
import { ContraseniaPage } from '../contrasenia/contrasenia.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
  logs:any=[];
  usuarios$:any=[];

  constructor(public auth:AuthProvider,
    private router:Router, public modalController: ModalController,) { }

  ngOnInit() {
    this.getEmail();
  }

  // changeImagenUser(){    
  // }

  async changePasswordUser(){
    const modal = await this.modalController.create({
      component: ContraseniaPage,
      cssClass: 'my-custom-class-contraseniaModal',
      
    });
    return await modal.present();
  }

  getEmail(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    
    this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res; 
      console.log(this.usuarios$);
    });
  }
}
