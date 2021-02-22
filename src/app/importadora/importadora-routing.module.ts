import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImportadoraPage } from './importadora.page';

const routes: Routes = [
  {
    path: '',
    component: ImportadoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImportadoraPageRoutingModule {}
