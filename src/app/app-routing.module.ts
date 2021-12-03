import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'flights'},
  {
    path: 'flights',
    loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule)
  },
  {
    path: 'tesseract',
    loadChildren: () => import('./tesseract/tesseract.module').then(m => m.TesseractModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppRoutingModule {
}
