import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offerndeal',
  templateUrl: './offerndeal.page.html',
  styleUrls: ['./offerndeal.page.scss'],
})
export class OfferndealPage implements OnInit {
  eventSource = [];
  calendar = {
    locale: 'en-GB',
    mode: 'month',
    currentDate: new Date(),
  };

  offerform: FormGroup;

  lists: any = {};
  OccasionDescriptions:any = [];
  //ShowService: boolean = false;

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

  CreationType: String = 'Offers';
  SelectSecondService: boolean = false;
  OccasionList: any = [];

  constructor(public common: CommonService, public modal: ModalController, public fb: FormBuilder, public navCtrl: NavController) {
    this.lists.from = new Date();
    this.lists.to = new Date();
    this.CreationType = localStorage.getItem('CreationType');
  }

  onEventSelected(ev) {
    console.log(ev);
  }
  onViewTitleChanged(ev) {
    console.log(ev);
    this.lists.title = ev;
  }
  onTimeSelected(ev) {
    console.log(ev);
    // this.calendar.currentDate = new Date(ev.selectedTime);
    this.lists.from = new Date(ev.selectedTime);
    this.lists.to = new Date(ev.selectedTime);
  }

  ngOnInit() {
    this.offerform = this.fb.group({
      type: new FormControl('Offer', Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      couponcode: new FormControl(''),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required),
      usage: new FormControl(''),
      noftime: new FormControl(0),
      discounttype: new FormControl('Amount', Validators.required),
      discount: new FormControl('', Validators.required),
      //  applysetting: new FormControl('', Validators.required),
      services: new FormControl(''),
      templatecategory: new FormControl(''),
      occassion: new FormControl(''),
      discountMainTypes: new FormControl(''),
      second_service: new FormControl(''),
    });
    this.GetServicelist();
    this.GetTemplateCategorylist();
    this.Occassions();
    //this.GetOccasionData();
  }

  GetServicelist() {
    this.common.PostMethod("GetBusinesslists", { b_id: new UserPipe().transform("b_id") }).then((res: any) => {
      this.lists.Servicelist = res.Data;
    });
  }

  GetTemplateCategorylist() {
    this.common.PostMethod("GetFilterData", { file: "master", name: "id", value: 11 }).then((res: any) => {
      this.lists.templatecategorylist = res.Data[0].Value.split(',');
    });
  }

  Occassions() {
    this.common.PostMethod("GetFilterData", { file: "master", name: "id", value: 12 }).then((res: any) => {
      this.lists.Occassions = res.Data[0].Value.split(',');
    });
  }

  ServiceSelected(values) {
    //----
    if (this.offerform.value.discountMainTypes == 'BuynGet') {
      if (this.offerform.value.services.length != 1) {
        this.offerform.value.services = '';
        this.common.presentToast('Please select appropriate services from service list to create BuynGet/Combo/Package', 2000);
      }
    }

  }

  TypeSelected(value) {


    if (value == 'BuynGet') {
      this.SelectSecondService = true;
    } else {
      this.SelectSecondService = false;
    }
  }

  GenerateCouponCode() {
    let DisValue = this.offerform.value.discount;
    let DisTitle = this.offerform.value.title;
    let UserProfile = JSON.parse(localStorage.getItem('UserProfile'));
    var UserName = 'MSZ';

    var today = new Date();
    var date = String(today.getDate()).padStart(2, '0');

    let TitleSub = DisTitle.substring(0, 2);
    if (UserProfile) { UserName = UserProfile.name; UserName = UserName.substring(0, 2); }

    if (DisValue && DisTitle && UserProfile) {
      let CouponCode = UserName + '' + TitleSub + '' + DisValue + '' + date;
      CouponCode = CouponCode.toUpperCase();
      return CouponCode;
    } else {
      return 'MSZ' + UserName + '' + date;
    }
  }


  Back() {
    this.navCtrl.back();
  }
  Next() {
    let env=this;
    if (this.CreationType == 'Deals') {
      if (this.offerform.value.services.length >= 2) {
      } else {
        if (this.offerform.value.services.length == 1 && this.offerform.value.discountMainTypes == 'BuynGet') {

        } else {
          this.common.presentToast('Please select appropriate services to create BuynGet/Combo/Package', 3000);
          return;
        }

      }
    }
    this.offerform.value.couponcode = this.GenerateCouponCode();
    this.offerform.value.type = this.offerform.value.discountMainTypes;
    this.offerform.value.b_id = new UserPipe().transform('b_id');
    this.offerform.value.userid = localStorage.getItem("UserId");

    if (this.offerform.value.second_service && this.offerform.value.services) {
      this.offerform.value.services.push(this.offerform.value.second_service);
    }

    if (this.offerform.value.services) {
      var filteredArray = this.lists.Servicelist.filter(function(itm){
        return env.offerform.value.services.indexOf(itm.serviceid) > -1;
      });
      let ServiceNames = [];
      filteredArray.forEach(element => {
          ServiceNames.push(element.service);
      });
      this.offerform.value.ServiceNames = ServiceNames.toString();
    }else{
      this.offerform.value.ServiceNames = '';
    }


    this.common.PageGoto('Forward', 'shaping', this.offerform.value);
  }

  OccasionChange(Cat) {
    this.common.PostMethod("GetOccasionData", { type: "title", category:Cat }).then((res: any) => {
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

  // OccasionChange(Cat){

  // }


}
