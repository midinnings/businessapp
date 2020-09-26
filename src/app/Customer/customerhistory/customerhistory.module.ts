import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerhistoryPageRoutingModule } from './customerhistory-routing.module';

import { CustomerhistoryPage } from './customerhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeModule,
    CustomerhistoryPageRoutingModule
  ],
  declarations: [CustomerhistoryPage]
})
export class CustomerhistoryPageModule { }
