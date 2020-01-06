import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourtsRoutingModule } from './courts-routing.module';

import { FormsModule } from '@angular/forms';
import { CreateCourtsComponent } from '../courts/pages/create-courts/create-courts.component';
import { ListCourtsComponent } from '../courts/pages/list-courts/list-courts.component';




@NgModule({
  declarations: [CreateCourtsComponent, ListCourtsComponent],
  imports: [
    CommonModule,
    CourtsRoutingModule,
    FormsModule
  ]
})
export class CourtsModule { }
