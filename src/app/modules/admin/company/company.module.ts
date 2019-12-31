import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { FormsModule } from '@angular/forms';
import { ListCompanyComponent } from './pages/list-company/list-company.component';
import { CreateCompanyComponent } from './pages/create-company/create-company.component';




@NgModule({
  declarations: [ListCompanyComponent, CreateCompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule
  ]
})
export class CompanyModule { }
