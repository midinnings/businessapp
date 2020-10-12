import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { InmessageService } from './../../Service/inmessage.service';
import { DatePipe } from '@angular/common';
import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { CuponsPage } from './../../Extra/cupons/cupons.page';
import { CheckoutreceiptPage } from './../../Modal/checkoutreceipt/checkoutreceipt.page';
import { SuccesscheckoutPage } from './../../Modal/successcheckout/successcheckout.page';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';
import { IonSelect, NavController, ModalController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.page.html',
  styleUrls: ['./manual.page.scss'],
})
export class ManualPage implements OnInit {
  eventSource = [];
  calendar = {
    locale: 'en-GB',
    mode: 'month',
    currentDate: new Date(),
  };
  lists: any = {};
  checkoutform: FormGroup;
  DiscountValues: any = {};
  Final_DiscountAvail: number = 0;
  Amount_PayableShow: number = 0;
  CustomCoupon: any = '';
  AppliedCoupon: any = '';
  @ViewChild('serviceselect', { static: false }) serviceselect: IonSelect;
  @ViewChild('stylistselect', { static: false }) stylistselect: IonSelect;
  constructor(public social: SocialSharing, public file: File, public inmessage: InmessageService, public modal: ModalController, public common: CommonService, public router: ActivatedRoute, public fb: FormBuilder, public navCtrl: NavController) { }
  ngOnInit() {
    this.lists.serviceinfo = [];
    this.lists.Discount = 0;
    this.lists.employeeinfo = {}
    this.lists.DiscountType = "P";
    this.lists.applycoupon = {};
    this.checkoutform = this.fb.group({
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])),
      couponCode: new FormControl()
    });
    this.lists.Old = false;
    this.router.queryParams.subscribe((res: any) => {
      if (res.id) {
        this.lists.Old = true;
        let object = Object.keys(res);
        object.forEach(element => {
          this.lists[element] = res[element];
        });

        if (this.lists.service) {
          this.lists.service = JSON.parse(this.lists.service);
        }
        if (this.lists.service.length == 0) {
          this.lists.PackageApplied = true;
          
        }
        
        this.checkoutform.controls['name'].setValue(res.customer_name);
        this.checkoutform.controls['mobile'].setValue(res.contactno);
      }
    });
    setTimeout(() => {
      this.GetServiceList();
      this.GetEmployeelist();

      if(this.lists.PackageApplied){
        this.PackageDiscount(this.lists);
      }
     
    }, 200);


  }
  onEventSelected(ev) {
    console.log(ev);
  }
  onViewTitleChanged(ev) {
    this.lists.title = ev;
  }
  onTimeSelected(ev) {
    console.log(ev);
  }

  GetServiceList() {
    this.common.PostMethod("GetFilterData", { file: "ub_service", name: "userid", value: new UserPipe().transform('b_id') }).then((res: any) => {
      this.lists.servicelist = res.Data;
      this.totalamount();
    });
  }

  GetEmployeelist() {
    this.common.PostMethod("GetFilterData", { file: "userlogin", name: "b_id", value: new UserPipe().transform('b_id') }).then((res: any) => {
      this.lists.userlist = res.Data;
      this.ChangeStylist(this.lists);
    });
  }

  totalamount() {
    let price: any = 0;
    if (this.lists.serviceinfo) {
      this.lists.serviceinfo.forEach(element => {
        price = parseInt(price) + parseInt(element.serviceprice);
      });
    }
    //this.lists.payableamount = (parseInt(price) - parseInt(this.lists.Discount));
    //return (parseInt(price) - parseInt(this.lists.Discount));
    this.lists.price = price;
    if (this.lists.applycoupon.type) {
      this.lists.Discount = this.lists.Discount = (this.lists.price * (this.lists.applycoupon.type / 100));
      this.lists.Discount = parseInt(this.lists.Discount);
    }
    this.lists.payableamount = price;
    this.Amount_PayableShow = price;
    this.Final_DiscountAvail = 0;
    this.CustomCoupon = '';
    // reset discount value--------------------------

    return (this.lists.price);

  }


  AddmoreService() {
    this.serviceselect.open();
  }

  selectedservice(ev) {
    console.log(ev);
  }
  Openstylst() {
    this.stylistselect.open();
  }


  Changeservicelist(ev) {
    let env = this;
    this.lists.serviceinfo = [];
    ev.detail.value.forEach(element => {
      this.lists.servicelist.forEach(data => {
        if (data.serviceid == element) {
          this.lists.serviceinfo.push(data);
        }
      });
    });

    setTimeout(() => {
      env.totalamount();
    }, 500);
  }

  SubmitCheckout() {
    this.common.Confirm("Are you Sure You Want to Checkout this Appointment?", res => {
      if (res) {
        this.common.presentLoader();
        let service: any = [];
        this.lists.serviceinfo.forEach(element => {
          service.push(element.serviceid);
        });
        if (!this.lists.Old) {
          this.lists.services = JSON.stringify(service);
          let Data = {
            customer_name: this.checkoutform.value.name,
            userid: localStorage.getItem("UserId"),
            b_id: new UserPipe().transform('b_id'),
            contactno: this.checkoutform.value.mobile,
            email: '',
            salon: new UserPipe().transform('Businessinfo')['name'],
            gender: this.lists.gender,
            service: this.lists.services,
            prefeerddate: new DatePipe('en-GB').transform(this.calendar.currentDate, 'yyyy-MM-dd') + ' ' + new DatePipe('en-GB').transform(this.calendar.currentDate, 'hh:mm:ss a'),
            comments: 'MANUAL CHECKOUT BY ' + new UserPipe().transform('name'),
            employee: this.lists.employee,
            appointmentstatus: 'Confirm',
          }
          this.lists.customer_name = this.checkoutform.value.name;
          this.lists.contactno = this.checkoutform.value.mobile;
          this.common.PostMethod("CreateAppointment", Data).then((res: any) => {
            if (res.Data) {
              this.lists.id = res.Data;
              this.lists.userid = localStorage.getItem("UserId");
              this.lists.b_id = new UserPipe().transform('b_id');
              this.common.PostMethod("CompleteCheckout", this.lists).then((resu: any) => {
                this.lists.billid = resu.CheckoutId;
                this.common.dismissLoader();
                this.inmessage.sendMessage("Check Start Service", "Dashboard");
                this.OpenSucessCheckout();
              });
              this.common.presentToast(res.Message, 4000);
            }
          });
        } else {

          this.lists.services = JSON.stringify(service);
          this.common.PostMethod("CompleteCheckout", this.lists).then((resu: any) => {
            this.lists.billid = resu.CheckoutId;
            this.common.dismissLoader();
            this.inmessage.sendMessage("Check Start Service", "Dashboard")
            this.OpenSucessCheckout();
          });
          this.common.presentToast(res.Message, 4000);
        }
      }
    });
  }

  async OpenSucessCheckout() {
    this.common.GetMethod('StatusNotification?id=' + this.lists.id);
    const custmodal = await this.modal.create({
      component: CheckoutreceiptPage,
      cssClass: 'checkoutreceipt',
      showBackdrop: true,
      componentProps: this.lists
    });
    await custmodal.present();
    let { data } = await custmodal.onWillDismiss();
    if (data.Status) {
      const receipt = await this.modal.create({
        component: SuccesscheckoutPage,
        cssClass: 'successcheckout',
        showBackdrop: true,
        componentProps: this.lists
      });
      await receipt.present();
      let rdata: any = await receipt.onWillDismiss();
      if (rdata.data.Status) {
        if (!rdata.data.finish) {
          let filename = rdata.data.filename + ".pdf";
          debugger
          this.file.writeFile(this.file.externalRootDirectory + "MSZApp/", filename, rdata.data.Data, { replace: true }).then((result: any) => {
            this.social.share("Your Salon Receipt via-My Salon Zone", "Receipt", [this.file.externalRootDirectory + "MSZApp/" + filename], "");
          });
        }
        if (!this.lists.Old) {
          this.checkoutform.reset();
          this.lists.serviceinfo = [];
          this.lists.employeeinfo = {};
          this.lists.PaymentMode = "";
          this.navCtrl.navigateBack('/app/tabs/dashboard');
        } else {
          this.checkoutform.reset();
          this.lists.serviceinfo = [];
          this.lists.employeeinfo = {};
          this.lists.PaymentMode = "";
          this.navCtrl.back();
        }
      }
    }
  }
  GotoBack() {
    this.navCtrl.back();
  }

  ServiceCheck(ev) {
    console.log(ev);
  }

  SearchCustomer(ev) {
    if (ev.length > 2) {
      this.common.PostMethod("SearchCustomer", { Search: ev, b_id: new UserPipe().transform('b_id') }).then((res: any) => {
        this.lists.Customerlist = res.Data;
      });
    }
  }
  SelectedCustomer(ev) {
    this.checkoutform.controls['name'].setValue(ev.name);
    this.checkoutform.controls['mobile'].setValue(ev.mobile);
    this.lists.gender = ev.gender;
    setTimeout(() => {
      this.lists.Customerlist = [];
    }, 200);
  }

  ChangeStylist(ev) {
    debugger
  
    if(typeof this.lists.employeeinfo== "string"){
      let EmployeeData = this.lists.userlist.filter( i => i.id==this.lists.employee );
      if(EmployeeData){
        if(typeof this.lists.employeeinfo== "string"){
          this.lists.employeeinfo = {};
        }
        this.lists.employeeinfo.name = EmployeeData[0].name;
        return
      }
      
    }
    this.lists.userlist.forEach(element => {
      if (element.id == ev.detail.value) {
        this.lists.employeeinfo.name = element.name;
        return false;
      }
    });
  }


  async OpenCoupon() {
    let env = this;
    const custmodal = await this.modal.create({
      component: CuponsPage,
      showBackdrop: true,
      componentProps: this.lists
    });
    if (this.lists.service.length > 0) {
      await custmodal.present();
      let { data } = await custmodal.onWillDismiss();
      if (data.status) {

        this.ApplyDiscountConcession(data.Data);
      }
    } else {
      let msg = "please add one service to activate Coupons";
      this.common.presentToast(msg, 1000)
    }
  }




  ApplyDiscountConcession(DataCoupon) {
    console.log(DataCoupon);
    let values = this.DiscountValues = DataCoupon;
    this.lists.applycoupon = values;
    this.lists.couponCode = values.couponcode;

    if (values.type == 'OnService' || values.type == 'Flat') {
      this.DirectDiscount(values);
    } else {
      this.common.presentToast('Please select a valid offer applicable on services..', 2000);
    }
    // this.book.controls['couponCode'].setValue(values.couponcode);
    // Apply Check by Percentage or Direct Cost Cutting--------------
    // if (values.discounttype == 'A') {
    //   this.lists.Discount = parseInt(values.discount);

    // }
    // else if (values.discounttype == 'P') {
    //   this.lists.Discount = (this.lists.price * (parseInt(values.discount) / 100));

    // }
    // else {
    //   let msg = "Coupon is not valid or expired..";
    //   this.common.presentToast(msg, 2000);
    //   return;
    // }

    // Apply Date Check Now--------------------------------------------

    // if (!this.dateCheck(values.startdate, values.enddate)) {
    //   let msg = "Coupon is expired..";
    //   this.common.presentToast(msg, 2000);
    //   return;
    // }

    // this.CustomCoupon = this.lists.couponCode;
    // this.Final_DiscountAvail = this.lists.Discount = parseInt(this.lists.Discount);
    // this.Amount_PayableShow = this.lists.payableamount = this.lists.price - this.lists.Discount;

  }


  DirectDiscount(values) {
    let SelectedServices = this.lists.service;
    if (SelectedServices.length == 0) { this.common.presentToast('Please select services to proceed..', 2000); return }
    if (values.discounttype == 'Amount') { this.lists.Discount = parseInt(values.discount); }
    else if (values.discounttype == 'Percent') { this.lists.Discount = (this.lists.price * (parseInt(values.discount) / 100)); }
    else { this.common.presentToast("Coupon is not valid or expired..", 2000); return; }
    // Apply Date Check Now--------------------------------------------
    if (!this.dateCheck(values.startdate, values.enddate)) { this.common.presentToast("Coupon is expired..", 2000); return; }

    //---Applying Discount on Flat or service basis----------------------------------------
    if (this.DiscountValues.type == 'OnService') {
      let CountServices = SelectedServices.length;
      this.AppliedCoupon = this.lists.couponCode;
      this.lists.Discount = parseInt(this.lists.Discount);
      this.Final_DiscountAvail = CountServices * this.lists.Discount;
      this.Amount_PayableShow = this.lists.price - this.Final_DiscountAvail;
      this.lists.payableamount = this.Amount_PayableShow;
    }
    else if (this.DiscountValues.type == 'Flat') {
      this.AppliedCoupon = this.lists.couponCode;
      this.Final_DiscountAvail = this.lists.Discount = parseInt(this.lists.Discount);
      this.Amount_PayableShow = this.lists.price - this.lists.Discount;
      this.lists.payableamount = this.Amount_PayableShow;
    }
  }


  ApplyCoupon() {
    let data = { file: 'offer', name: 'couponcode', value: this.CustomCoupon };
    this.common.PostMethod("GetFilterData", data).then((res: any) => {
      console.log(res);
      debugger
      if (res.Status == 1) {
        if (res.Data.length != 0) {
          let CouponExtractData = res.Data[0];
          this.ApplyDiscountConcession(CouponExtractData);
        } else {
          let msg = "Coupon Code is not valid..";
          this.common.presentToast(msg, 2000);
        }

      } else {
        let msg = "Coupon Code is not valid..";
        this.common.presentToast(msg, 2000);
      }
    });
  }

  PackageDiscount(values) {
    let data = { file: 'offer', name: 'id', value: this.lists.coupon_id };
    debugger
    this.common.PostMethod("GetFilterData", data).then((res: any) => {
      if (res.Status == 1) {
        let ServiceIds = res.Data[0].services.split(',');
        this.lists.packageservicelist = []
        ServiceIds.forEach(element => {
          let ServiceFound = this.lists.servicelist.filter(i => i.serviceid == element);
          if (ServiceFound) {
            this.lists.packageservicelist.push(ServiceFound[0]);
          }
        });

      }
    });


    // Applying package discounts and making other service carges-----------------


  }


  // totalamount() {
  //   let env = this;
  //   let price: number = 0;
  //   if (this.book.value.service) {
  //     console.log(this.book.value.service);
  //     this.book.value.service.forEach(function (ServiceId, index) {

  //       var resServiceObject = env.lists.servicelist.filter(function (item) {
  //         return item.serviceid == ServiceId;
  //       });
  //       if (resServiceObject[0]) { price = price + parseInt(resServiceObject[0].serviceprice); } else { price = 0; }
  //     });
  //   }
  //   this.lists.price = price;
  //   // if (this.lists.applycoupon.type) {
  //   //   this.lists.Discount = this.lists.Discount = (this.lists.price * (this.lists.applycoupon.type / 100));
  //   //   this.lists.Discount = parseInt(this.lists.Discount);
  //   // }
  //   this.lists.payableamount = price;
  //   this.Amount_PayableShow = price;
  //   return (this.lists.price);
  // }


  dateCheck(from, to) {
    var fDate, lDate, cDate;
    fDate = Date.parse(from);
    lDate = Date.parse(to);
    cDate = Date.parse(new Date().toJSON().slice(0, 10));

    if ((cDate <= lDate && cDate >= fDate)) {
      return true;
    }
    return false;
  }




}
