import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CortadoraPerfilPage } from './cortadora-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: CortadoraPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CortadoraPerfilPageRoutingModule {}
