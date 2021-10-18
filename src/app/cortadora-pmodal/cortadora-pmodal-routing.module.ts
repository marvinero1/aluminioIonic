import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CortadoraPModalPage } from './cortadora-pmodal.page';

const routes: Routes = [
  {
    path: '',
    component: CortadoraPModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CortadoraPModalPageRoutingModule {}
