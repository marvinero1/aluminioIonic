import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisCotizacionesPageRoutingModule } from './mis-cotizaciones-routing.module';

import { MisCotizacionesPage } from './mis-cotizaciones.page';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisCotizacionesPageRoutingModule
  ],
  declarations: [MisCotizacionesPage]
})
export class MisCotizacionesPageModule {}
