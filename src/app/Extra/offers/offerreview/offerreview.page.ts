import { CommonService } from 'src/app/Service/common.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offerreview',
  templateUrl: './offerreview.page.html',
  styleUrls: ['./offerreview.page.scss'],
})
export class OfferreviewPage implements OnInit {

  constructor(public routes: ActivatedRoute, public common: CommonService) { }
  lists: any = {};
  BackgroundImagePath: any = '';
  ngOnInit() {
    this.BackgroundImagePath = localStorage.getItem('TempBackgroundPath');
    this.routes.queryParams.subscribe((res: any) => {
      console.log(res);
      this.lists = res;
    });

  }

  CreateCoupon() {
    this.common.presentLoader();
    var DataSend: any = {};
    DataSend = JSON.parse(JSON.stringify(this.lists));
    DataSend.backgroundImage = this.BackgroundImagePath;
    this.common.PostMethod("CreateOffer", DataSend).then((res: any) => {
      this.common.dismissLoader();
      if (res.Status == 1) {
        this.common.presentToast(res.Message, 4000);
        this.common.PageGoto('Root', '');
      } else {
        this.common.presentToast(res.Message, 4000);
      }
    });
  }

}
