import { NavController } from '@ionic/angular';
import { CommonService } from './../../Service/common.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobdetail',
  templateUrl: './jobdetail.page.html',
  styleUrls: ['./jobdetail.page.scss'],
})
export class JobdetailPage implements OnInit {

  constructor(public common: CommonService, public router: ActivatedRoute, public navCtrl: NavController) { }
  lists: any = {}
  ngOnInit() {
    this.router.queryParams.subscribe((res: any) => {
      this.lists = res;
      this.lists.UserType = localStorage.getItem("UserType");
    });
  }
  CheckApply(ev) {
    let id = localStorage.getItem("UserId");
    if (ev.some((item) => item.userid == id)) {
      return false;
    } else {
      return true;
    }
  }

  ApplyJob(ev) {
    this.common.presentLoader();
    this.common.PostMethod("ApplyJob", { userid: localStorage.getItem("UserId"), jobid: ev }).then((res: any) => {
      this.common.dismissLoader();
      if (res.Status == 1) {
        this.common.presentToast(res.Message, 4000);
        this.navCtrl.back();
      } else {
        this.common.presentToast(res.Message, 4000);
      }
    });
  }



}
