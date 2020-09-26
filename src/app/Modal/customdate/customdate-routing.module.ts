import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomdatePage } from './customdate.page';

const routes: Routes = [
  {
    path: '',
    component: CustomdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomdatePageRoutingModule {}
