import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from '../home/pages/admin-home/admin-home.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { CreateUsersComponent } from './pages/create-users/create-users.component';


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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
