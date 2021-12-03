import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {APP_CONFIG, appName, configBuilder} from "../app.module";
import {ConfigService} from "./config.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [
        {provide: APP_CONFIG, useValue: appName},
        {provide: ConfigService, useFactory: configBuilder, deps: [APP_CONFIG]}
      ]
    }
  }
}
