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
    path: 'courts-create/:id',
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
