import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobskeerinfoPageRoutingModule } from './jobskeerinfo-routing.module';

import { JobskeerinfoPage } from './jobskeerinfo.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobskeerinfoPageRoutingModule,
    PipeModule
  ],
  declarations: []
})
export class JobskeerinfoPageModule {}
