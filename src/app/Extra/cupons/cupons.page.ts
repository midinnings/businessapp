import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';
import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cupons',
  templateUrl: './cupons.page.html',
  styleUrls: ['./cupons.page.scss'],
})
export class CuponsPage implements OnInit {

  constructor(public modal: ModalController, public common: CommonService) { }
  lists: any = {};
  ngOnInit() {
    this.lists.Myoffers=[];
    this.GetMyOffers();
  }
  close() {
    this.modal.dismiss({ status: false });
  }

  GetMyOffers() {
    this.common.PostMethod("GetOffers", { b_id: new UserPipe().transform('b_id'), userid: localStorage.getItem("UserId"), usertype: new UserPipe().transform('usertype') }).then((res: any) => {
      console.log(res);
      this.lists.Myoffers = res.Data;
      this.FilterOffers();
    });
  }

  FilterOffers(){
    this.lists.Myoffers = this.lists.Myoffers.filter( i => i.type == 'OnService' || i.type == 'Package' || i.type == 'BuynGet' || i.type == 'Flat' || i.type == 'Combo' );
  }

  ApplyCupon(ev) {
    
    if(!this.common.dateCheck(ev.startdate, ev.enddate)){
      this.common.presentToast('Coupon is expired..', 3000);
      return;
    }
    
    
    this.modal.dismiss({ status: true, Data: ev });
  }

  // ApplyCode(ev) {
  //   this.common.PostMethod("CheckCupon", { couponid: this.lists.couponid, code: this.lists.Code, userid: localStorage.getItem("UserId"), b_id: new UserPipe().transform("b_id") }).then((res: any) => {
  //     if (res.Status == 1) {
  //       this.SaveCupon(ev);
  //     } else {
  //       this.common.presentToast(res.Message, 4000);
  //     }
  //   });
  // }
  // ApplyCupon(ev) {
  //   this.lists.Code = ev.couponcode;
  //   this.lists.couponid = ev.id;
  //   this.ApplyCode(ev);
  // }
}
