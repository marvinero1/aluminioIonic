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
    //this.getCalculs();
    //this.dataForm = this.createForm();
  }



  getCalculs(){
    this.auth.getAllObject('calculos')
    .subscribe((res) =>{ 
      this.calculo$ = res;
      console.log(this.calculo$);        
    });
  }

  calcular(){
    console.log("hola calculo");
    
  }

  // createForm(): FormGroup {
    // return this._formBuilder.group({
    //   //id : [this.id],
    //   nombre: [this.data.nombre,Validators.compose([Validators.required])],
    //   numero1 : [this.numero1],
    //   numero2: [this.numero2],
    //   resultado : [this.value],

    // });
  // }

  // submitData(){
  //   let data = this.dataForm.value;
  //   console.log(data);

  //   this.auth.postCalculadora('guardarCalculadora/', data).subscribe((datav)=>{ 
  //       console.log(datav);
  //       this.presentLoading();
  //       //this.presentAlert();
  //   });
    
  // }

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
