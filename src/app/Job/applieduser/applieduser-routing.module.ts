import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApplieduserPage } from './applieduser.page';

const routes: Routes = [
  {
    path: '',
    component: ApplieduserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplieduserPageRoutingModule {}
