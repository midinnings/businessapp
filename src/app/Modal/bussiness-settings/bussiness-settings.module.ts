import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { IonicModule } from '@ionic/angular';

import { BussinessSettingsPageRoutingModule } from './bussiness-settings-routing.module';

import { BussinessSettingsPage } from './bussiness-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BussinessSettingsPageRoutingModule,
    PipeModule
  ],
  declarations: [BussinessSettingsPage]
})
export class BussinessSettingsPageModule {}
