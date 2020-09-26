import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrormessageComponent } from '../errormessage/errormessage.component';



@NgModule({
  declarations: [ErrormessageComponent],
  exports: [ErrormessageComponent],
  imports: [
    CommonModule
  ]
})
export class ComponentModule { }
