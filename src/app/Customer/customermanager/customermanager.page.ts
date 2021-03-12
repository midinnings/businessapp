import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';
import { AddcustomerPage } from 'src/app/Modal/addcustomer/addcustomer.page';
import { ModalController } from '@ionic/angular';
import { ContactlistPage } from 'src/app/Extra/contactlist/contactlist.page';
@Component({
  selector: 'app-customermanager',
  templateUrl: './customermanager.page.html',
  styleUrls: ['./customermanager.page.scss'],
})
export class CustomermanagerPage implements OnInit {

  public UserType: any = '';

  constructor(public common: CommonService, public modal: ModalController) {

  }

  ngOnInit() {
    this.UserType = localStorage.getItem('UserType');
  }
  GotoPage(ev) {
    this.common.PageGoto('Forward', ev, {});
  }

  async addcustomer() {
    const custmodal = await this.modal.create({
      component: AddcustomerPage,
      cssClass: 'addcustomer',
      showBackdrop: true
    });
    await custmodal.present();
    let { data } = await custmodal.onWillDismiss();
    if (data.contactbook) {
      const contactmodal = await this.modal.create({
        component: ContactlistPage,
        showBackdrop: true
      });
      await contactmodal.present();
      let { data } = await contactmodal.onWillDismiss();
      if (data.status) {
        const custmodal = await this.modal.create({
          component: AddcustomerPage,
          cssClass: 'addcustomer',
          showBackdrop: true,
          componentProps: data.Data
        });
        await custmodal.present();
      }
    }
  }

}
