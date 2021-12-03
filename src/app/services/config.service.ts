import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from "../app.module";

@Injectable()
export class ConfigService {
  id;
  constructor(@Inject(APP_CONFIG) private appConfig: any) {
    this.id = Math.random();
  }

  getAppName(): { name: string } {
    return this.appConfig
  }
}
