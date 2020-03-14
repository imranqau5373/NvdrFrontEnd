import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { CreateUsersComponent } from '../users/pages/create-users/create-users.component';
import { ListUsersComponent } from '../users/pages/list-users/list-users.component';
import { SharedModule } from '@shared/shared.module';




@NgModule({
  declarations: [ListUsersComponent, CreateUsersComponent],
  imports: [
    UsersRoutingModule,
    FormsModule,
    SharedModule,
    CommonModule
  ]
})
export class UsersModule { }
