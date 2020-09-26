import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomermanagerPage } from './customermanager.page';

const routes: Routes = [
  {
    path: '',
    component: CustomermanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomermanagerPageRoutingModule {}
