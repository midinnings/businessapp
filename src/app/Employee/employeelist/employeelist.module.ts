import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeelistPageRoutingModule } from './employeelist-routing.module';

import { EmployeelistPage } from './employeelist.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeelistPageRoutingModule,
    PipeModule
  ],
  declarations: [EmployeelistPage]
})
export class EmployeelistPageModule {}
