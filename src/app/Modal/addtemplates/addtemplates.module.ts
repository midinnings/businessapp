import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtemplatesPageRoutingModule } from './addtemplates-routing.module';

import { AddtemplatesPage } from './addtemplates.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtemplatesPageRoutingModule,
    PipeModule
  ],
  declarations: []
})
export class AddtemplatesPageModule {}
