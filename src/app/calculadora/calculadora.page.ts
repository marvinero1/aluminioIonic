import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { AuthProvider } from '../providers/auth/auth';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Restangular } from 'ngx-restangular';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  public folder: string;
  dataForm: FormGroup;
  dataFormHistorial: FormGroup;
  data: any = '';
  calculo$: any;
  numero1: number;
  numero2: number;
  nombreOperacion: string;
  resParse:any;
  descripcion:string;
  resultado: any = 0;
  total: number;
  totalTotales: number;
  totalTotalesT: number;
  user_id='1';

  constructor(public actionSheetController: ActionSheetController,
    private activatedRoute: ActivatedRoute, private router: Router,
    public auth: AuthProvider, public loadingController: LoadingController,
    private _formBuilder: FormBuilder,public alertController: AlertController,
    private restangular:Restangular,private decimalPipe: DecimalPipe,
    public toastController: ToastController
    ) {}

  ngOnInit() {
    this.dataForm = this.createForm();
    this.getCalculs();
  }

  getCalculs() {
    this.auth.getAllObject('calculos')
      .subscribe((res) => {
        this.calculo$ = res;
        console.log(this.calculo$);
        //Calculamos el TOTAL 
        this.total = this.calculo$.reduce((
          acc,
          obj,
        ) => acc + (obj.numero1 * obj.numero2),
        0);
        console.log("Total: ", this.total);
      });
  }

  calcular() {
      let num1 = this.numero1;
      let num2 = this.numero2;
      if (num1>0||num2>0) {
        this.resultado = num1 * num2;
        this.resultado = this.decimalPipe.transform(this.resultado, '1.1-1');  
        console.log(this.resParse);
      } else {
        this.presentToast("Intenta agregando numeros, para sacar el total.");
      }
      
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      //id : [this.id],
      //nombre: [this.data.nombre,Validators.compose([Validators.required])],
      numero1: [this.numero1],
      numero2: [this.numero2],
      resultado: [this.resultado],
    });
  }


  submitData() {
    let data = this.dataForm.value;
    let data_resultado = data.resultado;
    console.log(data);
    if (data_resultado > 0) {
      this.restangular.all('guardarCalculadora').post(data).subscribe((datav) => {
      console.log(datav);
      this.presentLoading();
      window.location.reload();
      //this.presentAlert();
    });
    } else {
      this.presentToast("El resultado no puede ser 0");
    }
    
  }

  async presentToast(message:any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  sumaTotales() {
    //Calculamos el TOTAL 
    this.total = this.calculo$.reduce(
      (acc, obj) => acc + obj.resultado,0
    );
    console.log("Total: ", this.total);
  }

  sumaTotalesTotales() {
   this.totalTotalesT =  this.total * this.totalTotales;
    return this.totalTotalesT;
  }

  guardarOperacion(){
     let data = this._formBuilder.group({
      extra: [this.totalTotalesT],
      nombre_operacion : [this.nombreOperacion],
      total_suma: [this.total],
      total_extra:[this.totalTotales],
      descripcion:[this.descripcion, Validators.compose([Validators.required])],
      user_id:[this.user_id]
    });
    let data1 = data.value;
    let cel = data1.nombre_operacion;
    let precio = data1.total_extra;

    // let objecy=JSON.stringify(data1);
    // console.log(objecy);
    if (cel>0 || precio>0) {
      this.restangular.all('guardarCalculadoraHistorial').post(data1).subscribe((datav) => {
       console.log(data1);
      window.location.reload();
    });
    } else {
      this.presentToast("Ingresa los datos requeridos")
    }
    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Guardando...',
      duration: 2000
    });
    await loading.present();

    const {
      role,
      data
    } = await loading.onDidDismiss();
    //console.log('Loading dismissed!');
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
            this.auth.deleteObjectById('calculadoraDelete/',item.id).subscribe(res=>{
              window.location.reload();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  async showAlert() { 
    const alert = await this.alertController.create({ 
    header: 'Calculo', 
    subHeader: 'Estado Historial Calculo', 
    message: 'Se guardo el calculo', 
    buttons: ['OK'] 
    }); 
    await alert.present(); 
    const result = await alert.onDidDismiss();  
    console.log(result); 
    }

  perfil() {
    this.router.navigate(['/perfil']);
  }

  async deleteAllALL(){
    const alert = await this.alertController.create({
      cssClass: 'alert-confirm23',
      header: '¿Desea Eliminar este Elemento?',
      message: '',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          
          handler: (blah) => {
            return false
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si',
          handler: () => {
            this.auth.deleteAllObject('calculadoraDeleteAll/').subscribe(res=>{
              window.location.reload();
            });
          }
        }
      ]
    });

    await alert.present();
  }
}