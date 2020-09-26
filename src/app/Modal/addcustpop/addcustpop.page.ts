import { CommonService } from 'src/app/Service/common.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcustpop',
  templateUrl: './addcustpop.page.html',
  styleUrls: ['./addcustpop.page.scss'],
})
export class AddcustpopPage implements OnInit {

  constructor(public modal: ModalController, public common: CommonService) { }

  ngOnInit() {
  }

  close() {
    this.modal.dismiss();
  }

  OpenPopUp() {
    this.modal.dismiss({ Customer: true });
  }
  OpenPage() {
    setTimeout(() => {
      this.modal.dismiss();
    }, 200);
    this.common.PageGoto('Forward', 'appointments', {});
  }
}
