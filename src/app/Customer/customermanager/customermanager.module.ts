import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomermanagerPageRoutingModule } from './customermanager-routing.module';

import { CustomermanagerPage } from './customermanager.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomermanagerPageRoutingModule,
    PipeModule
  ],
  declarations: [CustomermanagerPage]
})
export class CustomermanagerPageModule {}
