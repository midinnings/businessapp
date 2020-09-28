import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../Service/common.service';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.page.html',
  styleUrls: ['./customer-reviews.page.scss'],
})
export class CustomerReviewsPage implements OnInit {

  public Rating: any = [];

  constructor(public common: CommonService) { }

  ngOnInit() {

    this.common.PostMethod("GetBusinessRatings", { b_id: new UserPipe().transform('b_id') }).then((res: any) => {
      let Data = res.Data;
      if (res.Status == 1) {
        this.Rating = Data;
      } else {
        this.common.presentToast('Unable to fetch ratings, please try again after sometime', '2000');
      }
    }, err => {
      this.common.presentToast('Unable to fetch ratings, please try again after sometime', '2000');

    });

  }


}
