import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './../../material.module';

import { IonicModule } from '@ionic/angular';
// import { AccordionModule } from "ngx-accordion";
import { StylistregisterPage } from './stylistregister.page';
import { NgSelectModule } from '@ng-select/ng-select';
import { ComponentModule } from 'src/app/Components/component/component.module';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
 
const routes: Routes = [
  {
    path: '',
    component: StylistregisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgSelectModule,
    ReactiveFormsModule,
    ComponentModule,
    PipeModule,
    // AccordionModule,
    MaterialModule,
    RouterModule.forChild(routes),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    Ionic4DatepickerModule
  ],
  declarations: [StylistregisterPage]
})
export class StylistregisterPageModule { }
