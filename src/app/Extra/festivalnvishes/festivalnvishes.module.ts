import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FestivalnvishesPageRoutingModule } from './festivalnvishes-routing.module';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import { FestivalnvishesPage } from './festivalnvishes.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FestivalnvishesPageRoutingModule,
    PipeModule,
    Ionic4DatepickerModule
  ],
  declarations: [FestivalnvishesPage]
})
export class FestivalnvishesPageModule {}
