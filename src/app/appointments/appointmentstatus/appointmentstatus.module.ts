import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentstatusPageRoutingModule } from './appointmentstatus-routing.module';

import { AppointmentstatusPage } from './appointmentstatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeModule,
    AppointmentstatusPageRoutingModule
  ],
  declarations: [AppointmentstatusPage]
})
export class AppointmentstatusPageModule { }
