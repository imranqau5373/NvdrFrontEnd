import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ResetpasswordComponent } from './page/resetpassword/resetpassword.component';
import { UpdatedpasswordComponent } from './page/updatedpassword/updatedpassword.component';

import { UnAuthGuard } from '@core/guard/unauth-guard';
import { EmailVerificationComponent } from './page/email-verification/email-verification.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate : [UnAuthGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate : [UnAuthGuard]
      },
      {
        path: 'resetpassword',
        component: ResetpasswordComponent,
        canActivate : [UnAuthGuard]
      },
      {
        path: 'updatepassword',
        component: UpdatedpasswordComponent,
        canActivate : [UnAuthGuard]
      },
      {
        path: 'email-verification',
        component: EmailVerificationComponent,
        canActivate: [UnAuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
