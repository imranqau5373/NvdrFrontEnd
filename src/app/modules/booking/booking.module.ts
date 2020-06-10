import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingPageComponent } from './page/booking-page/booking-page.component';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { jqxBarGaugeModule }  from 'jqwidgets-ng/jqxbargauge';
import { BookingListComponent } from './page/booking-list/booking-list.component';
import { SharedModule } from '@shared/shared.module';
import { BookingDialogComponent } from './components/booking-dialog/booking-dialog.component';
import { LoginBookingDialogComponent } from './components/login-booking-dialog/login-booking-dialog.component';
import { SignupBookingDialogComponent } from './components/signup-booking-dialog/signup-booking-dialog.component';
import { ConfirmationBookingDialogComponent } from './components/confirmation-booking-dialog/confirmation-booking-dialog.component';
import { RegistrationBookingDialogComponent } from './components/registration-booking-dialog/registration-booking-dialog.component';

//import { jqxSchedulerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler.ts';

@NgModule({
  declarations: [BookingPageComponent, BookingListComponent, BookingDialogComponent, LoginBookingDialogComponent, SignupBookingDialogComponent, ConfirmationBookingDialogComponent, RegistrationBookingDialogComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    jqxSchedulerModule,
    jqxBarGaugeModule ,
    FormsModule,
    SharedModule
  ],
  entryComponents:[BookingDialogComponent, LoginBookingDialogComponent, SignupBookingDialogComponent, ConfirmationBookingDialogComponent,RegistrationBookingDialogComponent]
  
})
export class BookingModule { }
