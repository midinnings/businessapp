import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShapingWishesPage } from './shaping-wishes.page';

const routes: Routes = [
  {
    path: '',
    component: ShapingWishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShapingWishesPageRoutingModule {}
