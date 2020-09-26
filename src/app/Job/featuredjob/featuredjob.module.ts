import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeaturedjobPageRoutingModule } from './featuredjob-routing.module';

import { FeaturedjobPage } from './featuredjob.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeaturedjobPageRoutingModule,
    PipeModule
  ],
  declarations: [FeaturedjobPage]
})
export class FeaturedjobPageModule {}
