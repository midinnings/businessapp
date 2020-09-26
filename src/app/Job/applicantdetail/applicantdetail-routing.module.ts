import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplicantdetailPage } from './applicantdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ApplicantdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicantdetailPageRoutingModule {}
