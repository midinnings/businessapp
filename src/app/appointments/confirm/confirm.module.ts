import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPageRoutingModule } from './confirm-routing.module';
import { NgCalendarModule } from 'ionic2-calendar';

import { ConfirmPage } from './confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeModule,
    ConfirmPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [ConfirmPage]
})
export class ConfirmPageModule { }
