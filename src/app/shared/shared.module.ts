import { NgModule, ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlMessageComponent } from './user_control/components/control-message/control-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DefaultDateFormatPipe } from './pipes/date-format.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterBadgeComponent } from './filters/filter-badge.component';
import { TimeColumnFilterComponent } from './filters/time-column-filter.component';
import { OptionsColumnFilterComponent } from './filters/options-column-filter.component';
import { TextColumnFilterComponent } from './filters/text-column-filter.component';
import { DateColumnFilterComponent } from './filters/date-column-filter.component';
@NgModule({
  declarations: [ControlMessageComponent,DefaultDateFormatPipe,FilterBadgeComponent,
    DateColumnFilterComponent,
    OptionsColumnFilterComponent,
    TextColumnFilterComponent,
    TimeColumnFilterComponent,],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,

    
  ],
  exports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ControlMessageComponent,
    DefaultDateFormatPipe,
        FilterBadgeComponent,
    DateColumnFilterComponent,
    OptionsColumnFilterComponent,
    TextColumnFilterComponent,
    TimeColumnFilterComponent,
    
  ],
  entryComponents: [],
  
})
export class SharedModule { }
