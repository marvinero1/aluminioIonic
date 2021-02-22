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
<<<<<<< HEAD
      title: 'Favoritos',
      url: '/favoritos',
      icon: 'heart'
    },
    {
      title: 'Producto',
      url: '/producto',
      icon: 'bag'
    },
    {
      title: 'Mi Perfil',
      url: '/perfil',
      icon: 'accessibility'
    },
  
=======
      title: 'Producto',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'paper-plane'
    },
    {
      title: 'Favoritos',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Perfil',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Categorias',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Cotisaciones',
      url: '/folder/Spam',
      icon: 'warning'
    }
>>>>>>> 2b1573f9bd52f045721d4f2523729a07b5882c3a
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
