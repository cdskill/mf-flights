import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReservationsRoutingModule} from './reservations-routing.module';
import {ReservationsComponent} from './reservations.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      extend: true,
    }),
  ],
})
export class ReservationsModule { }
