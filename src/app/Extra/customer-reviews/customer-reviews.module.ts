import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { IonicModule } from '@ionic/angular';

import { CustomerReviewsPageRoutingModule } from './customer-reviews-routing.module';
import { StarRatingModule } from 'ionic4-star-rating';
import { CustomerReviewsPage } from './customer-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerReviewsPageRoutingModule,
    PipeModule,
    StarRatingModule
  ],
  declarations: [CustomerReviewsPage]
})
export class CustomerReviewsPageModule {}
