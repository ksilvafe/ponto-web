import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directivas/mascara.directive';
import { TipoPipe } from './pipes/tipo.pipe';



@NgModule({
  declarations: [
    MascaraDirective,
    TipoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective,
    TipoPipe
  ]
})
export class SharedModule { }
