import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThankyouusmsPage } from './thankyouusms.page';

const routes: Routes = [
  {
    path: '',
    component: ThankyouusmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThankyouusmsPageRoutingModule {}
