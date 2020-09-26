import { ContactlistPage } from './../Extra/contactlist/contactlist.page';
import { AddcustomerPage } from './../Modal/addcustomer/addcustomer.page';
import { AddcustpopPage } from './../Modal/addcustpop/addcustpop.page';
import { CommonService } from './../Service/common.service';
import { ModalController } from '@ionic/angular';
import { UserPipe } from './../Pipes/pipe/user.pipe';
import { Component } from '@angular/core';
import { CheckoutpopPage } from '../Modal/checkoutpop/checkoutpop.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  usertype: any;
  constructor(public modal: ModalController, public common: CommonService) {
    this.usertype = new UserPipe().transform('usertype');
  }
  async ShowAddcustomerPop() {
    const modal = await this.modal.create({
      component: AddcustpopPage,
      cssClass: 'custpop',
      showBackdrop: true
    });
    await modal.present();
    let { data } = await modal.onWillDismiss();
    if (data.Customer) {
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

  async ShowcheckoutPop() {
    const modal = await this.modal.create({
      component: CheckoutpopPage,
      cssClass: 'custpop',
      showBackdrop: true
    });
    return await modal.present();
  }


}
