import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StylistnotifyPage } from './stylistnotify.page';

const routes: Routes = [
  {
    path: '',
    component: StylistnotifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StylistnotifyPageRoutingModule {}
