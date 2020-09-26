import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';

@Component({
  selector: 'app-featuredjob',
  templateUrl: './featuredjob.page.html',
  styleUrls: ['./featuredjob.page.scss'],
})
export class FeaturedjobPage implements OnInit {

  constructor(public common: CommonService) { }
  lists: any = {};
  ngOnInit() {
    // this.GetJoblist();
  }

  ionViewWillEnter() {
    this.GetJoblist();
  }

  GetJoblist() {
    let Data: any = {};
    Data.b_id = new UserPipe().transform("b_id");
    Data.userid = new UserPipe().transform("id");
    if (!Data.b_id) {
      Data.b_id = Data.userid;
    }
    this.common.PostMethod("GetMyFeatureJobs", Data).then((res: any) => {
      this.lists.joblist = res.Data;
    });
  }

  ApplyJob(ev) {
    this.common.presentLoader();
    this.common.PostMethod("ApplyJob", { userid: localStorage.getItem("UserId"), jobid: ev }).then((res: any) => {
      this.common.dismissLoader();
      if (res.Status == 1) {
        this.common.presentToast(res.Message, 4000);
        this.GetJoblist();
      } else {
        this.common.presentToast(res.Message, 4000);
      }
    });
  }

  SearchJob(ev) {
    let Data: any = {};
    Data.b_id = new UserPipe().transform("b_id");
    Data.userid = new UserPipe().transform("id");
    if (!Data.b_id) {
      Data.b_id = Data.userid;
    }
    Data.search = ev;
    this.common.PostMethod("GetMyFeatureJobs", Data).then((res: any) => {
      this.lists.joblist = res.Data;
      console.log(res);
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

}
