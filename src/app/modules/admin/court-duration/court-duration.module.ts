import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourtDurationRoutingModule } from './court-duration-routing.module';

import { FormsModule } from '@angular/forms';
import { ListCourtdurationComponent } from './pages/list-courtduration/list-courtduration.component';
import { CreateCourtdurationComponent } from './pages/create-courtduration/create-courtduration.component';
import { ViewCourtdurationComponent } from './pages/view-courtduration/view-courtduration.component';
import { CourtDurationBaseComponent } from './component/court-duration-base/court-duration-base.component';
import { SharedModule } from '@shared/shared.module';
import { SlotCancelComponent } from './component/slot-cancel/slot-cancel.component';
import { SlotBookingComponent } from './component/slot-booking/slot-booking.component';
import { SlotDetailComponent } from './component/slot-detail/slot-detail.component';



@NgModule({
  declarations: [ListCourtdurationComponent, CreateCourtdurationComponent,SlotCancelComponent,SlotDetailComponent,SlotBookingComponent,
     ViewCourtdurationComponent,CourtDurationBaseComponent, SlotCancelComponent, SlotBookingComponent, SlotDetailComponent],
  imports: [
    CommonModule,
      SharedModule,
    CourtDurationRoutingModule,
    FormsModule
  ],
  entryComponents:[SlotCancelComponent,SlotDetailComponent,SlotBookingComponent]
})
export class CourtDurationModule { }
