import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingPageComponent } from './page/booking-page/booking-page.component';





@NgModule({
  declarations: [BookingPageComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule
  ]
})
export class BookingModule { }
