import { NgModule, ComponentRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlMessageComponent } from './user_control/components/control-message/control-message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ControlMessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ControlMessageComponent,
    
    
  ],
  entryComponents: [],
  
})
export class SharedModule { }
