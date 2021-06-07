import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthProvider } from '../providers/auth/auth';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  favoritos$:any=[];
  logs:any=[];
  usuarios$:any=[];

  constructor(public auth:AuthProvider,private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
    this.getUser();
  }

  getFavoritos(user_id:number){  
    this.auth.getAllObjectById('favoritos/', user_id)
    .subscribe((res) =>{ 
      this.favoritos$ = res;
      // console.log(this.favoritos$);       
    });
  }
  show(item){
    this.router.navigate(['/producto/'+ item.productos_id]);
  }

  return(){
    this.router.navigate(['/favoritos']);
  }

  async presentAlertConfirm(item) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Desea Eliminar este Elemento?',
      message: '',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            return false
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.auth.deleteObjectById('favoritoDelete/',item.id).subscribe(res=>{
              console.log(res);
              window.location.reload();
            });
            
          }
        }
      ]
    });

    await alert.present();
  }
  perfil(){
    this.router.navigate(['/perfil']);
  }

  getUser(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    
    this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res;
      let user_id =  this.usuarios$.id;
      this.getFavoritos(user_id);
    });
  }
}
