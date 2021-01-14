import { viewClassName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(public loadingCtrl: LoadingController,private router: Router) { }

  ngOnInit() {}

  async iniciarSesion(){
    const loading=await this.loadingCtrl.create({
      spinner:'crescent',

      message:'Ingresando..',
      duration:5000,
      cssClass:'custom-loader-class',
    });
    await loading.present();
    this.router.navigate(['/productos']);
  }
}
