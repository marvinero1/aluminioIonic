import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  selector: 'app-calculadora-historial',
  templateUrl: './calculadora-historial.page.html',
  styleUrls: ['./calculadora-historial.page.scss'],
})
export class CalculadoraHistorialPage implements OnInit {

  calculo$:any=[];

  constructor(public auth: AuthProvider,public alertController: AlertController,) { }

  ngOnInit() {
    this.getCalculos();
  }

  getCalculos() {
    this.auth.getAllObject('historialCalculos')
      .subscribe((res) => {
        this.calculo$ = res;
        console.log(this.calculo$);
      });
  }

  async deleteAll(item){
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
            this.auth.deleteObjectById('calculadoraHistorialDelete/', item.id).subscribe(res=>{
              window.location.reload();
            });
          }
        }
      ]
    });

    await alert.present();
  }
}
