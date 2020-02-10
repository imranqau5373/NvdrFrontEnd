import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingPageComponent } from './page/booking-page/booking-page.component';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { jqxBarGaugeModule }  from 'jqwidgets-ng/jqxbargauge';

//import { jqxSchedulerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler.ts';

@NgModule({
  declarations: [BookingPageComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    jqxSchedulerModule,
    jqxBarGaugeModule ,
    FormsModule
  ]
})
export class BookingModule { }
