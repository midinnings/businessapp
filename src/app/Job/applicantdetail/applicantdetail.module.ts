import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicantdetailPageRoutingModule } from './applicantdetail-routing.module';

import { ApplicantdetailPage } from './applicantdetail.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplicantdetailPageRoutingModule,
    PipeModule
  ],
  declarations: [ApplicantdetailPage]
})
export class ApplicantdetailPageModule {}
