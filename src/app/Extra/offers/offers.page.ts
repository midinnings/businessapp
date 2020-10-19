import { DatePipe } from '@angular/common';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { CuponsPage } from '../cupons/cupons.page';
import { ModalController, PopoverController } from '@ionic/angular';
import { CouponDetailsPage } from '../coupon-details/coupon-details.page';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
declare let window: any;
@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  constructor(public androidPermissions: AndroidPermissions, public screenshot: Screenshot, private transfer: FileTransfer, private file: File, public common: CommonService, public social: SocialSharing, public modal: ModalController, public popUp: ModalController) { }
  lists: any = {};
  Usertype_check:any='2';
  ngOnInit() {
    this.Usertype_check = new UserPipe().transform('usertype');
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => console.log('Has permission?', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
    );

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(
      result => console.log('Has permission? read', result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
    );
    // this.GetMyOffers();
  }
  ionViewWillEnter() {
    this.GetMyOffers();
  }

  GetMyOffers() {
    this.common.PostMethod("GetOffers", { b_id: new UserPipe().transform('b_id'), userid: localStorage.getItem("UserId"), usertype: new UserPipe().transform('usertype') }).then((res: any) => {
      console.log(res);
      this.lists.Myoffers = res.Data;
    });
  }


  ShareCoupon(ev) {
    let Message = `${ev.title} \n Coupon Code:${ev.couponcode} \n Valid Till Date:${new DatePipe('en-GB').transform(ev.enddate)}\n Discount:${ev.discounttype == 'A' ? ev.discount + '<i class="fa fa-inr"></i>' : ev.discount + '%'} \n ${ev.description}\n Via-My Salon Zone App`
    console.log(Message);
    this.social.share(Message, 'My Salon Zone Coupon', [], '');
  }

  NotifiyMe() {
    this.common.PostMethod("NotifyMe", { b_id: new UserPipe().transform('b_id'), userid: localStorage.getItem("UserId"), type: 'Coupon' }).then((res: any) => {
      this.common.presentToast(res.Message, 4000);
    });
  }

  AddCoupon(Type) {
    localStorage.setItem('CreationType',Type);
    this.common.PageGoto('Forward', 'offers/offerndeal', {'type':Type});
  }

  async OpenCoupon(CouponData) {
    let env = this;
    debugger
    const custmodal = await this.popUp.create({
      component: CouponDetailsPage,
      showBackdrop: true,
      componentProps: CouponData
    });
    await custmodal.present();
  }

  ScreenShot() {
    var RandNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    this.screenshot.save('jpg', 80, RandNumber + 'OfferImage').then(res => {
      console.log(res);
    });
  }

  downloadImage(ImageFullPath) {
    //   const fileTransfer: FileTransferObject = this.transfer.create();
    var RandNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    //   const url = ImageFullPath;
    //   fileTransfer.download(url, this.file.dataDirectory + RandNumber+'offerimage_.jpg').then((entry) => {
    //     console.log('download complete: ' + entry.toURL());
    //   }, (error) => {
    //     // handle error
    //   });
    // }

    const transfer: FileTransferObject = this.transfer.create();
    var url = ImageFullPath;
    var uri = encodeURI(url);
    var filepath = this.file.cacheDirectory + '/' + RandNumber + 'offerimage_.jpg';
    transfer.download(uri, filepath, true).then((entry) => {
      console.log('download complete: ' + JSON.stringify(entry));
      let imageSrc = entry.toUrl();
      console.log(imageSrc);

    }).catch(error => {
      console.log(JSON.stringify(error));

    });

  }

  CanvasSave(index) {
    window.canvas2ImagePlugin.saveImageDataToLibrary(
      function (msg) {
        console.log(msg);
      },
      function (err) {
        console.log(err);
      },
      document.getElementById('myCanvas_' + index)
    );

  }






}
