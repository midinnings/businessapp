import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendancePageRoutingModule } from './attendance-routing.module';
import { NgCalendarModule } from 'ionic2-calendar';

import { AttendancePage } from './attendance.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    AttendancePageRoutingModule,
    PipeModule
  ],
  declarations: [AttendancePage]
})
export class AttendancePageModule {}
