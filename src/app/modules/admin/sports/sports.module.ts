import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsRoutingModule } from './sports-routing.module';
import { AdminHomeComponent } from '../home/pages/admin-home/admin-home.component';
import { SportsListComponent } from './pages/sports-list/sports-list.component';
import { SportsCreateComponent } from './pages/sports-create/sports-create.component';
import { SportsUpdateComponent } from './pages/sports-update/sports-update.component';




@NgModule({
  declarations: [SportsListComponent, SportsCreateComponent, SportsUpdateComponent],
  imports: [
    CommonModule,
    SportsRoutingModule
  ]
})
export class SportsModule { }
