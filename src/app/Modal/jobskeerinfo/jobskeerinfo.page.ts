import { CommonService } from './../../Service/common.service';
import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobskeerinfo',
  templateUrl: './jobskeerinfo.page.html',
  styleUrls: ['./jobskeerinfo.page.scss'],
})
export class JobskeerinfoPage implements OnInit {

  constructor(public common: CommonService, public modal: ModalController, public navparams: NavParams) { }
  lists: any = {};
  ngOnInit() {
    console.log(this.navparams.data);
    this.lists = this.navparams.data;
  }

  close() {
    this.modal.dismiss();
  }

}
