import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BusniessregisterPage } from './busniessregister.page';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComponentModule } from 'src/app/Components/component/component.module';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
// import { AccordionModule } from "ngx-accordion";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
const routes: Routes = [
  {
    path: '',
    component: BusniessregisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgSelectModule,
    ComponentModule,
    PipeModule,
    RouterModule.forChild(routes),
    MaterialModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    ReactiveFormsModule,
    Ionic4DatepickerModule
  ],
  declarations: [BusniessregisterPage]
})
export class BusniessregisterPageModule { }
