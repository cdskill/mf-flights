import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlightsComponent} from './flights.component';
import {FlightsRoutingModule} from "./flights-routing.module";
import {TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {ServicesModule} from "../services/services.module";
import {MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";
import {SharedModule} from "../shared/shared.module";

export function createTranslateLoader(http: HttpClient) {
  console.log('createTranslateLoader::flights')
  return new MultiTranslateHttpLoader(http, [{prefix: 'http://localhost:8008/assets/i18n/', suffix: '.json'}]); // dev
  // return new MultiTranslateHttpLoader(http, [{prefix: 'http://localhost:8080/assets/i18n/', suffix: '.json'}]); // prod
}

@NgModule({
  declarations: [
    FlightsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlightsRoutingModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      extend: true,
    }),
    ServicesModule.forRoot()
  ]
})
export class FlightsModule {
}
