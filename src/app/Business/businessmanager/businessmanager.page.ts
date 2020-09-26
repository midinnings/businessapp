import { CommonService } from './../../Service/common.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-businessmanager',
  templateUrl: './businessmanager.page.html',
  styleUrls: ['./businessmanager.page.scss'],
})
export class BusinessmanagerPage implements OnInit {

  constructor(public common:CommonService,public navCtrl: NavController) { }

  ngOnInit() {
  }
  gotopage(ev) {
    this.navCtrl.navigateForward(ev);
  }
}
