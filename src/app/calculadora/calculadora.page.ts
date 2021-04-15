import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  isNumber
} from 'util';
import {
  ActionSheetController
} from '@ionic/angular';
import {
  AuthProvider
} from '../providers/auth/auth';
import {
  LoadingController
} from '@ionic/angular';
import {
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Restangular } from 'ngx-restangular';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  public folder: string;
  dataForm: FormGroup;
  data: any = '';
  calculo$: any;
  numero1: any;
  numero2: any;
  resultado: any = 0;
  total: number;
  totalTotales: number;
  totalTotalesT: number;

  constructor(public actionSheetController: ActionSheetController,
    private activatedRoute: ActivatedRoute, private router: Router,
    public auth: AuthProvider, public loadingController: LoadingController,
    private _formBuilder: FormBuilder,public alertController: AlertController,
    private restangular:Restangular,
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
      });
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

  calcular() {
    let num1 = this.numero1;
    let num2 = this.numero2;
    this.resultado = this.numero1 * this.numero2;
    console.log(this.resultado);

  }

  submitData() {
    let data = this.dataForm.value;
    console.log(data);
    this.restangular.all('guardarCalculadora').post(data).subscribe((datav) => {
      console.log(datav);
      this.presentLoading();
      //this.presentAlert();
    });
  }

  sumaTotales() {
    //Calculamos el TOTAL 
    this.total = this.calculo$.reduce(
      (acc, obj) => acc + obj.resultado,
      0
    );
    console.log("Total: ", this.total);
  }

  sumaTotalesTotales() {
   this.totalTotalesT = this.totalTotales * this.total;
    //console.log(totalTotalesT);
    return this.totalTotalesT;
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
              console.log(res);
            });
          }
        }
      ]
    });

    await alert.present();
  }

  perfil() {
    this.router.navigate(['/perfil']);
  }
}