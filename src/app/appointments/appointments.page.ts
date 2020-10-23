import { AppointmenttimestatusPage } from './../Modal/appointmenttimestatus/appointmenttimestatus.page';
import { ModalController } from '@ionic/angular';
import { InmessageService } from './../Service/inmessage.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControlName, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';
import { DatePipe } from '@angular/common';
import { UserPipe } from '../Pipes/pipe/user.pipe';
import * as moment from 'moment';
import { CuponsPage } from '../Extra/cupons/cupons.page';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.page.html',
  styleUrls: ['./appointments.page.scss'],
})
export class AppointmentsPage implements OnInit {
  eventSource = [];
  eventSource1 = [];
  calendar = {
    locale: 'en-GB',
    mode: 'month',
    timemode: 'day',
    currentDate: new Date(),
    currenttime: new Date(),
  };

  lists: any = {};
  book: FormGroup;
  OfferParams: any = {};
  ShowCode: any = '';
  ShowDealSelection: boolean = true;
  constructor(public modal: ModalController, public common: CommonService, public fb: FormBuilder, public router: ActivatedRoute, public inmessage: InmessageService) {
    this.lists.appointmentdate = new Date();
    this.lists.eventtime = [];
    this.lists.Events = [];
    this.lists.Times = ["12:00 AM", "12:30 AM", "01:00 AM", "01:30 AM", "02:00 AM", "02:30 AM", "03:00 AM", "03:30 AM", "04:00 AM", "04:30 AM", "05:00 AM", "05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"];
  }

