import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ActionSheetController, MenuController, ToastController } from '@ionic/angular';
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
  numero1: any;
  numero2: any;
  nombre_cliente: string;
  resParse:any;
  descripcion:string;
  resultado: any = 0;
  total: number;
  totalTotales: number;
  celular: number;
  precio: number;
  total_suma: number;
  resultadoM: number;
  logs:any=[];
  usuarios$:any=[];
  user_id:number;
  Aid:number;
  maxVal:any;
  btnbool:boolean = false; 

  constructor(public actionSheetController: ActionSheetController,
    private activatedRoute: ActivatedRoute, private router: Router,
    public auth: AuthProvider, public loadingController: LoadingController,
    private _formBuilder: FormBuilder,public alertController: AlertController,
    private restangular:Restangular,private decimalPipe: DecimalPipe,
    public toastController: ToastController,public menuCtrl: MenuController
    ) {}

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.dataForm = this.createForm();
    this.dataFormHistorial = this.createFormHist();
    this.btnboolean();
    this.getUser();
  }

  getCalculs(user_id) {
    this.auth.getAllObjectById('calculos/', user_id)
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
      
      if (num1!=0 || num2!=0) {
        this.resultado = num1 * num2;
        this.resultado = this.decimalPipe.transform(this.resultado, '1.1-1');  
        console.log(this.resultado);
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
      user_id: [this.user_id],
    });
  }

  createFormHist(): FormGroup {
    return this._formBuilder.group({
      celular: [this.celular, Validators.compose([Validators.required])],
      nombre_cliente: [this.nombre_cliente, Validators.compose([Validators.required])],
      precio: [this.precio, Validators.compose([Validators.required])],
      total_suma:[this.total_suma, Validators.compose([Validators.required])],
      descripcion: [this.descripcion],
      suma_m2:[this.total],
      user_id: [this.user_id]
    });
  }
 
  async submitData() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Desea Guardar Este Calculo?',
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
            let data = this.dataForm.value;
            let data_resultado = data.resultado;
            //console.log(data);
            if (data_resultado != 0) {
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
        }
      ]
    });
    await alert.present();
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
   this.resultadoM =  this.total * this.precio;
   console.log(this.resultadoM);
   
  return this.resultadoM;
  }

  async postItem(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Desea Guardar este Calculo?',
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
            this.guardarOperacion();
          }
        }
      ]
    });
    await alert.present();
  }

  guardarOperacion(){
    let data1 = this.dataFormHistorial.value;
    let a = data1.user_id;
 
    // let objecy = JSON.stringify(data1);
    console.log(data1);
    if (this.dataFormHistorial.valid) {
      this.restangular.all('guardarCalculadoraHistorial').post(data1).subscribe((datav) => {
          this.presentLoading();
        this.deleteAll(a);
      });
    }else{
      this.presentToast("Ingresa los datos requeridos")
    }
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Guardando...',
      duration: 4000
    });
    await loading.present();
    const {
      role,
      data
    } = await loading.onDidDismiss();
    //console.log('Loading dismissed!');
  }

  async deleteItem(item){
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

  btnboolean(){
    if (this.btnbool) {
      this.btnbool = false;
    } else {
      this.btnbool = true;
    }
  }

  deleteAll(user_id){
    this.auth.deleteObjectById('calculadoraDeleteAll/', user_id).subscribe(res=>{
      //window.location.reload();
      console.log(res);
      window.location.reload();
    });
  }

  getUser(){
    this.logs = JSON.parse(localStorage.getItem('Usuario'));
    
    this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
      this.usuarios$ = res;
      let user_id =  this.usuarios$.id;

      this.getCalculs(user_id);
      //console.log(this.usuarios$);
    });
  }
}