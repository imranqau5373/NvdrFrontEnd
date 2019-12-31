import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from '../home/pages/admin-home/admin-home.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'courtduration-list',
    pathMatch: 'full'
  },
  {
    path: 'courtduration-list',
    component: AdminHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourtDurationRoutingModule { }
