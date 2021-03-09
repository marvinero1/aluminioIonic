import { Component, OnInit, Input } from '@angular/core';
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

  @Input() id: string;
  @Input() nombre: string;
  @Input() importadora: string;
  @Input() estado: string;
  @Input() disponibilidad: string;

  @Input() codigo: string;
  @Input() color: string;
  @Input() descripcion: string;
  @Input() imagen: string;
  @Input() novedad: string;
  @Input() precio: string;
  @Input() alto: string;
  @Input() ancho: string;
  @Input() puntuacion: string;
  @Input() categorias_id: string;
  @Input() subcategorias_id: string;
  @Input() tipo_medida: string;

  constructor(public api:AuthProvider,private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
    this.getFavoritos();
    console.log(this.id);
    
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
