import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastemployeePageRoutingModule } from './pastemployee-routing.module';

import { PastemployeePage } from './pastemployee.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastemployeePageRoutingModule,
    PipeModule
  ],
  declarations: [PastemployeePage]
})
export class PastemployeePageModule {}
