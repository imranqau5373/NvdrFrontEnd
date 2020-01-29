import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingPageComponent } from './page/booking-page/booking-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'booking-page',
    pathMatch: 'full'
  },
  {
    path: 'booking-page',
    component: BookingPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
