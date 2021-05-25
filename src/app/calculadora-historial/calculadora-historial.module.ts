import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraHistorialPageRoutingModule } from './calculadora-historial-routing.module';

import { CalculadoraHistorialPage } from './calculadora-historial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CalculadoraHistorialPageRoutingModule
  ],
  declarations: [CalculadoraHistorialPage]
})
export class CalculadoraHistorialPageModule {}
