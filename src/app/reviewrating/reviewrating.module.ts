import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewratingPageRoutingModule } from './reviewrating-routing.module';

import { ReviewratingPage } from './reviewrating.page';
import { StarRatingModule } from 'ionic4-star-rating';
import { PipeModule } from '../Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarRatingModule,
    ReviewratingPageRoutingModule,
    PipeModule
  ],
  declarations: [ReviewratingPage]
})
export class ReviewratingPageModule {}
