import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpcomingbrithdayPageRoutingModule } from './upcomingbrithday-routing.module';

import { UpcomingbrithdayPage } from './upcomingbrithday.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpcomingbrithdayPageRoutingModule,
    PipeModule
  ],
  declarations: [UpcomingbrithdayPage]
})
export class UpcomingbrithdayPageModule {}
