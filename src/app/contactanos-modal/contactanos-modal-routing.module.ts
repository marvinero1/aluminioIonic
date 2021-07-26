import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactanosModalPage } from './contactanos-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ContactanosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactanosModalPageRoutingModule {}
