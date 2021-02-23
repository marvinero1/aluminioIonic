import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFallimgModule } from 'ng-fallimg';
import { IonicModule } from '@ionic/angular';

import { ImportadorasPageRoutingModule } from './importadoras-routing.module';
import { PipesModule } from '../pipes/pipes.module';
import { ImportadorasPage } from './importadoras.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    NgFallimgModule,
    ImportadorasPageRoutingModule
  ],
  declarations: [ImportadorasPage]
})
export class ImportadorasPageModule {}
