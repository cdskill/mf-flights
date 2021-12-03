import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightKeywordDirective } from './directives/highlight-keyword.directive';
import {FormsModule} from "@angular/forms";


const DIRECTIVES = [HighlightKeywordDirective]

@NgModule({
  declarations: [
    DIRECTIVES
  ],
  exports: [
    DIRECTIVES,
    FormsModule
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
