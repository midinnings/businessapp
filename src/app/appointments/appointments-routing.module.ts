import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentsPage } from './appointments.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsPage
  },
  {
    path: 'pendinglist',
    loadChildren: () => import('../appointments/pendinglist/pendinglist.module').then( m => m.PendinglistPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'appointmentstatus',
    loadChildren: () => import('./appointmentstatus/appointmentstatus.module').then( m => m.AppointmentstatusPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsPageRoutingModule {}
