import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindcandidatePageRoutingModule } from './findcandidate-routing.module';

import { FindcandidatePage } from './findcandidate.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindcandidatePageRoutingModule,
    PipeModule
  ],
  declarations: [FindcandidatePage]
})
export class FindcandidatePageModule {}
