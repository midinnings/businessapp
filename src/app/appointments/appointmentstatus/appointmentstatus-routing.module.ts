import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentstatusPage } from './appointmentstatus.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentstatusPageRoutingModule {}
