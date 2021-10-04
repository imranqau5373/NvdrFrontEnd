import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaultEmailListComponent } from './fault-email-list/fault-email-list.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'fault-email-list',
        pathMatch: 'full'
      },
      {
        path: 'fault-email-list',
        component: FaultEmailListComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaultRoutingModule { }
