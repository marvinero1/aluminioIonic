import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, ActionSheetController  } from '@ionic/angular';
import { AuthProvider } from '../providers/auth/auth';
import { Restangular } from 'ngx-restangular';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-cortes',
  templateUrl: './mis-cortes.page.html',
  styleUrls: ['./mis-cortes.page.scss'],
})
export class MisCortesPage implements OnInit {

  calculoPerfil$:any=[];
  logs:any=[];
  usuarios$:any=[];

  constructor(public auth: AuthProvider,public alertController: AlertController,
    public actionSheetController: ActionSheetController,private _formBuilder: FormBuilder,
    private restangular:Restangular,private loadingCtrl:LoadingController,
    private router: Router,  public toastController: ToastController) { }

  ngOnInit(){
    this.getUser()
  }

  getCalculos(user_id) {
    this.auth.getAllObjectById('getHistorialCalculos/', user_id)
      .subscribe((res) => {
        this.calculoPerfil$ = res;
        console.log(this.calculoPerfil$);
      });
  }

  getUser(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    
    this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res;
      let user_id =  this.usuarios$.id;
      this.getCalculos(user_id);
    });
  }
}
