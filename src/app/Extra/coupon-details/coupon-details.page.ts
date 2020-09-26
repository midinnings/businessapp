import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams, PopoverController } from '@ionic/angular';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';
import { CommonService } from 'src/app/Service/common.service';
import { Screenshot } from '@ionic-native/screenshot/ngx';

@Component({
  selector: 'app-coupon-details',
  templateUrl: './coupon-details.page.html',
  styleUrls: ['./coupon-details.page.scss'],
})
export class CouponDetailsPage implements OnInit {

  OfferDetailData: any = {};
  BackgroundImage: any = '';
  CanvasImage: any = '';
  constructor(public screenshot: Screenshot, public router: ActivatedRoute, public modal: PopoverController, public common: CommonService, public navparams: NavParams) { }
  lists: any = {};
  ngOnInit() {
    this.OfferDetailData = this.navparams.data;
    this.BackgroundImage = this.common.Url + 'Files/' + this.OfferDetailData.backgroundImage;
  }
  close() {
    this.modal.dismiss({ status: false });
  }

  Dismiss(ev) {
    this.modal.dismiss({ status: true, Data: ev });
  }

  ScreenShot() {
    let env = this;
    document.getElementById("btm_btns").style.display = "none";
    setTimeout(() => {
      var RandNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
      env.screenshot.save('jpg', 80, RandNumber + 'OfferImage').then(res => {
        console.log(res);
        setTimeout(() => {
          env.common.presentToast('Image Saved in Gallery', 2000);
          document.getElementById("btm_btns").style.display = "block";
        }, 1000);

      });
      // this.screenshot.URI(80).then(res => {
      //   console.log(res);
      //   document.getElementById("btm_btns").style.display = "none";
      // });
    }, 1000);

  }

  // Javascript_Image(){
  //   var canvas = <HTMLCanvasElement>document.getElementById("myoffer");
  //   this.CanvasImage = canvas.toDataURL("image/png");
  // }

}
