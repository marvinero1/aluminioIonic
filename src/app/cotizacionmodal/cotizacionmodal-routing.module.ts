import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotizacionmodalPage } from './cotizacionmodal.page';

const routes: Routes = [
  {
    path: '',
    component: CotizacionmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotizacionmodalPageRoutingModule {}
