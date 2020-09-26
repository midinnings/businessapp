import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindcandidatePage } from './findcandidate.page';

const routes: Routes = [
  {
    path: '',
    component: FindcandidatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindcandidatePageRoutingModule {}
