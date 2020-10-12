import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { Events, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonService } from './../../Service/common.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as moment from "moment";
import { StriphtmlPipe } from 'src/app/Pipes/striphtml.pipe';
declare var google;
@Component({
  selector: 'app-busniessregister',
  templateUrl: './busniessregister.page.html',
  styleUrls: ['./busniessregister.page.scss'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class BusniessregisterPage implements OnInit {
  lists: any = {};

  futureDate = moment(new Date()).add(15, 'days').format("YYYY-MM-DD");
  datePickerObj: any = {
    inputDate: new Date(), // default new Date()
    // fromDate: new Date(), // default null
    toDate: new Date(this.futureDate), // default null
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
  Businessform1: FormGroup;
  GoogleAutocomplete: any;
  autocomplete: any;
  autocompleteItems = [];
  geocoder: any;
  Facilities_List: any = [];
  GetBrandList: any = [];
  Other_Info: any = {};
  PreferedSelectedFacilites: any = [];
  PreferedBrands: any = [];
  Banner_Link: any;
  AddonImages: any = {};
  Edit_BOS: boolean = false;
  BOS: any = {};
  ShowTerms: boolean = true;
  constructor(public events:Events,public zone: NgZone, private geolocation: Geolocation, public navCtrl: NavController, private camera: Camera, private file: File, public common: CommonService, public fb: FormBuilder, public router: ActivatedRoute) {
    this.Initalization();
    this.GetStatelist();
    this.GetServiceCategory();
    this.GetSubServiceCategory();
    this.lists.ServiceStep = [];

    this.BOS.facility_ids = [];
    this.BOS.brand_ids = [];

  }

  ngOnInit() {
    this.Businessform1 = this.fb.group({
      name: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
      email: new FormControl('', Validators.compose([
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      address: new FormControl('', Validators.required),
      address1: new FormControl('', Validators.required),
      landmark: new FormControl(),
      pincode: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(6), Validators.minLength(6)])),
      pincode1: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(6)])),
      stateid: new FormControl('', Validators.required),
      cityid: new FormControl('', Validators.required),
      password: new FormControl(),
      dob: new FormControl(),
      logo: new FormControl(),
      placeid: new FormControl(),
      geolocation: new FormControl(),
      usertype: new FormControl(),
      salon_type: new FormControl('', Validators.required)
    });
    this.router.queryParams.subscribe((res: any) => {
      if (res.edit) {
        this.lists.edit = res.edit;
        let Profile = JSON.parse(localStorage.getItem("UserProfile"));
        if (res.language) { localStorage.setItem("language", res.language); this.lists.language = res.language; }
        this.SetEditValue(Profile);
      } else if (res.searchaddress) {
        this.Businessform1.controls['address1'].setValue(res.address);
        this.Businessform1.controls['pincode1'].setValue(res.pincode);
        this.Businessform1.controls['geolocation'].setValue(JSON.stringify({ lat: res.latitude, lng: res.longitude }));
        this.Businessform1.controls['placeid'].setValue(res.palceid);
      } else {
        if (res.password) {
          this.Businessform1.controls['password'].setValue(res.password);
          this.Businessform1.controls['mobile'].setValue(res.mobile);
          this.Businessform1.controls['name'].setValue(res.name);
          this.Businessform1.controls['usertype'].setValue(res.usertype);
          this.lists.usertype = res.usertype;
        }
      }
    });
    if (localStorage.getItem('language')) this.lists.language = localStorage.getItem('language');

    //Get Facilites List-------------
    this.common.GetMethod("GetFacilitiesList").then((res: any) => {
      console.log(res);
      this.Facilities_List = res.Data;
    }).catch(y => {
      console.log(y);
    });

    //Get Brands List----------------
    this.common.GetMethod("GetBrandList").then((res: any) => {
      console.log(res);
      this.GetBrandList = res.Data;
    }).catch(y => {
      console.log(y);
    });


  }

  SetEditValue(ev) {
    this.lists.terms = true;
    this.ShowTerms = false;
    this.common.presentLoader();
    let env = this;
    if (ev.logo) {
      this.lists.Image = ev.logo;
    }
    this.lists.editprofile = true;
    this.lists.userid = ev.id;
    this.lists.usertype = ev.usertype;
    let Profile = JSON.parse(localStorage.getItem("UserProfile"));
    this.Businessform1.patchValue(ev);
    this.Businessform1.controls["mobile"].setValue(ev.mobileno);
    let Address = ev.Businessaddressinfo;
    this.Businessform1.controls["address"].setValue(Address.address);
    this.Businessform1.controls["address1"].setValue(Address.address1);
    this.Businessform1.controls["pincode1"].setValue(Address.pincode1);
    this.GetCitylist(Address.stateid);
    setTimeout(() => {
      this.Businessform1.controls["stateid"].setValue(Address.stateid);
      setTimeout(() => {
        this.Businessform1.controls["cityid"].setValue(Address.cityid);
      }, 2000);
    }, 2000);
    this.Businessform1.value.b_id = ev.b_id;
    this.Businessform1.controls["pincode"].setValue(Address.pincode);
    this.Businessform1.controls["address"].setValue(Address.address);
    var salon_types = [];
    if (ev.salon_type && ev.salon_type != '') {
      salon_types = ev.salon_type.split(',');
      this.Businessform1.controls["salon_type"].setValue(salon_types);
    }
    let Weeks = ev.Businessinfo.Timing;

    //------Setting Up Other Values------------------------------------

    if (ev.BusinessOtherServices) {
      this.BOS = ev.BusinessOtherServices;
      this.Other_Info = this.BOS;
      if (this.BOS.facility_ids) { this.PreferedSelectedFacilites = this.BOS.facility_ids.split(',').map(Number); }
      if (this.BOS.brand_ids) { this.PreferedBrands = this.BOS.brand_ids.split(',').map(Number); }
      this.Banner_Link = this.BOS.salon_banner;
      this.lists.Banner = this.common.Url + 'Files/' + this.BOS.salon_banner;
      if (this.BOS.additional_images) {
        let Addon_Array = this.BOS.additional_images.split(",");
        if (Addon_Array[0]) this.lists.AddOn1 = this.common.Url + 'Files/' + Addon_Array[0];
        if (Addon_Array[1]) this.lists.AddOn2 = this.common.Url + 'Files/' + Addon_Array[1];
        if (Addon_Array[2]) this.lists.AddOn3 = this.common.Url + 'Files/' + Addon_Array[2];
        if (Addon_Array[3]) this.lists.AddOn4 = this.common.Url + 'Files/' + Addon_Array[3];
        this.lists.AddonImages = this.BOS.additional_images;
      }
      this.Edit_BOS = true;
      //----------------------
      setTimeout(() => {
        env.Facilities_List.forEach((element, i) => {
          if (env.BOS.facility_ids) {
            let FacilityArr = env.BOS.facility_ids.split(',');
            if (FacilityArr.includes(element.id) || FacilityArr.includes(JSON.stringify(element.id))) {
              env.Facilities_List[i].selection = true;
            }
          }
        });
        env.GetBrandList.forEach((element, i) => {
          if (env.BOS.brand_ids) {
            let BrandsArr = env.BOS.brand_ids.split(',');
            if (BrandsArr.includes(element.id) || BrandsArr.includes(JSON.stringify(element.id))) {
              env.GetBrandList[i].selection = true;
            }
          }
        });
      }, 2000);
    }


    setTimeout(() => {
      this.lists.Servicetime = Weeks;
      this.lists.Servicetime.forEach(element => {
        element.checked = true;
      });
    }, 1000);
  }

  Initalization() {
    this.lists.Servicetime = [
      { checked: false, dayid: 1, eveid: 2, week: "SUN", day: "09:00 AM", evening: "09:00 PM", status: "" },
      { checked: false, dayid: 3, eveid: 4, week: "MON", day: "09:00 AM", evening: "09:00 PM", status: "" },
      { checked: false, dayid: 5, eveid: 6, week: "TUE", day: "09:00 AM", evening: "09:00 PM", status: "" },
      { checked: false, dayid: 7, eveid: 8, week: "WED", day: "09:00 AM", evening: "09:00 PM", status: "" },
      { checked: false, dayid: 9, eveid: 10, week: "THU", day: "09:00 AM", evening: "09:00 PM", status: "" },
      { checked: false, dayid: 11, eveid: 12, week: "FRI", day: "09:00 AM", evening: "09:00 PM", status: "" },
      { checked: false, dayid: 13, eveid: 14, week: "SAT", day: "09:00 AM", evening: "09:00 PM", status: "" },
    ];
    this.lists.Times = ["06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"];
  }

  GetStatelist() {
    this.common.PostMethod("GetStates", { Id: 101 }).then((res: any) => {
      this.lists.Statelist = res.Data || [];
    });
  }

  GetCitylist(ev) {
    console.log(ev);
    this.common.PostMethod("GetCity", { Id: ev }).then((res: any) => {
      this.lists.Citylist = res.Data || [];
    });
  }

  GetServiceCategory() {
    this.common.PostMethod("GetService", { file: "service_category", name: "serviceid", value: null }).then((res: any) => {
      this.lists.Servicelist = res.Data || [];
      if (this.lists.editprofile) {
        let Profile = JSON.parse(localStorage.getItem("UserProfile"));
        this.common.PostMethod("GetServiceInfo", { ids: Profile.BusinessService }).then((res: any) => {
          this.lists.Servicelist.forEach(element => {
            res.Data.forEach(selement => {
              if (element.id == selement) {
                element.selection = true;
              }
            });
          });

        })
      }
    });
  }

  GetSubServiceCategory() {
    this.common.PostMethod("GetSubService", {}).then((res: any) => {
      this.lists.SubServicelist = res.Data || [];
    });
  }

  GetServiceStep(ev) {
    if (ev.selection) {
      let avail = false;
      this.lists.ServiceStep.forEach((element, index) => {
        if (element.id == ev.id) {
          avail = true;
          this.lists.ServiceStep.splice(index, 1);
        }
      });
      if (!avail) {
        let sublist: any = {};
        this.lists.Servicelist.forEach(element => {
          if (element.id == ev.id) {
            sublist.name = element.servicename;
            sublist.name_hi = element.servicename_hi;
            sublist.id = element.id;
          }
        });
        let child = [];
        this.lists.SubServicelist.forEach(element => {
          if (element.serviceid == ev.id) {
            child.push({ name: element.subservice, name_hi: element.subservice_hi, price: element.price, id: element.id });
          }
        });
        sublist.Child = child;
        this.lists.ServiceStep.push(sublist);
      }
    } else {
      this.lists.ServiceStep.forEach((element, index) => {
        if (element.id == ev.id) {
          this.lists.ServiceStep.splice(index, 1);
        }
      });
    }
    if (this.lists.editprofile) {
      setTimeout(() => {
        let Profile = JSON.parse(localStorage.getItem("UserProfile"))
        this.lists.ServiceStep.forEach(sselement => {
          sselement.checked = true;
          sselement.Child.forEach(element => {
            element.checked = false;
          });
          Profile.BusinessServiceinfo.forEach(selement => {
            sselement.Child.forEach(element => {
              if (element.id == selement.serviceid) {
                element.checked = true;
                element.price = selement.serviceprice;
              }
            });
          });
        });

      }, 1000);
    }
  }

  ChangeinServiceTime() {

  }

  SaveBusiness() {

    if (!this.lists.terms) {
      this.common.BasicAlert("Alert !", "", "Please first accept terms and conditions.")
    } else {
      this.common.presentLoader();


      this.lists.Servicetime = this.lists.Servicetime.filter(i => i.checked == true);
      this.Businessform1.value.Service_Week = this.lists.Servicetime;
      this.lists.ub_type = [];
      this.lists.ub_service = [];

      this.lists.ServiceStep.forEach(element => {
        if (element.checked) {
          this.lists.ub_type.push({ b_type: element.id, b_id: 0 });
        }
        if (element.Child.length > 0) {
          element.Child.forEach(result => {
            if (result.checked) {
              this.lists.ub_service.push({ service: result.name, service_hi: result.name_hi, serviceid: result.id, serviceprice: result.price || 0 });
            }
          });
        }
      });
      this.Businessform1.value.Services = this.lists.ub_service;
      this.Businessform1.value.Service_Type = this.lists.ub_type;
      //New Keys-------------------------------------------------------
      this.Businessform1.value.brand_ids = this.PreferedBrands;
      this.Businessform1.value.facility_ids = this.PreferedSelectedFacilites;
      this.Businessform1.value.fb_link = this.Other_Info.facebook;
      this.Businessform1.value.instagram_link = this.Other_Info.instagram;
      this.Businessform1.value.youtube_link = this.Other_Info.youtube;
      //this.Businessform1.value.linkedin_link = this.Other_Info.linkedin_link;
      this.Businessform1.value.website = this.Other_Info.website;
      this.Businessform1.value.salon_banner = this.Banner_Link;
      //------------------------------------------------------------------------
      let ArrayLinks = [];
      if (this.AddonImages.AddOn1) { ArrayLinks.push(this.AddonImages.AddOn1) }
      if (this.AddonImages.AddOn2) { ArrayLinks.push(this.AddonImages.AddOn2) }
      if (this.AddonImages.AddOn3) { ArrayLinks.push(this.AddonImages.AddOn3) }
      if (this.AddonImages.AddOn4) { ArrayLinks.push(this.AddonImages.AddOn4) }
      if (ArrayLinks.length != 0) { this.Businessform1.value.additional_images = ArrayLinks; }
      else {
        if (this.BOS.additional_images) this.Businessform1.value.additional_images = this.BOS.additional_images;
      }
      //-----------------------------------------------------------------

      if (this.lists.editprofile) {
        this.Businessform1.value.id = this.lists.userid;
        this.Businessform1.value.b_id = new UserPipe().transform('b_id');
      }
      this.common.PostMethod("UserRegistration", this.Businessform1.value).then((res: any) => {
        if (res.status.Status == 1) {
          this.common.presentToast(res.Message, 4000);
          if (this.lists.editprofile) {
            this.common.dismissLoader();
            this.common.PostMethod("GetProfile", { Id: this.Businessform1.value.id }).then((res: any) => {
              console.log(res);
              localStorage.setItem("UserProfile", JSON.stringify(res.Data));
            });
            this.common.presentToast(res.status.Message, 4000);
            this.common.PageGoto("Root", "");
          } else {
            this.common.PostMethod("login", { mobile: this.Businessform1.value.mobile, password: this.Businessform1.value.password, token: localStorage.getItem("FCMToken") }).then((res: any) => {
              if (res.Status == 1) {
                this.common.presentToast(res.Message, 4000);
                localStorage.setItem("UserId", res.Data.id);
                localStorage.setItem("UserProfile", JSON.stringify(res.Data));
                localStorage.setItem("UserType", res.Data.usertype);
                localStorage.setItem("language", res.Data.language);
                this.events.publish('ReloadDashboard');
                this.common.dismissLoader();
                this.common.PageGoto("Root", "");
              } else {
                this.common.dismissLoader();
                this.common.presentToast(res.status.Message, 4000);
              }

            });
          }
        } else {
          this.common.dismissLoader();
          this.common.presentToast(res.status.Message, 4000);
        }
      });
    }

  }

  async checkbusinessname() {
    const alert = await this.common.alertController.create({
      header: 'Confirm!',
      message: "Are your sure! Your name <b>" + this.Businessform1.value.name + "</b>  is your business name ? If not then please update it.",
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.lists.nameapprove = true;
          }
        }
      ]
    });

    await alert.present();
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 40,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true,
      //Settings Custom Logo Size--------------------------
      targetWidth: 300,
      targetHeight: 300,
    }
    this.camera.getPicture(options).then((imageData) => {
      this.lists.Image = 'data:image/jpeg;base64,' + imageData;
      this.common.PostMethod("FileUpload", { file: this.lists.Image }).then((res: any) => {
        console.log(res);
        this.Businessform1.controls['logo'].setValue(res.file);
      }).catch(y => {
        console.log(y);
      });
    }, (err) => {
      // Handle error
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


  async SelectBusinessImage(Image_Type) {
    const actionSheet = await this.common.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.GetImage_Upload(this.camera.PictureSourceType.PHOTOLIBRARY, Image_Type);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.GetImage_Upload(this.camera.PictureSourceType.CAMERA, Image_Type);
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


  GetImage_Upload(sourceType, Image_Type) {
    let env = this;
    const options: CameraOptions = {
      quality: 50,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true,
      targetWidth: 400,
      targetHeight: 220,
    }
    env.camera.getPicture(options).then((imageData) => {
      if (Image_Type == 'Banner') {
        env.lists.Banner = 'data:image/jpeg;base64,' + imageData;
      }
      else {
        env.lists[Image_Type] = 'data:image/jpeg;base64,' + imageData;
      }

      let TempImage = 'data:image/jpeg;base64,' + imageData;

      env.common.PostMethod("FileUpload", { file: TempImage }).then((res: any) => {
        console.log(res);
        if (Image_Type == 'Banner') {
          env.Banner_Link = res.file;
        } else {
          env.AddonImages[Image_Type] = res.file;
        }

      }).catch(y => {
        console.log(y);
      });
    }, (err) => {
      // Handle error
    });
  }


  async EditBusinessImage(Image_Type) {
    const actionSheet = await this.common.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.EditImage_Upload(this.camera.PictureSourceType.PHOTOLIBRARY, Image_Type);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.EditImage_Upload(this.camera.PictureSourceType.CAMERA, Image_Type);
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


  EditImage_Upload(sourceType, Image_Type) {
    let env = this;
    const options: CameraOptions = {
      quality: 50,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true,
      targetWidth: 400,
      targetHeight: 220,
    }
    env.camera.getPicture(options).then((imageData) => {
      if (Image_Type == 'Banner') {
        env.lists.Banner = 'data:image/jpeg;base64,' + imageData;
      }
      else {
        env.lists[Image_Type] = 'data:image/jpeg;base64,' + imageData;
      }

      let TempImage = 'data:image/jpeg;base64,' + imageData;

      env.common.PostMethod("FileUpload", { file: TempImage }).then((res: any) => {
        console.log(res);
        if (Image_Type == 'Banner') {
          env.Banner_Link = res.file;
        } else {
          env.AddonImages[Image_Type] = res.file;
        }

      }).catch(y => {
        console.log(y);
      });
    }, (err) => {
      // Handle error
    });
  }


  checkboxchange(ev) {
    if (ev.checked) {
      ev.Child.forEach(element => {
        element.checked = true;
      });
    } else {
      ev.Child.forEach(element => {
        element.checked = false;
      });
    }
  }

  CheckAll(ev) {
    let value = ev.detail.checked;
    this.lists.Servicetime.forEach(element => {
      element.checked = value;
    });
  }

  CancelEdit() {
    this.navCtrl.back();
  }

  FacilityChecked(FacilityId, e) {
    if(e.currentTarget.checked){}
    var FacilityIdVar: any = parseInt(FacilityId);
    if (this.PreferedSelectedFacilites.includes(FacilityIdVar) || this.PreferedSelectedFacilites.includes(FacilityId)) {
      const index = this.PreferedSelectedFacilites.indexOf(FacilityIdVar);
      if (index > -1) {
        this.PreferedSelectedFacilites.splice(index, 1);
      }
    } else {
      if(e.currentTarget.checked){
        this.PreferedSelectedFacilites.push(FacilityIdVar);
      }
      
    }

    console.log(this.PreferedSelectedFacilites, 'FacilityIds selected');
  }

  BrandChecked(BrandId, e) {
    if(e.currentTarget.checked){}
    var BrandIdVar: any = parseInt(BrandId);
    if (this.PreferedBrands.includes(BrandIdVar) || this.PreferedBrands.includes(BrandId)) {
      const index = this.PreferedBrands.indexOf(BrandIdVar);
      if (index > -1) {
        this.PreferedBrands.splice(index, 1);
      }
    } else {
      if(e.currentTarget.checked){
      this.PreferedBrands.push(BrandIdVar);
      }
    }

    console.log(this.PreferedBrands, 'PreferedBrands selected');
  }



  Readterms() {
    this.common.PageGoto('Forward', 'terms');
  }

  CheckDateValidate(ev) {
    let sdate = new Date(ev.detail.value);
    let today = new Date();
    if (sdate > today) {
      this.Businessform1.controls["dob"].setValue("");
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
