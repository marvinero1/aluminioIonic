import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFallimgModule } from 'ng-fallimg';

import { CommonModule } from "@angular/common";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { HttpClientModule } from '@angular/common/http';
import { NotificacionsService } from './providers/notificacions.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { AuthProvider } from './providers/auth/auth';
import { RestangularConfigFactory } from './providers/restangular/restangular';
import { TokenStorageProvider } from './providers/token-storage/token-storage';
import { PipesModule } from './pipes/pipes.module';
import { Downloader } from '@ionic-native/downloader/ngx';
import { DecimalPipe } from '@angular/common';
import { Storage } from '@ionic/storage'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RestangularModule.forRoot([AuthProvider], RestangularConfigFactory),
    HttpClientModule,
    PipesModule,
    NgFallimgModule.forRoot({
      default: 'assets/img/default-person.jpg',
      picture1:  'assets/img/default-product.jpg',
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthProvider,
    DecimalPipe,
    Storage,
    TokenStorageProvider,
    NotificacionsService,
    Camera,
    Downloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
