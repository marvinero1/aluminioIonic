import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactanosModalPageRoutingModule } from './contactanos-modal-routing.module';

import { ContactanosModalPage } from './contactanos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactanosModalPageRoutingModule
  ],
  declarations: [ContactanosModalPage]
})
export class ContactanosModalPageModule {}
