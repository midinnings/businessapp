import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShapingWishesPageRoutingModule } from './shaping-wishes-routing.module';
import { FileTransfer } from '@ionic-native/file-transfer';
import { ShapingWishesPage } from './shaping-wishes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShapingWishesPageRoutingModule,
    PipeModule,
    
  ],
  declarations: [ShapingWishesPage]
})
export class ShapingWishesPageModule {} 
