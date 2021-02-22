import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportadorasPageRoutingModule } from './importadoras-routing.module';

import { ImportadorasPage } from './importadoras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImportadorasPageRoutingModule
  ],
  declarations: [ImportadorasPage]
})
export class ImportadorasPageModule {}
