import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewratingPage } from './reviewrating.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewratingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewratingPageRoutingModule {}
