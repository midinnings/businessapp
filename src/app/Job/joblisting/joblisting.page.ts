import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-joblisting',
  templateUrl: './joblisting.page.html',
  styleUrls: ['./joblisting.page.scss'],
})
export class JoblistingPage implements OnInit {

  constructor(public common: CommonService) { }
  lists: any = {};
  ngOnInit() {
    this.GetJoblist();
  }

  GetJoblist() {
    let Data: any = {};
    Data.b_id = new UserPipe().transform("b_id");
    Data.userid = new UserPipe().transform("id");
    if (!Data.b_id) {
      Data.b_id = Data.userid;
    }
    this.common.PostMethod("GetMyPostJobs", Data).then((res: any) => {
      this.lists.joblist = res.Data;
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
    this.common.PostMethod("GetMyPostJobs", Data).then((res: any) => {
      this.lists.joblist = res.Data;
    });
  }

}
