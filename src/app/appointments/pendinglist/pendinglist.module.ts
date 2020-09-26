import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendinglistPageRoutingModule } from './pendinglist-routing.module';

import { PendinglistPage } from './pendinglist.page';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    PipeModule,
    PendinglistPageRoutingModule
  ],
  declarations: [PendinglistPage]
})
export class PendinglistPageModule { }
