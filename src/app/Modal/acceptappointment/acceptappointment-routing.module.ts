import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptappointmentPage } from './acceptappointment.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptappointmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptappointmentPageRoutingModule {}
