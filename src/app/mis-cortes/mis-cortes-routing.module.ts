import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisCortesPage } from './mis-cortes.page';

const routes: Routes = [
  {
    path: '',
    component: MisCortesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisCortesPageRoutingModule {}
