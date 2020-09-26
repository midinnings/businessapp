import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccesscheckoutPage } from './successcheckout.page';

const routes: Routes = [
  {
    path: '',
    component: SuccesscheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccesscheckoutPageRoutingModule {}
