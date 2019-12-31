import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from '../home/pages/admin-home/admin-home.component';
import { ListCompanyComponent } from './pages/list-company/list-company.component';
import { CreateCompanyComponent } from './pages/create-company/create-company.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'company-list',
    pathMatch: 'full'
  },
  {
    path: 'company-list',
    component: ListCompanyComponent
  },
  {
    path: 'company-create',
    component: CreateCompanyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
