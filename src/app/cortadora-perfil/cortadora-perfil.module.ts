import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CortadoraPerfilPageRoutingModule } from './cortadora-perfil-routing.module';

import { CortadoraPerfilPage } from './cortadora-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CortadoraPerfilPageRoutingModule
  ],
  declarations: [CortadoraPerfilPage]
})
export class CortadoraPerfilPageModule {}
