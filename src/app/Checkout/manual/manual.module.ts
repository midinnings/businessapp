import { PipeModule } from './../../Pipes/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualPageRoutingModule } from './manual-routing.module';

import { ManualPage } from './manual.page';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    PipeModule,
    ReactiveFormsModule,
    ManualPageRoutingModule
  ],
  declarations: [ManualPage]
})
export class ManualPageModule { }
