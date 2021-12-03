import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TranslateModule} from "@ngx-translate/core";
import {HttpClientModule} from "@angular/common/http";
import {ConfigService} from "./services/config.service";

export const APP_CONFIG = new InjectionToken('APP_CONFIG')
export const appName = {name: 'mfAlone'};

export function configBuilder(conf: any) {
  return new ConfigService(conf)
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en'
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
