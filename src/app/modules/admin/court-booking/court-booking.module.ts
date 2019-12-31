import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourtBookingRoutingModule } from './court-booking-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateCourtbookingComponent } from './pages/create-courtbooking/create-courtbooking.component';
import { ListCourtbookingComponent } from './pages/list-courtbooking/list-courtbooking.component';




@NgModule({
  declarations: [CreateCourtbookingComponent, ListCourtbookingComponent],
  imports: [
    CommonModule,
    CourtBookingRoutingModule,
    FormsModule
  ]
})
export class CourtBookingModule { }
