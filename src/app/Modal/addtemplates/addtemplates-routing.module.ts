import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtemplatesPage } from './addtemplates.page';

const routes: Routes = [
  {
    path: '',
    component: AddtemplatesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtemplatesPageRoutingModule {}
