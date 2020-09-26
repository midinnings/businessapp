import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessmanagerPageRoutingModule } from './businessmanager-routing.module';

import { BusinessmanagerPage } from './businessmanager.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessmanagerPageRoutingModule,
    PipeModule
  ],
  declarations: [BusinessmanagerPage]
})
export class BusinessmanagerPageModule {}
