import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from '../home/pages/admin-home/admin-home.component';
import { CreateCourtbookingComponent } from './pages/create-courtbooking/create-courtbooking.component';
import { ListCourtbookingComponent } from './pages/list-courtbooking/list-courtbooking.component';


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
