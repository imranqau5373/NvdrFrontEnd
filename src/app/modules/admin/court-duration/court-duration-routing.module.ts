import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from '../home/pages/admin-home/admin-home.component';
import {ListCourtdurationComponent} from '../court-duration/pages/list-courtduration/list-courtduration.component';
import {CreateCourtdurationComponent} from '../court-duration/pages/create-courtduration/create-courtduration.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'courtduration-list',
    pathMatch: 'full'
  },
  {
    path: 'courtduration-create',
    component: CreateCourtdurationComponent
  },
  {
    path: 'courtduration-list',
    component: ListCourtdurationComponent
  },
  {
    path: 'courtduration-create/:id',
    component: CreateCourtdurationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourtDurationRoutingModule { }
