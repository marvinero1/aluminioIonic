import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidomodalPageRoutingModule } from './pedidomodal-routing.module';

import { PedidomodalPage } from './pedidomodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PedidomodalPageRoutingModule
  ],
  declarations: [PedidomodalPage]
})
export class PedidomodalPageModule {}
