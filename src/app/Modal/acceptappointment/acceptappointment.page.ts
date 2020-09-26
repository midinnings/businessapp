import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-acceptappointment',
  templateUrl: './acceptappointment.page.html',
  styleUrls: ['./acceptappointment.page.scss'],
})
export class AcceptappointmentPage implements OnInit {

  constructor(public modal: ModalController, public navParams: NavParams) { }
  lists: any = {}
  ngOnInit() {
    this.lists = this.navParams.data;
  }

  close() {
    this.modal.dismiss({ Status: false });
  }

  OpenPopUp() {
    this.modal.dismiss({ Status: true });
  }


}
