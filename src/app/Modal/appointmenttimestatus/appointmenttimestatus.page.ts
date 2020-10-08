import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-appointmenttimestatus',
  templateUrl: './appointmenttimestatus.page.html',
  styleUrls: ['./appointmenttimestatus.page.scss'],
})
export class AppointmenttimestatusPage implements OnInit {

  constructor(public common:CommonService,public modal: ModalController, public navparams: NavParams) { }
  lists: any = {}
  ngOnInit() {
    this.lists = this.navparams.data.appointment;
  }

  close() {
    this.modal.dismiss();
  }


}
