import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUsersComponent } from '../users/pages/list-users/list-users.component';
import { CreateUsersComponent } from '../users/pages/create-users/create-users.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users-list',
    pathMatch: 'full'
  },
  {
    path: 'users-list',
    component: ListUsersComponent
  },
  {
    path: 'users-create',
    component: CreateUsersComponent
  },
  {
    path: 'users-create/:id',
    component: CreateUsersComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
