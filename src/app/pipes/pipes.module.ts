import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [FiltroPipe],
  //exports:[],
  exports:[FiltroPipe],
  imports: []
})
export class PipesModule{}
