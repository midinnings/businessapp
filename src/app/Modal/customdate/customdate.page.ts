import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customdate',
  templateUrl: './customdate.page.html',
  styleUrls: ['./customdate.page.scss'],
})
export class CustomdatePage implements OnInit {

  constructor(public modal: ModalController) { }
  lists: any = {};
  ngOnInit() {
    this.lists.todate = new Date();
    this.lists.fromdate = new Date();
    this.lists.maxdate = new Date();
  }

  close() {
    this.modal.dismiss({ status: false });
  }

  GotoBack() {
    this.modal.dismiss({ status: true, fromdate: this.lists.fromdate, todate: this.lists.todate });
  }

}
