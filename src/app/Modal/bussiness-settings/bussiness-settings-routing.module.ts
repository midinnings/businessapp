import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BussinessSettingsPage } from './bussiness-settings.page';

const routes: Routes = [
  {
    path: '',
    component: BussinessSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BussinessSettingsPageRoutingModule {}
