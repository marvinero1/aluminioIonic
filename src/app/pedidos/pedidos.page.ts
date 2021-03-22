import { Component, OnInit } from '@angular/core';
import { AuthProvider } from '../providers/auth/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  pedidos$:any = [];
  constructor(public api:AuthProvider,public alertController: AlertController,
    private router: Router,) { }

  ngOnInit() {
    this.getPedido();
  }

  getPedido(){
    this.api.getAllObject('getPedido')
    .subscribe((res) =>{ 
      this.pedidos$ = res;
      //console.log(this.pedidos$);        
    });
    }


    async presentAlertConfirm(element) {
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
              this.api.deleteObjectById('pedidoDelete/',element.id).subscribe(res=>{
                console.log(res);
              });

            }
          }
        ]
      });
      await alert.present();
    }
}
