import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobskeerinfoPage } from './jobskeerinfo.page';

const routes: Routes = [
  {
    path: '',
    component: JobskeerinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobskeerinfoPageRoutingModule {}
