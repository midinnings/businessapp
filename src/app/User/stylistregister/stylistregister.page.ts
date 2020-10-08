import { FcmmessageService } from './../../Service/fcmmessage.service';
import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';
import { MenuController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidmessageService } from 'src/app/Service/validmessage.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { StriphtmlPipe } from 'src/app/Pipes/striphtml.pipe';
@Component({
  selector: 'app-stylistregister',
  templateUrl: './stylistregister.page.html',
  styleUrls: ['./stylistregister.page.scss'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class StylistregisterPage implements OnInit {
  lists: any = {};
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
  stylistregister: FormGroup;
  constructor(public fcmmessage: FcmmessageService, public navCtrl: NavController, public router: Router, public camera: Camera, public route: ActivatedRoute, public valid: ValidmessageService, public common: CommonService, public menu: MenuController, public Fb: FormBuilder) {
    this.lists.Statelist = [];
    this.lists.Citylist = [];
    this.lists.Skilllist = [];
    this.lists.business = [];
    this.GetStatelist();
    this.Initalization();
    this.GetDroplist();
  }


  ngOnInit() {
    this.stylistregister = this.Fb.group({
      name: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
      yourself: new FormControl(),
      stateid: new FormControl('', Validators.required),
      cityid: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      stateid1: new FormControl('', Validators.required),
      cityid1: new FormControl('', Validators.required),
      address1: new FormControl('', Validators.required),
      dob: new FormControl(''),
      landmark: new FormControl(),
      pincode: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)])),
      landmark1: new FormControl(),
      pincode1: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)])),
      qualification: new FormControl(),
      university: new FormControl(),
      emptype: new FormControl(),
      indtype: new FormControl(),
      experience: new FormControl(),
      skills: new FormControl(),
      salary: new FormControl(),
      usertype: new FormControl(1),
      language: '',
      password: '',
      terms: '',
      logo: '',
      employer: '',
      b_id: ''
    });

    this.route.queryParams.subscribe((res: any) => {
      if (res.edit) {
        this.lists.edit = true;
        this.stylistregister.controls['usertype'].setValue(1);
        this.stylistregister.controls['language'].setValue("English");
        let Password: any = "msz123";
        this.stylistregister.controls['password'].setValue(Password);
        let profile = new UserPipe().transform('Businessinfo');
        this.stylistregister.controls["employer"].setValue(profile.name);
        this.stylistregister.controls["employer"].disable();
        this.stylistregister.controls["b_id"].setValue(profile.id);
      } else if (res.useredit) {
        this.lists.useredit = true;
        // this.stylistregister.patchValue(res);
        this.stylistregister.controls['name'].setValue(res.name);
        this.stylistregister.controls['mobile'].setValue(res.mobileno);
        this.stylistregister.controls['email'].setValue(res.email);
        this.stylistregister.controls['dob'].setValue(res.dob);
        this.stylistregister.controls['password'].setValue(res.password);
        this.stylistregister.controls['usertype'].setValue(1);
        this.stylistregister.controls['language'].setValue(res.language);
        // this.stylistregister.controls['logo'].setValue(res.logo);
        if (res.logo) {
          this.lists.Image = this.common.Url + 'Files/' + res.logo;
        }
        this.stylistregister.controls['address'].setValue(res.addressinfo.address);
        this.stylistregister.controls['landmark'].setValue(res.addressinfo.landmark);
        this.stylistregister.controls['pincode'].setValue(res.addressinfo.pincode);

        this.GetCitylist1(res.addressinfo.stateid1);
        this.GetCitylist(res.addressinfo.stateid);

        setTimeout(() => {
          this.stylistregister.controls['stateid'].setValue(res.addressinfo.stateid);
          this.stylistregister.controls['stateid1'].setValue(res.addressinfo.stateid1);
          setTimeout(() => {
            this.stylistregister.controls['cityid'].setValue(res.addressinfo.cityid);
            this.stylistregister.controls['cityid1'].setValue(res.addressinfo.cityid1);
            this.stylistregister.controls['emptype'].setValue(res.OtherInfo.employertype);
            this.stylistregister.controls['indtype'].setValue(res.OtherInfo.industrytype);
            this.stylistregister.controls['experience'].setValue(String(res.OtherInfo.eperience));
            this.stylistregister.controls['skills'].setValue(JSON.parse(res.OtherInfo.skill));
            this.stylistregister.controls['qualification'].setValue(res.OtherInfo.qualification);
          }, 2000);
        }, 2000);


        this.stylistregister.controls['address1'].setValue(res.addressinfo.address1);
        this.stylistregister.controls['landmark1'].setValue(res.addressinfo.landmark1);
        this.stylistregister.controls['pincode1'].setValue(res.addressinfo.pincode1);


        this.stylistregister.controls['b_id'].setValue(res.b_id);
        this.stylistregister.controls['employer'].setValue(res.Businessinfo.name);

        this.lists.presentbid = res.b_id;

        // this.stylistregister.controls['employer'].disable();


        this.stylistregister.controls['salary'].setValue(res.OtherInfo.currentsalary);
        this.stylistregister.controls['yourself'].setValue(res.about);
        this.lists.userid = res.id;
      } else {
        this.stylistregister.controls['name'].setValue(res.name);
        this.stylistregister.controls['mobile'].setValue(res.mobile);
        this.stylistregister.controls['password'].setValue(res.password);
        this.stylistregister.controls['usertype'].setValue(1);
        this.stylistregister.controls['language'].setValue(res.language);
      }
    });
    this.lists.language = localStorage.getItem("language");
  }
  CreateAccount() {
    if (!this.stylistregister.valid) {
      this.common.dismissLoader();
      this.common.presentToast("Please Check All the Mandate Fields(*).", 4000);
    } else if (!this.lists.terms) {
      this.common.BasicAlert("Alert !", "", "Please first accept terms and conditions.")
    } else {
      this.common.presentLoader();
      this.stylistregister.controls['skills'].setValue(JSON.stringify(this.stylistregister.value.skills));
      if (this.lists.edit) {
        let Password = "msz123" + this.stylistregister.value.mobile.substr(this.stylistregister.value.mobile.length - 4);
        this.stylistregister.controls['password'].setValue(Password);
      }
      if (this.lists.useredit) {
        this.stylistregister.value.id = this.lists.userid;
        let profile = JSON.parse(localStorage.getItem("UserProfile"));
        profile.logo = this.stylistregister.value.logo;
        profile.about = this.stylistregister.value.yourself;
        localStorage.setItem("UserProfile", JSON.stringify(profile));
      }
      if (this.lists.useredit && (parseInt(this.lists.presentbid) != parseInt(this.stylistregister.value.b_id))) {
        this.common.dismissLoader();
        this.common.Confirm("Are you sure to change your employer?", res => {
          if (res) {
            this.stylistregister.value.changeemployeer = 1;
            this.stylistregister.value.oldbid = this.lists.presentbid;
            this.common.presentLoader();
            this.Register();
          }
        });
      } else {
        this.Register();
      }
    }
  }


  Register() {
    this.common.PostMethod("UserRegistration", this.stylistregister.value).then((res: any) => {
      if (res.status.Status == 1) {
        this.common.presentToast(res.Message, 4000);
        this.common.dismissLoader();
        if (this.lists.edit) {
          this.common.presentToast("Please Activate Stylist Account.", 4000);
          this.navCtrl.back();
        } else if (this.lists.useredit) {
          if ((parseInt(this.lists.presentbid) != parseInt(this.stylistregister.value.b_id))) {
            let option: NavigationExtras = {
              queryParams: { Message: "Please Contact To Your Administrator To Activate Your Account." }
            }
            localStorage.clear();
            setTimeout(() => {
              this.fcmmessage.GetToken();
              this.router.navigate(['/login'], option);
            }, 200);
          } else {
            this.common.presentToast("Stylist Updated Successfully.", 4000);
            this.common.PageGoto("Root", "");
          }
        } else {
          let option: NavigationExtras = {
            queryParams: { Message: "Please Contact To Your Administrator To Activate Your Account." }
          }
          this.router.navigate(['/login'], option);
        }
      } else {
        this.common.dismissLoader();
        this.common.presentToast(res.status.Message, 4000);
      }
    });
  }


  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 50,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.lists.Image = 'data:image/jpeg;base64,' + imageData;
      this.common.PostMethod("FileUpload", { file: this.lists.Image }).then((res: any) => {
        console.log(res);
        this.stylistregister.controls['logo'].setValue(res.file);

      }).catch(y => {
        console.log(y);
      });
    }, (err) => {
      console.log(err);
    });
  }
  async selectImage() {
    const actionSheet = await this.common.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }
  Initalization() {

  }
  GetCitylist(ev) {
    this.common.PostMethod("GetCity", { Id: ev }).then((res: any) => {
      this.lists.Citylist = res.Data;
    });
  }
  GetCitylist1(ev) {
    this.common.PostMethod("GetCity", { Id: ev }).then((res: any) => {
      this.lists.Citylist1 = res.Data;
    });
  }
  GetStatelist() {
    this.common.PostMethod("GetStates", { Id: 101 }).then((res: any) => {
      this.lists.Statelist = res.Data || [];
      this.lists.Statelist1 = res.Data || [];
    });
  }
  GetDroplist() {
    this.common.PostMethod("GetFilterData", { file: "master", name: "Name", value: "Qualification" }).then((res: any) => {
      let data = res.Data || [];
      data.forEach(element => {
        element.Value = element.Value.split(",");
        element.ValueHi = element.ValueHi.split(",");
      });
      if (localStorage.getItem('language') == 'Hindi') {
        this.lists.qualificationlist = data[0].ValueHi;
      } else {
        this.lists.qualificationlist = data[0].Value;
      }
    });
    this.common.PostMethod("GetFilterData", { file: "master", name: "Name", value: "Employment Type" }).then((res: any) => {
      let data = res.Data || [];
      data.forEach(element => {
        element.Value = element.Value.split(",");
        element.ValueHi = element.ValueHi.split(",");
      });
      if (localStorage.getItem('language') == 'Hindi') {
        this.lists.employeementtypelist = data[0].ValueHi;
      } else {
        this.lists.employeementtypelist = data[0].Value;
      }
    });
    this.common.PostMethod("GetFilterData", { file: "master", name: "Name", value: "Industry Type" }).then((res: any) => {
      let data = res.Data || [];
      data.forEach(element => {
        element.Value = element.Value.split(",");
        element.ValueHi = element.ValueHi.split(",");

      });
      if (localStorage.getItem('language') == 'Hindi') {
        this.lists.industrytypelist = data[0].ValueHi;
      } else {
        this.lists.industrytypelist = data[0].Value;
      }
    });
    this.common.PostMethod("GetFilterData", { file: "master", name: "Name", value: "Experience" }).then((res: any) => {
      let data = res.Data || [];
      data.forEach(element => {
        element.Value = element.Value.split(",");
        element.ValueHi = element.ValueHi.split(",");
      });
      if (localStorage.getItem('language') == 'Hindi') {
        this.lists.experiencelist = data[0].ValueHi;
      } else {
        this.lists.experiencelist = data[0].Value;
      }
    });
    this.common.PostMethod("GetFilterData", { file: "master", name: "Name", value: "Skills" }).then((res: any) => {
      let data = res.Data || [];
      data.forEach(element => {
        element.Value = element.Value.split(",");
        element.ValueHi = element.ValueHi.split(",");
      });
      if (localStorage.getItem('language') == 'Hindi') {
        this.lists.skilllist = data[0].ValueHi;
      } else {
        this.lists.skilllist = data[0].Value;
      }
    });
  }

  SearchBusiness(ev) {
    this.common.PostMethod("SearchBusiness", { Search: ev }).then((res: any) => {
      this.lists.business = res.Data;
    });
  }

  selectEmployer(ev) {
    this.stylistregister.controls["employer"].setValue(ev.name);
    this.stylistregister.controls["b_id"].setValue(ev.id);
    setTimeout(() => {
      this.lists.business = [];
    }, 1000);
  }
  Readterms() {
    this.common.PageGoto('Forward', 'terms');

  }

  SameAddress(ev) {
    let env=this;
    console.log(ev);
    if (ev.detail.checked) {
      this.stylistregister.controls["address1"].setValue(this.stylistregister.value.address);
      this.stylistregister.controls["landmark1"].setValue(this.stylistregister.value.landmark);
      this.stylistregister.controls["stateid1"].setValue(this.stylistregister.value.stateid);
      this.GetCitylist1(this.stylistregister.value.stateid);
      setTimeout(() => {
        env.stylistregister.controls["cityid1"].setValue(env.stylistregister.value.cityid);
      }, 2000);
      this.stylistregister.controls["pincode1"].setValue(this.stylistregister.value.pincode);
    } else {
      this.stylistregister.controls["address1"].setValue("");
      this.stylistregister.controls["landmark1"].setValue("");
      this.stylistregister.controls["stateid1"].setValue(0);
      this.stylistregister.controls["cityid1"].setValue(0);
      this.stylistregister.controls["pincode1"].setValue("");
    }
  }

  CheckDateValidate(ev) {
    let sdate = new Date(ev.detail.value);
    let today = new Date();
    if (sdate > today) {
      this.stylistregister.controls["dob"].setValue("");
      this.common.BasicAlert("Alert !", "", "Please do not Select Future Date.");
    }
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar) || event.target.value.length >5) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
  
}
