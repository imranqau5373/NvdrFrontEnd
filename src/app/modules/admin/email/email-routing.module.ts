import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailListComponent } from './email-list/email-list.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'email-list',
        pathMatch: 'full'
      },
      {
        path: 'email-list',
        component: EmailListComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
