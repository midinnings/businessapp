import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeermanagmentPageRoutingModule } from './employeermanagment-routing.module';

import { EmployeermanagmentPage } from './employeermanagment.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeermanagmentPageRoutingModule,
    PipeModule
  ],
  declarations: [EmployeermanagmentPage]
})
export class EmployeermanagmentPageModule {}
