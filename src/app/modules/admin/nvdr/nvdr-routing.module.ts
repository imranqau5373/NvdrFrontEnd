import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NvdrAddComponent } from './nvdr-add/nvdr-add.component';
import { NvdrListComponent } from './nvdr-list/nvdr-list.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'nvdr-list',
        pathMatch: 'full'
      },
      {
        path: 'nvdr-list',
        component: NvdrListComponent
      },
      {
        path: 'nvdr-create',
        component: NvdrAddComponent
      },
      {
        path: 'nvdr-edit/:id',
        component: NvdrAddComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NvdrRoutingModule { }
