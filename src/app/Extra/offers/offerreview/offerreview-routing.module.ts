import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferreviewPage } from './offerreview.page';

const routes: Routes = [
  {
    path: '',
    component: OfferreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferreviewPageRoutingModule {}
