import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController } from '@ionic/angular';
import { Router, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../providers/auth/auth';
import {  MenuController } from '@ionic/angular';
import { ContactanosPage } from '../contactanos/contactanos.page';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  dataForm:FormGroup;
  data:any='';
  user:any = {usuario: '', password: ''};

  constructor(public auth:AuthProvider,public loadingCtrl: LoadingController,private router: Router,
    private _formBuilder: FormBuilder,private navCtrl: NavController,public menuCtrl: MenuController,
    public modalController: ModalController) { }
  
  ngOnInit() {
    this.menuCtrl.enable(false);
    this.dataForm = this.createForm();
  }

  createForm() : FormGroup {
    return this._formBuilder.group({     
      email: [this.data.email,Validators.compose([Validators.required])],
      password: [this.data.password,Validators.compose([])]
    });
  }

  async iniciarSesion(){
   const data = this.dataForm.value;
    this.user.email = data.email;
    this.user.password = data.password;
    const loading = await this.loadingCtrl.create({
      // message: 'iniciar sesión.',
      spinner: 'dots'
      // duration: 1500
    });  
    loading.present().then(() => {
      this.auth.login(this.user).subscribe(
        (dat) => {
          console.log("autenticado correctamente" );
          this.auth.getuser().subscribe(
            data => {
              loading.dismiss().then(()=>{
                  // this.router.navigate(['/ciudad']);
                  //this.closemodal(true);
                  this.navCtrl.navigateRoot('/select');
              });
            },
            err => {
              loading.dismiss();
              console.log(err);
            }
          );
        },
        (err) => {          
          console.log("Password o Email Incorrectos");
          
          loading.dismiss();          
        },
        () => {
          loading.dismiss();
        }
      );
    });
  }

    async goContactanos(){
      const modal = await this.modalController.create({
        component: ContactanosPage,
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    }
    name = 'This is about double click';
    public dblcount: any = 0;
    public snglcount: any = 0;
    public message:string="Waiting for a click...";

}