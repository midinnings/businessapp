import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentModule } from 'src/app/Components/component/component.module';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { JoblistingPage } from './joblisting.page';

const routes: Routes = [
  {
    path: '',
    component: JoblistingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentModule,
    PipeModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [JoblistingPage]
})
export class JoblistingPageModule {}
