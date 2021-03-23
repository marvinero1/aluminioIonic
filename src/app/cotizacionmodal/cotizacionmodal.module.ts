import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CotizacionmodalPageRoutingModule } from './cotizacionmodal-routing.module';

import { CotizacionmodalPage } from './cotizacionmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizacionmodalPageRoutingModule
  ],
  declarations: [CotizacionmodalPage]
})
export class CotizacionmodalPageModule {}
