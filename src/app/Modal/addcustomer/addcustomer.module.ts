import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcustomerPageRoutingModule } from './addcustomer-routing.module';

import { AddcustomerPage } from './addcustomer.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcustomerPageRoutingModule,
    PipeModule
  ],
  declarations: []
})
export class AddcustomerPageModule {}
