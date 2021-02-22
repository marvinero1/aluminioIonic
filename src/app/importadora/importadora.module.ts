import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportadoraPageRoutingModule } from './importadora-routing.module';

import { ImportadoraPage } from './importadora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportadoraPageRoutingModule
  ],
  declarations: [ImportadoraPage]
})
export class ImportadoraPageModule {}