  ngOnInit() {
    this.book = this.fb.group({
      cname: new FormControl('', Validators.required),
      cmobile: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])),
      cemail: new FormControl('', Validators.email),
      gender: new FormControl(),
      service: new FormControl(''),
      stylist: new FormControl('', Validators.required),
      PackageSelected: new FormControl(false, Validators.required),
    });

    this.router.queryParams.subscribe(res => {

      if (Object.keys(res).length != 0) { this.ShowDealSelection = false; } else {
        this.lists.ShowOffers = false; return;
      }
      if (res.coupon_id != null || res.coupon_id != "null") { this.ShowCode = res.coupon_applied; this.lists.ShowOffers = true; }
      this.book.controls['cname'].setValue(res.customer_name);
      this.book.controls['cmobile'].setValue(res.contactno);
      if (res.email && res.email != "null") this.book.controls['cemail'].setValue(res.email);
      this.book.controls['gender'].setValue(res.gender);
      setTimeout(() => {
        this.book.controls['service'].setValue(JSON.parse(res.service));
        this.book.controls['stylist'].setValue(res.employee);

      }, 2000);
      if(JSON.parse(res.service).length!=0){
        this.lists.ShowOffers = false;
      }
      this.lists.bookid = res.id;
      let startDate: any = moment(res.prefeerddate);
      let end: any = moment(res.prefeerddate).add(1, 'hours');
      this.lists.Events = [{
        startTime: new Date(startDate),
        endTime: new Date(end),
        allDay: false,
        color: "primary"
      }];
      if (res.id) {
        this.calendar.currentDate = new Date(res.prefeerddate);
        this.calendar.currenttime = new Date(res.prefeerddate);
        this.lists.appointmentdate = new Date(res.prefeerddate);
        this.onTimeSelected1({ selectedTime: new Date(res.prefeerddate) })
      }
      this.eventSource1 = this.lists.Events;
    });
    this.GetUserTime();
    this.Getservice();
    this.GetStylist();
  }

  markDisabled = (date: Date) => {
    let current = new Date();
    let mydate = current.getFullYear() + "-" + (current.getMonth() + 1) + "-" + (current.getDate());
    current = new Date(mydate);
    return date <= current;
  };

  onEventSelected(ev) {
    console.log(ev);
  }
  onViewTitleChanged(ev) {
    this.lists.title = ev;
  }
  onTimeSelected(ev) {
    this.lists.appointmentdate = ev.selectedTime;
    this.calendar.currenttime = ev.selectedTime;
  }
  onTimeSelected1(ev) {
    this.lists.selectedtime = ev.selectedTime;
    let startDate: any = moment(ev.selectedTime);
    let end: any = moment(ev.selectedTime).add(1, 'hours');
    this.lists.Events = [{
      startTime: new Date(startDate),
      endTime: new Date(end),
      allDay: false,
      color: "primary"
    }];

    this.eventSource1 = this.lists.Events;
    this.CheckTimeStatus(new DatePipe('en-GB').transform(this.lists.appointmentdate, 'yyyy-MM-dd') + ' ' + new DatePipe('en-GB').transform(this.lists.selectedtime, 'hh:mm:ss a'));
  }

  GetUserTime() {
    let BusinessProfile = JSON.parse(localStorage.getItem("UserProfile"));
    this.lists.Weekinfo = BusinessProfile.Businessinfo.Timing;
  }

  Getservice() {
    this.common.PostMethod("GetFilterData", { file: "ub_service", name: "userid", value: new UserPipe().transform('b_id') }).then((res: any) => {
      this.lists.servicelist = res.Data;

    });
  }

  GetStylist() {
    this.common.PostMethod("GetFilterData", { file: "userlogin", name: "b_id", value: new UserPipe().transform('b_id') }).then((res: any) => {
      this.lists.userlist = res.Data;
    });
  }

  SaveAppointment() {

    if (this.book.value.PackageSelected) {
      if (!this.OfferParams.coupon_applied) {
        this.common.presentToast("Please Select an Offer", 4000);
        return;
      }
    }

    this.common.presentLoader();
    let id = 0;
    if (this.lists.bookid) {
      id = this.lists.bookid;
    }
    let time = new DatePipe('en-GB').transform(this.lists.selectedtime, 'hh:mm:ss a');
    if (!time) {
      this.common.dismissLoader();
      this.common.presentToast("Please Select Appointment time", 4000);
    } else {
      this.lists.prefeereddate = new DatePipe('en-GB').transform(this.lists.appointmentdate, 'yyyy-MM-dd') + ' ' + new DatePipe('en-GB').transform(this.lists.selectedtime, 'hh:mm:ss a');
      var Services_i = "[]";
      if (this.book.value.service != "" && this.book.value.service != []) {
        Services_i = JSON.stringify(this.book.value.service);
        this.OfferParams.coupon_applied = this.OfferParams.coupon_id = null;
      }

      let Data = {
        'id': id,
        'userid': localStorage.getItem("UserId"),
        'b_id': new UserPipe().transform('b_id'),
        'customer_name': this.book.value.cname,
        'contactno': this.book.value.cmobile,
        'email': this.book.value.cemail,
        'salon': new UserPipe().transform('Businessinfo')['name'],
        'gender': this.book.value.gender,
        'service': Services_i,
        'prefeerddate': this.lists.prefeereddate,
        'comments': '', 'employee': this.book.value.stylist,
        'appointmentstatus': 'Waiting',
        'coupon_id': this.OfferParams.coupon_id,
        'coupon_applied': this.OfferParams.coupon_applied,
        'cost': this.OfferParams.cost,
        'points_redeem':0
      }
      this.common.PostMethod("CreateAppointment", Data).then((res: any) => {
        if (res.Status == "1") {
          this.lists.ShowOffers = false;
          this.common.dismissLoader();
          this.common.presentToast(res.Message, 4000);
          setTimeout(() => {
            this.inmessage.sendMessage("Check Start Service", "Dashboard")
          }, 100);
          this.book.reset();
          this.eventSource1 = [];
        } else {
          this.common.dismissLoader();
          this.common.presentToast(res.Message, 4000);
        }
      });
    }
  }

  SearchCustomer(ev) {
    if (ev.length > 2) {
      this.common.PostMethod("SearchCustomer", { Search: ev, b_id: new UserPipe().transform('b_id') }).then((res: any) => {
        this.lists.Customerlist = res.Data;
      });
    }
  }
  SelectedCustomer(ev) {
    console.log(ev);
    this.book.controls['cname'].setValue(ev.name);
    this.book.controls['cmobile'].setValue(ev.mobile);
    this.book.controls['gender'].setValue(ev.gender);
    setTimeout(() => {
      this.lists.Customerlist = [];
    }, 200);
  }


  CheckTimeStatus(ev) {
    let from = moment(ev).format('YYYY-MM-DD');
    let to = moment(ev).format('YYYY-MM-DD');
    let userid: any = 0;
    if (localStorage.getItem("UserType") != "2" && localStorage.getItem("UserType") != "6") {
      userid = localStorage.getItem("UserId")
    }
    this.common.PostMethod("AppointmentTimeStatus", { userid: userid, from: from, to: to, b_id: new UserPipe().transform('b_id') }).then((res: any) => {
      this.lists.pendinglists = res.Data;
      if (res.Data.length > 0) {
        this.OpenAppointmentPopup(res.Data);
      }
    });
  }

  async OpenAppointmentPopup(ev) {
    const modal = await this.modal.create({
      component: AppointmenttimestatusPage,
      cssClass: 'viewtimestatus',
      showBackdrop: true,
      componentProps: { appointment: ev }
    });
    return await modal.present();
  }

  SelectAnOffer(value) {
    let CheckVal = this.book.value.PackageSelected;
    if (CheckVal == true) {
      this.lists.ShowOffers = true;
    } else {
      this.lists.ShowOffers = false;
    }
  }

  async ViewOffers() {

    // removing offer functionality for now-----------------
    this.common.presentToast('Offers/Deals not available....', 2000);
    return

    const modal = await this.modal.create({
      component: CuponsPage,
      cssClass: '',
      showBackdrop: true,
      componentProps: {}
    });
    await modal.present();

    let { data } = await modal.onWillDismiss();
    if (data.status) {

      if (data.Data.type == 'OnService' || data.Data.type == 'Flat') {
        this.common.presentToast('Please select from any Package/Combo/BuynGet Offers', 3000);
      } else {
        this.OfferParams.coupon_id = data.Data.id;
        this.ShowCode = this.OfferParams.coupon_applied = data.Data.couponcode;
        this.OfferParams.cost = data.Data.discount;
      }

      //this.ApplyDiscountConcession(data.Data);
    }
  }




}
