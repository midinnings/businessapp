import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';

@Component({
  selector: 'app-appliedjob',
  templateUrl: './appliedjob.page.html',
  styleUrls: ['./appliedjob.page.scss'],
})
export class AppliedjobPage implements OnInit {
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
    this.common.PostMethod("GetAppliedJob", Data).then((res: any) => {
      this.lists.joblist = res.Data;
    });
  }

  Call(ev) {

  }

}
