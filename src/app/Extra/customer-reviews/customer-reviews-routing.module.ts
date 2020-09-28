import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerReviewsPage } from './customer-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerReviewsPageRoutingModule {}
