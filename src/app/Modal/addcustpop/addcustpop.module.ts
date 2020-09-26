import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcustpopPageRoutingModule } from './addcustpop-routing.module';

import { AddcustpopPage } from './addcustpop.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcustpopPageRoutingModule,
    PipeModule
  ],
  declarations: []
})
export class AddcustpopPageModule {}
