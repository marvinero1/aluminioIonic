import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CortadoraPModalPageRoutingModule } from './cortadora-pmodal-routing.module';

import { CortadoraPModalPage } from './cortadora-pmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CortadoraPModalPageRoutingModule
  ],
  declarations: [CortadoraPModalPage]
})
export class CortadoraPModalPageModule {}
