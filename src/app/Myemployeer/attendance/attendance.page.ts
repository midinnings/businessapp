import { Component, OnInit } from '@angular/core';
import { InmessageService } from './../../Service/inmessage.service';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/Service/common.service';
@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  eventSource = [];
  calendar = {
    locale: 'en-GB',
    mode: 'month',
    currentDate: new Date(),
  };

  lists: any = {};
  constructor(public common: CommonService, public modal: ModalController, public inmessage: InmessageService) {
    this.lists.from = new Date();
    this.lists.to = new Date();
  }

  ngOnInit() {
  }



}
