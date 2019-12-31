import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourtsRoutingModule } from './courts-routing.module';
import { AdminHomeComponent } from '../home/pages/admin-home/admin-home.component';
import { FormsModule } from '@angular/forms';
import { CreateCourtsComponent } from './pages/create-courts/create-courts.component';
import { ListCourtsComponent } from './pages/list-courts/list-courts.component';




@NgModule({
  declarations: [CreateCourtsComponent, ListCourtsComponent],
  imports: [
    CommonModule,
    CourtsRoutingModule,
    FormsModule
  ]
})
export class CourtsModule { }
