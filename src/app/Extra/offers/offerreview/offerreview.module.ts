import { PipeModule } from './../../../Pipes/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferreviewPageRoutingModule } from './offerreview-routing.module';

import { OfferreviewPage } from './offerreview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeModule,
    OfferreviewPageRoutingModule
  ],
  declarations: [OfferreviewPage]
})
export class OfferreviewPageModule { }
