import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthGuard } from '@core/guard/auth-guard';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { CandidateLayoutComponent } from './layout/candidate-layout/candidate-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin',
    pathMatch: 'full',
  },
  //all the modules we are using after login
  {
    path: 'admin',
    component: ContentLayoutComponent,
    //all the modules under the route admin e.g admin/add-job
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@modules/admin/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'nvdr',
        loadChildren: () =>
          import('@modules/admin/nvdr/nvdr.module').then(m => m.NvdrModule)
      },
      {
        path: 'emails',
        loadChildren: () =>
          import('@modules/admin/email/email.module').then(m => m.EmailModule)
      },
      {
        path: 'faultemails',
        loadChildren: () =>
          import('@modules/admin/fault/fault.module').then(m => m.FaultModule)
      }
    ]
  },


 

  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    , {
      relativeLinkResolution: 'corrected'
    }
    //  , { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
