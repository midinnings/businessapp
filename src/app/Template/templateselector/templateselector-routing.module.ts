import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateselectorPage } from './templateselector.page';

const routes: Routes = [
  {
    path: '',
    component: TemplateselectorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateselectorPageRoutingModule {}
