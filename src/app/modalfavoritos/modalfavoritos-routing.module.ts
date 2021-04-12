import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalfavoritosPage } from './modalfavoritos.page';

const routes: Routes = [
  {
    path: '',
    component: ModalfavoritosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalfavoritosPageRoutingModule {}
