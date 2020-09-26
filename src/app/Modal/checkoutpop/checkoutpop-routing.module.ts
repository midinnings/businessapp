import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutpopPage } from './checkoutpop.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutpopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutpopPageRoutingModule {}
