import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsRoutingModule } from './sports-routing.module';


import { SportsListComponent } from './pages/sports-list/sports-list.component';
import { SportsCreateComponent } from './pages/sports-create/sports-create.component';
import { SportsUpdateComponent } from './pages/sports-update/sports-update.component';
import { FormsModule } from '@angular/forms';
import { SportsBaseComponent } from './component/sports-base/sports-base.component';
import { SharedModule } from '@shared/shared.module';




@NgModule({
  declarations: [SportsListComponent, SportsCreateComponent, SportsUpdateComponent, SportsBaseComponent],
  imports: [
    SharedModule,
    CommonModule,
    SportsRoutingModule,
    FormsModule
  ]
})
export class SportsModule { }
