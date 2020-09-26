import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-bussiness-settings',
  templateUrl: './bussiness-settings.page.html',
  styleUrls: ['./bussiness-settings.page.scss'],
})
export class BussinessSettingsPage implements OnInit {

  apply_loyalty: any = false;
  points_value: any;
  max_apply: any;
  no_points: any;
  referral_points: any = false;
  UserProfile: any = {};
  SalonCode: any = '';
  SegmentChange = 'CheckoutUser';
  no_referral_points: any = 0;

  constructor(public modal: ModalController, public common: CommonService) { }

  ngOnInit() {
    this.common.presentLoader();
    this.common.PostMethod("UpdateBusinessSettings", { b_id: localStorage.getItem('UserId'), apply_loyalty: this.apply_loyalty, points_value: this.points_value, max_apply: this.max_apply }).then((res: any) => {

      if (res.Status == 1) {
        let DataServices = res.Data;
        if (DataServices) {
          if (DataServices.apply_loyalty == 1) this.apply_loyalty = true;
          this.points_value = DataServices.points_value;
          this.max_apply = DataServices.max_apply;
          this.no_points = DataServices.no_points;
          this.no_referral_points = DataServices.no_referral_points;
          if (DataServices.referral_points == 1) this.referral_points = true;
        }
      }
    });

    this.UserProfile = JSON.parse(localStorage.getItem('UserProfile'));
    this.SalonCode = this.UserProfile.referralcode;
  }

  CustSave() {
    console.log(this.apply_loyalty, this.points_value, this.max_apply);

    if (!this.apply_loyalty) this.apply_loyalty = false;

    this.common.PostMethod("UpdateBusinessSettings", {
      b_id: localStorage.getItem('UserId'),
      apply_loyalty: this.apply_loyalty,
      points_value: this.points_value,
      max_apply: this.max_apply,
      no_points: this.no_points,
      referral_points: this.referral_points,
      no_referral_points: this.no_referral_points,
    }).then((res: any) => {
      this.common.presentToast('Settings Updated Successfully', 4000);
    }, err => {
      this.common.presentToast('Error while updating settings', 4000);
    });
  }

  close() {
    this.modal.dismiss({ Status: false })
  }

  segmentChange(ev) {
    this.SegmentChange = ev.detail.value;
    //console.log(this.item.segment);
  }

  CopyCode(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    this.common.presentToast('Salon code copied to clipboard', 2000);
  }

}
