import { DashboardPageModule } from './../Menu/dashboard/dashboard.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { CheckoutPageModule } from '../Menu/checkout/checkout.module';
import { JobsPageModule } from '../Menu/jobs/jobs.module';
import { EmployerPageModule } from '../Menu/employer/employer.module';
import { ProfilePageModule } from '../Menu/profile/profile.module';
import { PipeModule } from '../Pipes/pipe/pipe.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    DashboardPageModule,
    CheckoutPageModule,
    JobsPageModule,
    EmployerPageModule,
    ProfilePageModule,
    PipeModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
