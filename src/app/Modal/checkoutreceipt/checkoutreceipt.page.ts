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
  PackageComboApplied: boolean = false;
  OrgTotal=0;
  constructor(public common: CommonService, public modal: ModalController, public navParams: NavParams) { }

  ngOnInit() {
    this.lists = this.navParams.data;
    console.log(this.navParams.data);
    this.lists.UserProfile = JSON.parse(localStorage.getItem("UserProfile"));
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
    this.OrgTotal = total;


    if (this.lists.applycoupon.type == "OnService") {
      if (this.lists.applycoupon.discounttype == "Amount") {
        let ServiceCount = this.lists.serviceinfo.length;
        this.lists.Discount = parseInt(this.lists.applycoupon.discount) * ServiceCount;
        total = total - this.lists.Discount;
      } else {
        // By Precent----------------------------------------
        var PercentOfService=0;
        this.lists.serviceinfo.forEach(element => {
          PercentOfService =PercentOfService + ((parseInt(this.lists.applycoupon.discount)/parseInt(element.serviceprice)) * 100);
        });
        total = total - PercentOfService;
      }

      

    } else if(this.lists.applycoupon.type == "Combo" || this.lists.applycoupon.type == "Package") {
      this.lists.Discount = total - this.lists.cost;
      total = this.lists.cost;
    }else{
      //Subtract Loyalty points if redeemed-----------
      let SubPoints=0;
      if(this.lists.points_redeem){
        SubPoints=parseInt(this.lists.points_redeem);
      }
      this.lists.Discount = this.lists.points_redeem ;
      total = total - SubPoints;

      
    }
    return total;
  }

  GetOfferData(offer_id) {
    let env = this;
    this.common.PostMethod("GetFilterData", { file: "offer", name: "id", value: offer_id }).then((res: any) => {
      let Data = res.Data[0];
      if (Data) {
        if (Data.type == 'Combo' || Data.type == 'Package') {
          this.PackageComboApplied = true;

        }
      }
    });
  }

}
