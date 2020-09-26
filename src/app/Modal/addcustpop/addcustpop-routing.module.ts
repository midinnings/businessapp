import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcustpopPage } from './addcustpop.page';

const routes: Routes = [
  {
    path: '',
    component: AddcustpopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcustpopPageRoutingModule {}
