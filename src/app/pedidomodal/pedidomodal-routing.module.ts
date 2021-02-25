import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidomodalPage } from './pedidomodal.page';

const routes: Routes = [
  {
    path: '',
    component: PedidomodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidomodalPageRoutingModule {}
