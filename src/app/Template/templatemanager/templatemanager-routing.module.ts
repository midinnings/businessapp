import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplatemanagerPage } from './templatemanager.page';

const routes: Routes = [
  {
    path: '',
    component: TemplatemanagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatemanagerPageRoutingModule {}
