import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerlistPageRoutingModule } from './customerlist-routing.module';

import { CustomerlistPage } from './customerlist.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerlistPageRoutingModule,
    PipeModule
  ],
  declarations: [CustomerlistPage]
})
export class CustomerlistPageModule {}
