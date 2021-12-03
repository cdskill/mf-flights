import {Component, Injector, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {startWith, switchMap, takeUntil} from "rxjs/operators";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {createTranslateLoader} from "../flights/flights.module";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Component({
  selector: 'app-reservations',
  template: `
    <p>
      reservations works!
    </p>
    <p>
      user: <code>{{userService.getCurrentUser() | json}}</code><br>
      ID USERS_SERVICE: <code>{{userService.id}}</code>
    </p>
    <p>
      TRANSLATIONS:
      {{'reservationsList' | translate}}
    </p>
  `,
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
  destroyed$ = new Subject();

  constructor(public userService: UserService,
              private translateService: TranslateService, private inject: Injector) { }

  ngOnInit(): void {
    this.translateService.onLangChange
      .pipe(
        takeUntil(this.destroyed$),
        startWith(({
          lang: this.translateService.currentLang ?? 'en',
          translations: this.translateService.getTranslation(this.translateService.currentLang)
        })),
        switchMap((lang: LangChangeEvent) => createTranslateLoader(this.inject.get(HttpClient)).getTranslation(lang.lang))
      )
      .subscribe(v => {
        console.log('flightsLang::', v)
        this.translateService.setTranslation(this.translateService.currentLang, v)
      })
  }

}
