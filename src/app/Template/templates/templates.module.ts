import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplatesPageRoutingModule } from './templates-routing.module';

import { TemplatesPage } from './templates.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplatesPageRoutingModule,
    PipeModule
  ],
  declarations: [TemplatesPage]
})
export class TemplatesPageModule {}
