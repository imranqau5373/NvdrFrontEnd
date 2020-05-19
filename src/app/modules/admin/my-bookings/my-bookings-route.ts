import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBookingBaseComponent } from './component/my-booking-base/my-booking-base.component';
import { MyBookingsListComponent } from './pages/my-bookings-list/my-bookings-list.component';


export const routes: Routes = [
  {
    path: '',
    component : MyBookingBaseComponent,
    children: [
        {
            path: '',
            redirectTo: 'bookings-list',
            pathMatch: 'full'
          },
          {
            path: 'bookings-list',
            component: MyBookingsListComponent
          },
    ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyBookingsRoutingModule { }
