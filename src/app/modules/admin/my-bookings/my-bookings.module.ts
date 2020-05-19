import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { MyBookingsRoutingModule } from './my-bookings-route';
import { MyBookingBaseComponent } from './component/my-booking-base/my-booking-base.component';
import { MyBookingsListComponent } from './pages/my-bookings-list/my-bookings-list.component';
import { MyBookingsCancelComponent } from './pages/my-bookings-cancel/my-bookings-cancel.component';





@NgModule({
  declarations: [MyBookingBaseComponent, MyBookingsListComponent, MyBookingsCancelComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MyBookingsRoutingModule
  ]
})
export class MyBookingsModule { }
