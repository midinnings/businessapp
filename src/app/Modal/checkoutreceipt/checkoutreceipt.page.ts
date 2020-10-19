import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-checkoutreceipt',
  templateUrl: './checkoutreceipt.page.html',
  styleUrls: ['./checkoutreceipt.page.scss'],
})
export class CheckoutreceiptPage implements OnInit {
  lists: any = {};
  PackageComboApplied:boolean=false;
  constructor(public common: CommonService, public modal: ModalController, public navParams: NavParams) { }

  ngOnInit() {
    this.lists = this.navParams.data;
    console.log(this.navParams.data);
    this.lists.UserProfile = JSON.parse(localStorage.getItem("UserProfile"));
    debugger
    this.GetOfferData(this.lists.coupon_id);
  }

  next() {
    this.modal.dismiss({ Status: true });
  }

  close() {
    this.modal.dismiss({ Status: false })
  }

  totalamount() {
    let total: any = 0;
    this.lists.serviceinfo.forEach(element => {
      total = parseInt(total) + parseInt(element.serviceprice);
    });
    if (this.lists.applycoupon.discounttype == "Percent") {
      
      
      this.lists.Discount = total - this.lists.cost;
      total = this.lists.cost;
    } else {
      total = parseInt(total) - parseInt(this.lists.Discount);
    }
    return total;
  }

  GetOfferData(offer_id){
    let env=this;
    this.common.PostMethod("GetFilterData", { file: "offer", name: "id", value:offer_id }).then((res: any) => {
      let Data = res.Data[0];
      if(Data){
        if(Data.type == 'Combo' || Data.type == 'Package'){
          this.PackageComboApplied=true;

        }
      }
    });
  }

}
