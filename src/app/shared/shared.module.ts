import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directivas/mascara.directive';



@NgModule({
  declarations: [
    MascaraDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective
  ]
})
export class SharedModule { }
