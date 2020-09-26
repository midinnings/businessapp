import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeermanagmentPage } from './employeermanagment.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeermanagmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeermanagmentPageRoutingModule {}
