import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisCortesPageRoutingModule } from './mis-cortes-routing.module';

import { MisCortesPage } from './mis-cortes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisCortesPageRoutingModule
  ],
  declarations: [MisCortesPage]
})
export class MisCortesPageModule {}