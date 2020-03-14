import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourtsRoutingModule } from './courts-routing.module';

import { FormsModule } from '@angular/forms';
import { CreateCourtsComponent } from '../courts/pages/create-courts/create-courts.component';
import { ListCourtsComponent } from '../courts/pages/list-courts/list-courts.component';
import { SharedModule } from '@shared/shared.module';
import { CourtsBaseComponent } from './component/courts-base/courts-base.component';


@NgModule({
  declarations: [CreateCourtsComponent, ListCourtsComponent,CourtsBaseComponent],
  imports: [
    SharedModule,
    CommonModule,
    CourtsRoutingModule,
    FormsModule
  ]
})
export class CourtsModule { }
