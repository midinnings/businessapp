import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutpopPageRoutingModule } from './checkoutpop-routing.module';

import { CheckoutpopPage } from './checkoutpop.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutpopPageRoutingModule,
    PipeModule
  ],
  declarations: []
})
export class CheckoutpopPageModule {}
