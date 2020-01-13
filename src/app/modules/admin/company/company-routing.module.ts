import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCompanyComponent } from '../company/pages/list-company/list-company.component';
import { CreateCompanyComponent } from '../company/pages/create-company/create-company.component';


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
