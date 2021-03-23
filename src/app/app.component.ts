import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  
  public selectedIndex = 0;
  public appPages = [
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
      title: 'Producto',
      url: '/productos',
      icon: 'bag'
    },
    {
      title: 'Importadoras',
      url: '/importadoras',
      icon: 'car'
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
      title: 'Historial Pedidos',
      url: '/pedidos',
      icon: 'time'
    }
  ];
  public labels = ['Salir'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
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
}
