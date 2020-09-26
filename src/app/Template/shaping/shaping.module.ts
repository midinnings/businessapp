import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShapingPageRoutingModule } from './shaping-routing.module';

import { ShapingPage } from './shaping.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeModule,
    ShapingPageRoutingModule
  ],
  declarations: [ShapingPage]
})
export class ShapingPageModule { }
