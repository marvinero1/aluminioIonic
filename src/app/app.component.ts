import { Component, OnInit } from '@angular/core';

import { LoadingController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthProvider } from './providers/auth/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  public selectedIndex = 0;
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
    {
      title: 'Favoritos',
      url: '/favoritos',
      icon: 'heart'
    },
    {
      title: 'Historial Calculos',
      url: '/calculadora-historial',
      icon: 'time'
    },
    {
      title: 'Importadoras',
      url: '/importadoras',
      icon: 'briefcase'
    },
    {
      title: 'Productos',
      url: '/productos',
      icon: 'bag'
    },
    
    {
      title: 'Novedades',
      url: '/novedades',
      icon: 'bag-handle'
    },
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
    {
      title: 'Contáctanos',
      url: '/contactanos',
      icon: 'storefront'
    },
    
  ];
  public labels = ['Salir'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public loadingCtrl: LoadingController,
    public auth:AuthProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

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
