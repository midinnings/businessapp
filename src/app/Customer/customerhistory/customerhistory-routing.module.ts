import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerhistoryPage } from './customerhistory.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerhistoryPageRoutingModule {}
