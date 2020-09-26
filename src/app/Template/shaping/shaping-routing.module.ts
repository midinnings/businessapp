import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShapingPage } from './shaping.page';

const routes: Routes = [
  {
    path: '',
    component: ShapingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShapingPageRoutingModule {}
