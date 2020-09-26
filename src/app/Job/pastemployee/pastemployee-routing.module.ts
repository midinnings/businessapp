import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastemployeePage } from './pastemployee.page';

const routes: Routes = [
  {
    path: '',
    component: PastemployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastemployeePageRoutingModule {}
