
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgSelectModule } from '@ng-select/ng-select';

import { BusinessprofilePageRoutingModule } from './businessprofile-routing.module';

import { BusinessprofilePage } from './businessprofile.page';
import { PipeModule } from 'src/app/Pipes/pipe/pipe.module';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicModule,
    NgSelectModule,
    PipeModule,
    MatMenuModule,
    // RouterModule.forChild(routes),

    BusinessprofilePageRoutingModule,
  ],
  declarations: [BusinessprofilePage]
})
export class BusinessprofilePageModule { }
