import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeelistPage } from './employeelist.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeelistPageRoutingModule {}
