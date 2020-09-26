import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyledgerPageRoutingModule } from './dailyledger-routing.module';

import { DailyledgerPage } from './dailyledger.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeModule,
    DailyledgerPageRoutingModule
  ],
  declarations: [DailyledgerPage]
})
export class DailyledgerPageModule { }
