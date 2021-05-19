import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraHistorialPage } from './calculadora-historial.page';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculadoraHistorialPageRoutingModule {}
