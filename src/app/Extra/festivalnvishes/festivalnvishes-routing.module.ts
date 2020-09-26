import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FestivalnvishesPage } from './festivalnvishes.page';

const routes: Routes = [
  {
    path: '',
    component: FestivalnvishesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FestivalnvishesPageRoutingModule {}
