import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';
import { PipesModule } from '../pipes/pipes.module';
import { ProductosPage } from './productos.page';

@NgModule({
  imports: [    
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    ProductosPageRoutingModule,
  ],
  declarations: [ProductosPage]
})
export class ProductosPageModule {}
