import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalfavoritosPageRoutingModule } from './modalfavoritos-routing.module';

import { ModalfavoritosPage } from './modalfavoritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModalfavoritosPageRoutingModule
  ],
  declarations: [ModalfavoritosPage]
})
export class ModalfavoritosPageModule {}
