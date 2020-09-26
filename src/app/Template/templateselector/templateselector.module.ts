import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemplateselectorPageRoutingModule } from './templateselector-routing.module';

import { TemplateselectorPage } from './templateselector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemplateselectorPageRoutingModule
  ],
  declarations: [TemplateselectorPage]
})
export class TemplateselectorPageModule {}
