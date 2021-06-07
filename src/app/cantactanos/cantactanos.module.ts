import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CantactanosPageRoutingModule } from './cantactanos-routing.module';

import { CantactanosPage } from './cantactanos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CantactanosPageRoutingModule
  ],
  declarations: [CantactanosPage]
})
export class CantactanosPageModule {}
