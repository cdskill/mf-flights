import {Component, Injector, OnInit} from '@angular/core';
import {CounterService} from "counter-lib";
import {UserService} from "../services/user.service";
import {ConfigService} from "../services/config.service";
import {concatMap, delay, map, startWith, switchMap, takeUntil} from "rxjs/operators";
import {Observable, Observer, of, Subject, Subscription} from "rxjs";
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {createTranslateLoader} from "./flights.module";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
})
export class FlightsComponent implements OnInit {
  destroyed$ = new Subject();
  searchKeyword: any | undefined;
  subscriptions: Subscription[] = []

  constructor(
    public counterService: CounterService,
    public uS: UserService,
    public confS: ConfigService,
    private translateService: TranslateService,
    private inject: Injector,
  ) {
  }

  ngOnInit(): void {
    console.log('appName::', this.confS.getAppName());
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

    /*
    * RXJS PLAYGROUND
    * */
    const cars$: Observable<{ brand: string; kw: number; color: string }[]> = of([
      {brand: 'Mercedes', kw: 12, color: 'red'},
      {brand: 'Volkswagen', kw: 12, color: 'yellow'},
      {brand: 'Audi', kw: 12, color: 'blue'},
      {brand: 'Peugeot', kw: 12, color: 'purple'},
    ])

    const carDetails$: Observable<{ brand?: string; kw?: number; color?: string }> = of({
      kw: 167,
      brand: 'Lamborghini',
      color: 'green'
    })

    const drivers$ = new Observable((observer: Observer<{ name: string; age: number }>) => {
      observer.next({name: 'Ahmed', age: 30});
      observer.next({name: 'Burak', age: 29});
      observer.next({name: 'Nicolas', age: 25});
      observer.next({name: 'Jordan', age: 24});
      observer.complete();
    });

    this.subscriptions.push(cars$.pipe(map(carsResponse => carsResponse.map(car => car.brand))).subscribe(console.log))
    this.subscriptions.push(carDetails$.pipe(map(cardDetailResponse => cardDetailResponse.brand)).subscribe(console.log))
    drivers$.pipe(
      concatMap(item => of(item).pipe(delay(1000))),
    )
      .subscribe(console.log)
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
