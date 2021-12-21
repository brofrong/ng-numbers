import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RollingNumbersComponent } from './rolling-numbers.component';
import { DigitComponent } from './digit/digit.component';



@NgModule({
  declarations: [
    RollingNumbersComponent,
    DigitComponent
  ],
  exports: [
    RollingNumbersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RollingNumbersModule { }
