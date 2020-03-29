import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCourtsComponent } from './pages/list-courts/list-courts.component';
import { CreateCourtsComponent } from './pages/create-courts/create-courts.component';
import { CourtsBaseComponent } from './component/courts-base/courts-base.component';

export const routes: Routes = [

{
  path: '',
  component : CourtsBaseComponent,
  children: [
  {
    path: '',
    redirectTo: 'facilities-list',
    pathMatch: 'full'
  },
  {
    path: 'facilities-list',
    component: ListCourtsComponent
  },
  {
    path: 'facilities-create',
    component: CreateCourtsComponent
  },
  {
    path: 'facilities-create/:id',
    component: CreateCourtsComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourtsRoutingModule { }
