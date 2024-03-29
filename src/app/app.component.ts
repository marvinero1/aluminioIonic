import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { LoadingController, Platform, IonRouterOutlet, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthProvider } from './providers/auth/auth';
import { Plugins } from '@capacitor/core';
import { Gesture, GestureController } from '@ionic/angular';
const { App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  public selectedIndex = 0;
  logs:any=[];
  usuarios$:any=[];
  role:string;
  public appPages = [
    {
      title: 'Inicio',
      url: '/select',
      icon: 'home'
    },
    {
      title:'Calculadora',
      url:'/calculadora',
      icon:'calculator'
    },
    {
      title:'Carrito',
      url:'/carrito',
      icon:'cart'
    },
    // {
    //   title: 'Historial Cortes',
    //   url: '/mis-cortes',
    //   icon: 'time'
    // },
    {
      title: 'Historial Calculos',
      url: '/calculadora-historial',
      icon: 'time'
    },
    // {
    //   title: 'Importadoras',
    //   url: '/importadoras',
    //   icon: 'briefcase'
    // },
    // {
    //   title: 'Productos',
    //   url: '/productos',
    //   icon: 'bag'
    // },
    {
      title: 'Mi Perfil',
      url: '/perfil',
      icon: 'accessibility'
    },
    {
      title: 'Mis Cotizaciones',
      url: '/mis-cotizaciones',
      icon: 'checkbox'
    },
    // {
    //   title: 'Contáctanos',
    //   url: '/contactanos',
    //   icon: 'storefront'
    // },
    
  ];
  public labels = ['Salir'];
  private DOUBLE_CLICK_THRESHOLD: number = 500;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public loadingCtrl: LoadingController,
    public auth:AuthProvider,
    public alertController: AlertController,
    public router:Router,
    private gestureCtrl: GestureController,

  ) {
    this.initializeApp();
    this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.getUser();
    // const gesture = this.gestureCtrl.create({
    //   el: this.backButtonEvent,
    //   threshold: 0,
    //   onStart: () => { this.onStart(); }
    // });
  
    // gesture.enable();
  }
  rutaCortadora(){
    this.router.navigateByUrl('/cortadora-perfil');
  }

  rutaImportadora(){
    this.router.navigateByUrl('/importadoras');
  }
  rutaCortadoraHistorial(){
    this.router.navigateByUrl('/mis-cortes');
  }

  backButtonEvent() {
    document.addEventListener("backbutton", () => {
    this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
      if (outlet && outlet.canGoBack()) {
      outlet.pop();
        } 
        });
    });
    }

    getUser(){
      this.logs = JSON.parse(localStorage.getItem('Usuario'));
      
      this.auth.getUsers('usuariosStorage/', this.logs).subscribe((res) =>{ 
        this.usuarios$ = res;
        let user_id =  this.usuarios$.id;
        this.role = this.usuarios$.role;
          console.log(this.role);
      });
    }

  // backNativeButton(){
  //   this.platform.backButton.subscribeWithPriority(-1, () => {
  //     if (!this.routerOutlet.canGoBack()) {
  //       this.salirButton();
  //       App.exitApp();
  //     }
  //   });
  // }

  // async salirButton(){
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: '¿Desea Salir de Altool?',
  //     message: '',
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         role: 'cancel',
  //         cssClass: 'secondary',
  //         handler: (blah) => {
  //           return false
  //           //console.log('Confirm Cancel: blah');
  //         }
  //       }, {
  //         text: 'Si',
  //         handler: () => {
  //           this.cerrarsesion();
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  async cerrarsesion(){
    console.log("cerrar sesion");
    const loading = await this.loadingCtrl.create({
      spinner: 'dots'
      // duration: 1500
    });
    loading.present().then(() => {
      this.auth.logout().subscribe(
        data => {
          loading.dismiss().then(()=>{
            // this.navCtrl.navigateRoot('/home');
            // this.router.navigate(['/inicio']);
          });
          console.log("Salio");
        },
        ()=>{
          // this.navCtrl.navigateRoot('/home');
          loading.dismiss();
        }
      );
      
    });
  }
}
