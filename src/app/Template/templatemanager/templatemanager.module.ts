import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplatemanagerPageRoutingModule } from './templatemanager-routing.module';

import { TemplatemanagerPage } from './templatemanager.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplatemanagerPageRoutingModule,
    PipeModule
  ],
  declarations: [TemplatemanagerPage]
})
export class TemplatemanagerPageModule {}
