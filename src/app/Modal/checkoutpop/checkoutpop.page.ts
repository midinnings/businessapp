import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-checkoutpop',
  templateUrl: './checkoutpop.page.html',
  styleUrls: ['./checkoutpop.page.scss'],
})
export class CheckoutpopPage implements OnInit {

  constructor(public modal: ModalController, public common: CommonService) { }

  ngOnInit() {
  }
  close() {
    this.modal.dismiss();
  }
  gotopage(ev) {
    setTimeout(() => {
      this.close();
    }, 50);
    this.common.PageGoto('Forward', ev, {})
  }
}
