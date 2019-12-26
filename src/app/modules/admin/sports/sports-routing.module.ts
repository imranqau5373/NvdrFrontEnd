import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from '../home/pages/admin-home/admin-home.component';
import { SportsListComponent } from './pages/sports-list/sports-list.component';
import { SportsCreateComponent } from './pages/sports-create/sports-create.component';
import { SportsUpdateComponent } from './pages/sports-update/sports-update.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sports-list',
    pathMatch: 'full'
  },
  {
    path: 'sports-list',
    component: SportsListComponent
  },
  {
    path: 'sports-create',
    component: SportsCreateComponent
  },
  {
    path: 'sports-update',
    component: SportsUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule { }
