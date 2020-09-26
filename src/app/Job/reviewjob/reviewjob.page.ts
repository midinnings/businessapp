import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-reviewjob',
  templateUrl: './reviewjob.page.html',
  styleUrls: ['./reviewjob.page.scss'],
})
export class ReviewjobPage implements OnInit {
  lists: any = {}
  constructor(public router: ActivatedRoute, public common: CommonService) { }

  ngOnInit() {
    this.router.queryParams.subscribe((res: any) => {
      for (let [key, value] of Object.entries(res)) {
        this.lists[key] = value;
      }
    });
  }

  Submitjob() {
    this.common.presentLoader();
    this.lists['mobile'] = new UserPipe().transform("mobileno");
    this.lists['email'] = new UserPipe().transform("email");
    this.common.PostMethod("CreateJob", this.lists).then((res: any) => {
      this.common.dismissLoader();
      if (res.Status == 1) {
        this.common.presentToast(res.Message, 4000);
        this.common.PageGoto('Forward', 'app/tabs/job');
      } else {
        this.common.presentToast(res.Message, 4000);
      }
    });
  }

}
