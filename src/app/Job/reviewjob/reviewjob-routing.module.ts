import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewjobPage } from './reviewjob.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewjobPageRoutingModule {}
