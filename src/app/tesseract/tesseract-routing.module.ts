import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TesseractComponent} from "./tesseract.component";

const routes: Routes = [
  {path: '', component: TesseractComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesseractRoutingModule { }
