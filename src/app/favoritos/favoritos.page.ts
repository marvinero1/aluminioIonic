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


  constructor(public api:AuthProvider,private router: Router,
    public alertController: AlertController) { }

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
    //console.log(item);
    this.router.navigate(['/producto/'+ item.id]);
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
            this.api.deleteObjectById('favoritoDelete/',item.id).subscribe(res=>{
              console.log(res);
              this.return();
            });
            
          }
        }
      ]
    });

    await alert.present();
  }
}
