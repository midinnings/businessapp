import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppliedjobPageRoutingModule } from './appliedjob-routing.module';

import { AppliedjobPage } from './appliedjob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppliedjobPageRoutingModule, PipeModule
  ],
  declarations: [AppliedjobPage]
})
export class AppliedjobPageModule { }
