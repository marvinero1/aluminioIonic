import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ActionSheetController  } from '@ionic/angular';
import { AuthProvider } from '../providers/auth/auth';
import { Restangular } from 'ngx-restangular';
@Component({
  selector: 'app-calculadora-historial',
  templateUrl: './calculadora-historial.page.html',
  styleUrls: ['./calculadora-historial.page.scss'],
})
export class CalculadoraHistorialPage implements OnInit {

  calculo$:any=[];
  dataForm: FormGroup;
  user_id=1;
  id:number;

  data1:any=[];
  extra: any;
  nombre_operacion:any;
  total_suma:any;
  total_extra:any;
  descripcion:any;
  totalTotalesT:any;

  constructor(public auth: AuthProvider,public alertController: AlertController,
    public actionSheetController: ActionSheetController,private _formBuilder: FormBuilder,
    private restangular:Restangular) { 

    }

  ngOnInit() {
    this.getCalculos();
    
  }

  guardarOperacion(){
    let data = this._formBuilder.group({
      id:[this.id],
     extra: [this.totalTotalesT],
     nombre_operacion : [this.nombre_operacion],
     total_suma: [this.total_suma],
     total_extra:[this.total_extra],
     descripcion:[this.descripcion],
     user_id:[this.user_id]
     
   });

    this.data1 = data.value;
    
   // let objecy=JSON.stringify(data1);
   // console.log(objecy);
    //console.log(this.data1);
    //console.log('updateCalculo/'+this.data1.id);
    
   this.auth.updateObjectById('updateCalculo/' , this.data1.id).subscribe((datav) => {
     
     window.location.reload();
   });
 }
 

  getCalculos() {
    this.auth.getAllObject('historialCalculos')
      .subscribe((res) => {
        this.calculo$ = res;
        console.log(this.calculo$);
      });
  }

  sumaTotalesTotales() {
    this.totalTotalesT =  this.total_suma * this.total_extra;
     return this.totalTotalesT;
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

  async presentActionSheet(element) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones Historial Calculadora',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log(element);
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
         let data = this._formBuilder.group({
            id : [element.id],
            extra: [element.extra],
            nombre_operacion : [element.nombre_operacion],
            total_suma: [element.total_suma],
            total_extra:[element.total_extra],
            descripcion:[element.descripcion],
            user_id:[element.user_id]
          });
          this.id = element.id;
          this.nombre_operacion = element.nombre_operacion;
          this.extra = element.extra;
          this.descripcion = element.descripcion;
          this.total_extra = element.total_extra;
          this.total_suma = element.total_suma;
        }
      },  {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          actionSheet.dismiss();
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
