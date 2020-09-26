import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-openjob',
  templateUrl: './openjob.page.html',
  styleUrls: ['./openjob.page.scss'],
})
export class OpenjobPage implements OnInit {

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
    this.common.PostMethod("GetJobs", Data).then((res: any) => {
      this.lists.joblist = res.Data;
      console.log(res);
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


  CheckApply(ev) {
    let id = localStorage.getItem("UserId");
    if (ev.some((item) => item.userid == id)) {
      return false;
    } else {
      return true;
    }
  }


  SearchJob(ev) {
    let Data: any = {};
    Data.b_id = new UserPipe().transform("b_id");
    Data.userid = new UserPipe().transform("id");
    if (!Data.b_id) {
      Data.b_id = Data.userid;
    }
    Data.search = ev;
    this.common.PostMethod("GetJobs", Data).then((res: any) => {
      this.lists.joblist = res.Data;
      console.log(res);
    });
  }

}
