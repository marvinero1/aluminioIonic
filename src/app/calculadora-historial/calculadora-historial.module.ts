import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraHistorialPageRoutingModule } from './calculadora-historial-routing.module';

import { CalculadoraHistorialPage } from './calculadora-historial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadoraHistorialPageRoutingModule
  ],
  declarations: [CalculadoraHistorialPage]
})
export class CalculadoraHistorialPageModule {}
