import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourtDurationRoutingModule } from './court-duration-routing.module';

import { FormsModule } from '@angular/forms';
import { ListCourtdurationComponent } from './pages/list-courtduration/list-courtduration.component';
import { CreateCourtdurationComponent } from './pages/create-courtduration/create-courtduration.component';
import { ViewCourtdurationComponent } from './pages/view-courtduration/view-courtduration.component';
import { CourtDurationBaseComponent } from './component/court-duration-base/court-duration-base.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [ListCourtdurationComponent, CreateCourtdurationComponent, ViewCourtdurationComponent,CourtDurationBaseComponent],
  imports: [
    CommonModule,
      SharedModule,
    CourtDurationRoutingModule,
    FormsModule
  ]
})
export class CourtDurationModule { }
