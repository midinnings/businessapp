import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplieduserPageRoutingModule } from './applieduser-routing.module';

import { ApplieduserPage } from './applieduser.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApplieduserPageRoutingModule,
    PipeModule
  ],
  declarations: [ApplieduserPage]
})
export class ApplieduserPageModule {}
