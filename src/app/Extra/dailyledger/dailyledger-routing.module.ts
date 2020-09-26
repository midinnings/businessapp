import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyledgerPage } from './dailyledger.page';

const routes: Routes = [
  {
    path: '',
    component: DailyledgerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyledgerPageRoutingModule {}
