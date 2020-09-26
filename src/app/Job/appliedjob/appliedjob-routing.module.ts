import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppliedjobPage } from './appliedjob.page';

const routes: Routes = [
  {
    path: '',
    component: AppliedjobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppliedjobPageRoutingModule {}
