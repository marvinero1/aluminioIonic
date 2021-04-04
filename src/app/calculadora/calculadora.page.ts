import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isNumber } from 'util';
import { ActionSheetController } from '@ionic/angular';
import { AuthProvider } from '../providers/auth/auth';
import { LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  
  public folder: string;
  dataForm: FormGroup;
  data:any='';
  calculo$:any;


  constructor(public actionSheetController: ActionSheetController,
    private activatedRoute: ActivatedRoute,private router: Router,
    public auth:AuthProvider,public loadingController: LoadingController,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCalculs();
    this.dataForm = this.createForm();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  value = '0';
  oldValue = '0';
  numero1 = '0';
  numero2 = '0';

  lastOperator = 'x';
  readyForNewInput = true;
  numberGroups = [
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, 'c', '/', '=']
  ];

  onButtonPress(symbol) {
    console.log(symbol);

    if (isNumber(symbol)) {
      //console.log('is a number');
      if (this.readyForNewInput)
        this.value = '' + symbol;
      else
        this.value += '' + symbol;
      this.readyForNewInput = false;
    }
    else if (symbol === 'c') {
      this.value = '0';
      this.readyForNewInput = true;
    }
    else if (symbol === '=') {
      if (this.lastOperator === 'x')
        this.value = '' + (parseInt(this.oldValue) * parseInt(this.value));
      else if (this.lastOperator === '-')
        this.value = '' + (parseInt(this.oldValue) - parseInt(this.value));
      else if (this.lastOperator === '+')
        this.value = '' + (parseInt(this.oldValue) + parseInt(this.value));
      else if (this.lastOperator === '/')
        this.value = '' + (parseInt(this.oldValue) / parseInt(this.value));
      this.readyForNewInput = true;
      console.log(this.value);
      
    }
    else { // operator
      this.readyForNewInput = true;
      this.oldValue = this.value;
      this.lastOperator = symbol;
    }
  }

  getCalculs(){
    this.auth.getAllObject('calculos')
    .subscribe((res) =>{ 
      this.calculo$ = res;
      console.log(this.calculo$);        
    });
}

  createForm(): FormGroup {
    return this._formBuilder.group({
      //id : [this.id],
      nombre: [this.data.nombre,Validators.compose([Validators.required])],
      numero1 : [this.numero1],
      numero2: [this.numero2],
      resultado : [this.value],

    });
  }

  submitData(){
    let data = this.dataForm.value;
    console.log(data);

    this.auth.postCalculadora('guardarCalculadora/', data).subscribe((datav)=>{ 
        console.log(datav);
        this.presentLoading();
        //this.presentAlert();
    });
    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Guardando...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    //console.log('Loading dismissed!');
  }

  perfil(){
    this.router.navigate(['/perfil']);
  }
}
