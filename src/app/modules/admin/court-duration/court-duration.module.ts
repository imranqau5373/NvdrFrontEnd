import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourtDurationRoutingModule } from './court-duration-routing.module';

import { FormsModule } from '@angular/forms';
import { ListCourtdurationComponent } from './pages/list-courtduration/list-courtduration.component';
import { CreateCourtdurationComponent } from './pages/create-courtduration/create-courtduration.component';




@NgModule({
  declarations: [ListCourtdurationComponent, CreateCourtdurationComponent],
  imports: [
    CommonModule,
    CourtDurationRoutingModule,
    FormsModule
  ]
})
export class CourtDurationModule { }
