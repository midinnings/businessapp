import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessmanagerPage } from './businessmanager.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessmanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessmanagerPageRoutingModule {}
