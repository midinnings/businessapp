import { FormBuilder, FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';
import * as moment from 'moment';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {
  custform: FormGroup;
  datePickerObj: any = {
    inputDate: new Date(), // default new Date()
    // fromDate: new Date(), // default null
    toDate: new Date(), // default null
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
  constructor(public navParams: NavParams, public modal: ModalController, public fb: FormBuilder, public common: CommonService) { }
  lists: any = {};
  ngOnInit() {
    this.custform = this.fb.group({
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(10)])),
      gender: new FormControl('', Validators.required),
      dob: new FormControl()
    });
    if (this.navParams.data._objectInstance) {
      let data = this.navParams.data._objectInstance;
      let number = data.phoneNumbers[0]['value'].replace(/\s/g, "").replace("+91", "").replace(/[^0-9 ]/g, "");
      number = number.replace("+91", "");
      number = number.substr(number.length - 10);
      this.custform.controls["name"].setValue(data.displayName);
      this.custform.controls["mobile"].setValue(number);
    }
    console.log(this.navParams);
    if (this.navParams.data.edit) {
      this.lists.edit = true;
      this.lists.id = this.navParams.data.id;
      this.custform.patchValue(this.navParams.data);
    }
  }

  close() {
    this.modal.dismiss({ contactbook: false });
  }

  CustSave() {
    this.common.presentLoader();
    this.custform.value.userid = localStorage.getItem("UserId");
    this.custform.value.b_id = new UserPipe().transform('b_id');
    this.custform.value.dob = moment(this.custform.value.dob).format("YYYY-MM-DD");
    if (this.lists.edit) {
      this.custform.value.id = this.lists.id;
    }
    this.common.PostMethod("Customerregistration", this.custform.value).then((res: any) => {
      this.common.dismissLoader();
      if (res.Status == 1) {
        this.common.presentToast(res.Message, 4000);
        this.close();
      } else {
        this.common.presentToast(res.Message, 4000);
      }
    });
  }

  OpenContactBook() {
    this.modal.dismiss({ contactbook: true });
  }

  CheckDateValidate(ev) {
    let sdate = new Date(ev.detail.value);
    let today = new Date();
    if (sdate > today) {
      this.custform.controls["dob"].setValue("");
      this.common.BasicAlert("Alert !", "", "Please do not Select Future Date.");
    }
  }
}
