import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportadorasPage } from './importadoras.page';

const routes: Routes = [
  {
    path: '',
    component: ImportadorasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportadorasPageRoutingModule {}
