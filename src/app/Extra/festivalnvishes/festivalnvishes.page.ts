import { SharingpopPage } from './../../Modal/sharingpop/sharingpop.page';
import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { CouponDetailsPage } from '../coupon-details/coupon-details.page';
@Component({
  selector: 'app-festivalnvishes',
  templateUrl: './festivalnvishes.page.html',
  styleUrls: ['./festivalnvishes.page.scss'],
})
export class FestivalnvishesPage implements OnInit {
  lists: any = {};
  wish_title: any = '';
  wish_description: any = '';
  start_date: any = '';
  end_date: any = '';
  TakeDes: boolean = false;

  datePickerObj: any = {
    inputDate: new Date(), // default new Date()
    showTodayButton: false, // default true
    closeOnSelect: true, // default false
    disableWeekDays: [], // default []
    mondayFirst: true, // default false
    setLabel: 'S',  // default 'Set'
    todayLabel: 'T', // default 'Today'
    closeLabel: 'Cancel', // default 'Close'
    titleLabel: 'Select a Date', // default null
    monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    weeksList: ["S", "M", "T", "W", "T", "F", "S"],
    dateFormat: 'YYYY-MM-DD', // default DD MMM YYYY
    clearButton: false, // default true
    momentLocale: 'en-US', // Default 'en-US'
    yearInAscending: true, // Default false
    btnCloseSetInReverse: true, // Default false
    btnProperties: {
      expand: 'block', // Default 'block'
      fill: '', // Default 'solid'
      size: '', // Default 'default'
      disabled: '', // Default false
      strong: '', // Default false
      color: '' // Default ''
    },
    arrowNextPrev: {
      nextArrowSrc: 'assets/images/arrow_right.svg',
      prevArrowSrc: 'assets/images/arrow_left.svg'
    }, // This object supports only SVG files.
    highlightedDates: [
      { date: new Date('2019-09-10'), color: '#ee88bf', fontColor: '#fff' },
      { date: new Date('2019-09-12'), color: '#50f2b1', fontColor: '#fff' }
    ], // Default [],
    isSundayHighlighted: {
      fontColor: '#ee88bf' // Default null
    } // Default {}
  };
  OccasionList = [];
  OccasionDescriptions = [];


  constructor(public common: CommonService, public modal: ModalController) { }

  ngOnInit() {
    this.lists.Brithdays = [];
    this.lists.Myoffers = [];
    this.GetMyOffers();

  }

  ionViewWillEnter() {
    this.GetBrithDaylist();
    this.GetFestivals();
    this.GetImportantDays();
  }
  GetBrithDaylist() {
    let today = moment().format("MM-DD");
    console.log(today);
    this.common.PostMethod("GetBrithDayUser", { b_id: new UserPipe().transform("b_id"), dob: today }).then((res: any) => {
      console.log(res);
      this.lists.Brithdays = res.Data;
    });
  }

  GetFestivals() {
    this.common.PostMethod("GetTemplate", { categories: [3] }).then((res: any) => {
      console.log(res);
      this.lists.Festival = res.Data;

    });
  }

  GetImportantDays() {
    this.common.PostMethod("GetTemplate", { categories: [2] }).then((res: any) => {
      console.log(res);
      this.lists.Importantdays = res.Data;
    });
  }

  SelectTemplate(TemplateFor) {
    this.lists.SelectedOccasion = TemplateFor;
    this.TakeDes = true;
    this.OccasionChange(TemplateFor);
  }

  async OpenSharingPopup(ev) {
    const modal = await this.modal.create({
      component: SharingpopPage,
      cssClass: 'addcustomer',
      showBackdrop: true,
      componentProps: { id: ev }
    });
    await modal.present();
    let { data } = await modal.onWillDismiss();
    if (data.Status) {
      this.TakeDes = true;
      //this.common.presentToast('Message Shared Successfully', 4000);
    }
  }

  BackToOffer() {
    this.TakeDes = false;
  }

  SaveDes() {
    let offerform: any = {};
    offerform.b_id = new UserPipe().transform('b_id');
    offerform.userid = localStorage.getItem("UserId");
    offerform.title = this.wish_title;
    offerform.description = this.wish_description;
    offerform.startdate = this.start_date;
    offerform.enddate = this.end_date;
    offerform.SelectedOccasion = this.lists.SelectedOccasion;
    this.common.PageGoto('Forward', 'shaping-wishes', offerform);

  }

  GetMyOffers() {
    this.common.PostMethod("GetFestivalWishesList", { b_id: new UserPipe().transform('b_id'), userid: localStorage.getItem("UserId"), usertype: new UserPipe().transform('usertype') }).then((res: any) => {
      console.log(res);
      this.lists.Myoffers = res.Data;
    });
  }

  async OpenCoupon(CouponData) {
    let env = this;
    const custmodal = await this.modal.create({
      component: CouponDetailsPage,
      showBackdrop: true,
      componentProps: CouponData
    });
    await custmodal.present();
  }

  OccasionChange(Cat) {
    this.common.PostMethod("GetOccasionData", { type: "title", category: Cat }).then((res: any) => {
      if (res.Status == 1) {
        this.OccasionList = res.Data;
      }
    });

    this.common.PostMethod("GetOccasionData", { type: "description", category: Cat }).then((res: any) => {
      if (res.Status == 1) {
        this.OccasionDescriptions = res.Data;
      }
    });
  }




}
