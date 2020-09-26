import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewjobPageRoutingModule } from './reviewjob-routing.module';

import { ReviewjobPage } from './reviewjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeModule,
    ReviewjobPageRoutingModule,
    PipeModule
  ],
  declarations: [ReviewjobPage]
})
export class ReviewjobPageModule { }
