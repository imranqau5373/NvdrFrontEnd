import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCourtbookingComponent } from '../court-booking/pages/create-courtbooking/create-courtbooking.component';
import { ListCourtbookingComponent } from '../court-booking/pages/list-courtbooking/list-courtbooking.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'courtbooking-list',
    pathMatch: 'full'
  },
  {
    path: 'courtbooking-list',
    component: ListCourtbookingComponent
  },
  {
    path: 'courtbooking-create',
    component: CreateCourtbookingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourtBookingRoutingModule { }
