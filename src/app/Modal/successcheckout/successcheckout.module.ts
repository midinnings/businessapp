import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccesscheckoutPageRoutingModule } from './successcheckout-routing.module';

import { SuccesscheckoutPage } from './successcheckout.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccesscheckoutPageRoutingModule,
    PipeModule
  ],
  declarations: []
})
export class SuccesscheckoutPageModule {}
