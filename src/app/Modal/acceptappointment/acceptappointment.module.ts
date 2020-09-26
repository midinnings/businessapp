import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcceptappointmentPageRoutingModule } from './acceptappointment-routing.module';

import { AcceptappointmentPage } from './acceptappointment.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcceptappointmentPageRoutingModule,
    PipeModule,
  ],
  declarations: []
})
export class AcceptappointmentPageModule {}
