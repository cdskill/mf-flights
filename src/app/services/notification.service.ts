import {Injectable, Optional, SkipSelf} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(@Optional() @SkipSelf() notificationService: NotificationService) {
    if (notificationService)
      throw Error('NotificationService already provided in the app. Avoid providing it somewhere else.')
  }

  logWarn(msg: string) {
    console.warn(msg)
  }

  logError(msg: string) {
    console.error(msg)
  }

  logSimple(msg: string) {
    console.log(msg)
  }
}
