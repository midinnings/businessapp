import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';
import { ModalController } from '@ionic/angular';
import { SharingpopPage } from 'src/app/Modal/sharingpop/sharingpop.page';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';
import * as moment from 'moment';
@Component({
  selector: 'app-upcomingbrithday',
  templateUrl: './upcomingbrithday.page.html',
  styleUrls: ['./upcomingbrithday.page.scss'],
})
export class UpcomingbrithdayPage implements OnInit {
  lists: any = {};
  constructor(public common: CommonService, public modal: ModalController) { }

  ngOnInit() {
    this.lists.Brithdays = [];

  }

  ionViewWillEnter() {
    this.GetBrithDaylist();

  }

  GetBrithDaylist() {
    let today = moment().format("YYYY-MM-DD");
    this.common.PostMethod("GetBrithDayUpcoming", { b_id: new UserPipe().transform("b_id"), dob: today }).then((res: any) => {
      console.log(res);
      this.lists.Brithdays = res.Data;
    });
  }


  async OpenSharingPopup(ev) {
    const modal = await this.modal.create({
      component: SharingpopPage,
      cssClass: 'addcustomer',
      showBackdrop: true,
      componentProps: { id: ev }
    });
    await modal.present();
    let { data } = await modal.onWillDismiss();
    if (data.Status) {
      this.common.presentToast('Message Shared Successfully!', 4000);
    }
  }
}
