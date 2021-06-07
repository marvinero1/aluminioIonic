import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CantactanosPage } from './cantactanos.page';

const routes: Routes = [
  {
    path: '',
    component: CantactanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantactanosPageRoutingModule {}
