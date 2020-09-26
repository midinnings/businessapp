import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StylistnotifyPageRoutingModule } from './stylistnotify-routing.module';

import { StylistnotifyPage } from './stylistnotify.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StylistnotifyPageRoutingModule,
    PipeModule
  ],
  declarations: [StylistnotifyPage]
})
export class StylistnotifyPageModule {}
