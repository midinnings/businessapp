import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenjobPageRoutingModule } from './openjob-routing.module';

import { OpenjobPage } from './openjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenjobPageRoutingModule,
    PipeModule
  ],
  declarations: [OpenjobPage]
})
export class OpenjobPageModule { }
