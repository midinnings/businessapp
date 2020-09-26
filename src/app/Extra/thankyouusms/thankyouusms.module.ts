import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThankyouusmsPageRoutingModule } from './thankyouusms-routing.module';

import { ThankyouusmsPage } from './thankyouusms.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThankyouusmsPageRoutingModule,
    PipeModule
  ],
  declarations: [ThankyouusmsPage]
})
export class ThankyouusmsPageModule {}
