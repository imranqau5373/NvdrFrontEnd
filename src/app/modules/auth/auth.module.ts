import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { SharedModule } from '@shared/shared.module';
import { ResetpasswordComponent } from './page/resetpassword/resetpassword.component';
import { TranslateModule } from '@ngx-translate/core';
import { MustMatchDirective } from '@shared/_helper/must-match.directive';
import { UpdatedpasswordComponent } from './page/updatedpassword/updatedpassword.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetpasswordComponent,MustMatchDirective, UpdatedpasswordComponent],
  imports: [
    SharedModule,
    CommonModule,
    AuthRoutingModule,
    TranslateModule
  ]
})
export class AuthModule { }
