import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpcomingbrithdayPage } from './upcomingbrithday.page';

const routes: Routes = [
  {
    path: '',
    component: UpcomingbrithdayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpcomingbrithdayPageRoutingModule {}
