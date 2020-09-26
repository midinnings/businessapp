import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageEmployeePageRoutingModule } from './manage-employee-routing.module';

import { ManageEmployeePage } from './manage-employee.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageEmployeePageRoutingModule,
    PipeModule
  ],
  declarations: [ManageEmployeePage]
})
export class ManageEmployeePageModule {}
