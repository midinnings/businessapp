import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersPage } from './offers.page';

const routes: Routes = [
  {
    path: '',
    component: OffersPage
  },
  {
    path: 'offerndeal',
    loadChildren: () => import('../../Extra/offers/offerndeal/offerndeal.module').then( m => m.OfferndealPageModule)
  },
  {
    path: 'offerreview',
    loadChildren: () => import('../../Extra/offers/offerreview/offerreview.module').then( m => m.OfferreviewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersPageRoutingModule {}
