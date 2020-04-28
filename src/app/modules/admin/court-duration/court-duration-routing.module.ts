import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from '../home/pages/admin-home/admin-home.component';
import {ListCourtdurationComponent} from '../court-duration/pages/list-courtduration/list-courtduration.component';
import {CreateCourtdurationComponent} from '../court-duration/pages/create-courtduration/create-courtduration.component';
import { ViewCourtdurationComponent } from './pages/view-courtduration/view-courtduration.component';
import { CourtDurationBaseComponent } from './component/court-duration-base/court-duration-base.component';

export const routes: Routes = [
{
  path: '',
  component : CourtDurationBaseComponent,
  children: [
  {
    path: '',
    redirectTo: 'duration-list',
    pathMatch: 'full'
  },
  {
    path: 'duration-create',
    component: CreateCourtdurationComponent
  },
  {
    path: 'duration-list',
    component: ListCourtdurationComponent
  },
  {
    path: 'duration-create/:id',
    component: CreateCourtdurationComponent
  },
  {
    path: 'duration-view/:durationId',
    component: ViewCourtdurationComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourtDurationRoutingModule { }
