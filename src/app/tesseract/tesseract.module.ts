import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesseractRoutingModule } from './tesseract-routing.module';
import { TesseractComponent } from './tesseract.component';


@NgModule({
  declarations: [
    TesseractComponent
  ],
  imports: [
    CommonModule,
    TesseractRoutingModule
  ]
})
export class TesseractModule { }
