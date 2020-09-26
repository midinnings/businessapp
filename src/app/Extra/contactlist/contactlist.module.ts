import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactlistPageRoutingModule } from './contactlist-routing.module';

import { ContactlistPage } from './contactlist.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactlistPageRoutingModule,
    PipeModule
  ],
  declarations: []
})
export class ContactlistPageModule { }
