import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageboxPageRoutingModule } from './messagebox-routing.module';

import { MessageboxPage } from './messagebox.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageboxPageRoutingModule,
    PipeModule
  ],
  declarations: []
})
export class MessageboxPageModule {}
