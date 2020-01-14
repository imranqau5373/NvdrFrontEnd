import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCourtsComponent } from './pages/list-courts/list-courts.component';
import { CreateCourtsComponent } from './pages/create-courts/create-courts.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'courts-list',
    pathMatch: 'full'
  },
  {
    path: 'courts-list',
    component: ListCourtsComponent
  },
  {
    path: 'courts-create',
    component: CreateCourtsComponent
  },
  {
    path: 'courts-update/:id',
    component: CreateCourtsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourtsRoutingModule { }
