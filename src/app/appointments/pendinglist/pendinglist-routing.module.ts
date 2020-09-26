import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendinglistPage } from './pendinglist.page';

const routes: Routes = [
  {
    path: '',
    component: PendinglistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendinglistPageRoutingModule {}
