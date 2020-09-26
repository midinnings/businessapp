import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomdatePageRoutingModule } from './customdate-routing.module';

import { CustomdatePage } from './customdate.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomdatePageRoutingModule,
    PipeModule
  ],
  declarations: []
})
export class CustomdatePageModule {}
