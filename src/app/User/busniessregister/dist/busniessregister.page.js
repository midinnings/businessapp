"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.BusniessregisterPage = void 0;
var user_pipe_1 = require("./../../Pipes/pipe/user.pipe");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var stepper_1 = require("@angular/cdk/stepper");
var moment = require("moment");
var BusniessregisterPage = /** @class */ (function () {
    function BusniessregisterPage(events, zone, geolocation, navCtrl, camera, file, common, fb, router) {
        var _this = this;
        this.events = events;
        this.zone = zone;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.file = file;
        this.common = common;
        this.fb = fb;
        this.router = router;
        this.lists = {};
        this.futureDate = moment(new Date()).add(15, 'days').format("YYYY-MM-DD");
        this.datePickerObj = {
            inputDate: new Date(),
            // fromDate: new Date(), // default null
            toDate: new Date(this.futureDate),
            showTodayButton: false,
            closeOnSelect: true,
            disableWeekDays: [],
            mondayFirst: true,
            setLabel: 'S',
            todayLabel: 'T',
            closeLabel: 'Cancel',
            titleLabel: 'Select a Date',
            monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
            weeksList: ["S", "M", "T", "W", "T", "F", "S"],
            dateFormat: 'YYYY-MM-DD',
            clearButton: false,
            momentLocale: 'en-US',
            yearInAscending: true,
            btnCloseSetInReverse: true,
            btnProperties: {
                expand: 'block',
                fill: '',
                size: '',
                disabled: '',
                strong: '',
                color: '' // Default ''
            },
            arrowNextPrev: {
                nextArrowSrc: 'assets/images/arrow_right.svg',
                prevArrowSrc: 'assets/images/arrow_left.svg'
            },
            highlightedDates: [
                { date: new Date('2019-09-10'), color: '#ee88bf', fontColor: '#fff' },
                { date: new Date('2019-09-12'), color: '#50f2b1', fontColor: '#fff' }
            ],
            isSundayHighlighted: {
                fontColor: '#ee88bf' // Default null
            } // Default {}
        };
        this.autocompleteItems = [];
        this.Facilities_List = [];
        this.GetBrandList = [];
        this.Other_Info = {};
        this.PreferedSelectedFacilites = [];
        this.PreferedBrands = [];
        this.AddonImages = {};
        this.Edit_BOS = false;
        this.BOS = {};
        this.ShowTerms = true;
        this.showzipmsg = false;
        this.Initalization();
        this.GetStatelist();
        var env = this;
        env.GetSubServiceCategory();
        setTimeout(function () {
            env.GetServiceCategory();
        }, 8000);
        this.lists.ServiceStep = [];
        this.BOS.facility_ids = [];
        this.BOS.brand_ids = [];
        //Get Facilites List-------------
        this.common.GetMethod("GetFacilitiesList").then(function (res) {
            console.log(res);
            _this.Facilities_List = res.Data;
        })["catch"](function (y) {
            console.log(y);
        });
        //Get Brands List----------------
        this.common.GetMethod("GetBrandList").then(function (res) {
            console.log(res);
            _this.GetBrandList = res.Data;
        })["catch"](function (y) {
            console.log(y);
        });
    }
    BusniessregisterPage.prototype.ngOnInit = function () {
        var _this = this;
        var env = this;
        this.Businessform1 = this.fb.group({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            mobile: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(10)])),
            email: new forms_1.FormControl('', forms_1.Validators.compose([
                forms_1.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            address: new forms_1.FormControl('', forms_1.Validators.required),
            address1: new forms_1.FormControl('', forms_1.Validators.required),
            landmark: new forms_1.FormControl(),
            pincode: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(6), forms_1.Validators.minLength(6)])),
            pincode1: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(6)])),
            stateid: new forms_1.FormControl('', forms_1.Validators.required),
            cityid: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl(),
            dob: new forms_1.FormControl(),
            logo: new forms_1.FormControl(),
            placeid: new forms_1.FormControl(),
            geolocation: new forms_1.FormControl(),
            usertype: new forms_1.FormControl(),
            salon_type: new forms_1.FormControl('', forms_1.Validators.required)
        });
        this.router.queryParams.subscribe(function (res) {
            if (res.edit) {
                _this.lists.edit = res.edit;
                var Profile_1 = JSON.parse(localStorage.getItem("UserProfile"));
                if (res.language) {
                    localStorage.setItem("language", res.language);
                    _this.lists.language = res.language;
                }
                setTimeout(function () {
                    env.SetEditValue(Profile_1);
                }, 1000);
            }
            else if (res.searchaddress) {
                _this.Businessform1.controls['address1'].setValue(res.address);
                _this.Businessform1.controls['pincode1'].setValue(res.pincode);
                _this.Businessform1.controls['geolocation'].setValue(JSON.stringify({ lat: res.latitude, lng: res.longitude }));
                _this.Businessform1.controls['placeid'].setValue(res.palceid);
            }
            else {
                if (res.password) {
                    _this.Businessform1.controls['password'].setValue(res.password);
                    _this.Businessform1.controls['mobile'].setValue(res.mobile);
                    _this.Businessform1.controls['name'].setValue(res.name);
                    _this.Businessform1.controls['usertype'].setValue(res.usertype);
                    _this.lists.usertype = res.usertype;
                }
            }
        });
        if (localStorage.getItem('language'))
            this.lists.language = localStorage.getItem('language');
    };
    BusniessregisterPage.prototype.SetEditValue = function (ev) {
        var _this = this;
        this.lists.terms = true;
        this.ShowTerms = false;
        this.common.presentRuntime('Please wait, getting business profile..');
        var env = this;
        if (ev.logo) {
            this.lists.Image = ev.logo;
        }
        this.lists.editprofile = true;
        this.lists.userid = ev.id;
        this.lists.usertype = ev.usertype;
        var Profile = JSON.parse(localStorage.getItem("UserProfile"));
        this.Businessform1.patchValue(ev);
        this.Businessform1.controls["mobile"].setValue(ev.mobileno);
        var Address = ev.Businessaddressinfo;
        this.Businessform1.controls["address"].setValue(Address.address);
        this.Businessform1.controls["address1"].setValue(Address.address1);
        this.Businessform1.controls["pincode1"].setValue(Address.pincode1);
        this.GetCitylist(Address.stateid);
        setTimeout(function () {
            _this.Businessform1.controls["stateid"].setValue(Address.stateid);
            setTimeout(function () {
                _this.Businessform1.controls["cityid"].setValue(Address.cityid);
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
        var Weeks = ev.Businessinfo.Timing;
        //------Setting Up Other Values------------------------------------
        if (ev.BusinessOtherServices) {
            this.BOS = ev.BusinessOtherServices;
            this.Other_Info = this.BOS;
            debugger;
            if (this.BOS.facility_ids) {
                this.PreferedSelectedFacilites = this.BOS.facility_ids.split(',').map(Number);
            }
            if (this.BOS.brand_ids) {
                this.PreferedBrands = this.BOS.brand_ids.split(',').map(Number);
            }
            this.Banner_Link = this.BOS.salon_banner;
            this.lists.Banner = this.common.Url + 'Files/' + this.BOS.salon_banner;
            if (this.BOS.additional_images) {
                var Addon_Array = this.BOS.additional_images.split(",");
                if (Addon_Array[0])
                    this.lists.AddOn1 = this.common.Url + 'Files/' + Addon_Array[0];
                if (Addon_Array[1])
                    this.lists.AddOn2 = this.common.Url + 'Files/' + Addon_Array[1];
                if (Addon_Array[2])
                    this.lists.AddOn3 = this.common.Url + 'Files/' + Addon_Array[2];
                if (Addon_Array[3])
                    this.lists.AddOn4 = this.common.Url + 'Files/' + Addon_Array[3];
                this.lists.AddonImages = this.BOS.additional_images;
            }
            this.Edit_BOS = true;
            //----------------------
            setTimeout(function () {
                console.log('binding facilties and brand ids');
                env.Facilities_List.forEach(function (element, i) {
                    if (env.BOS.facility_ids) {
                        var FacilityArr = env.BOS.facility_ids.split(',');
                        console.log(FacilityArr, 'FacilityArr');
                        if (FacilityArr.includes(element.id) || FacilityArr.includes(JSON.stringify(element.id))) {
                            if (!_this.PreferedSelectedFacilites.includes(element.id)) {
                                _this.PreferedSelectedFacilites.push(parseInt(element.id));
                            }
                            env.Facilities_List[i].selection = true;
                            console.log(env.Facilities_List[i].selection, 'true now facilit');
                        }
                    }
                });
                env.GetBrandList.forEach(function (element, i) {
                    if (env.BOS.brand_ids) {
                        var BrandsArr = env.BOS.brand_ids.split(',');
                        if (BrandsArr.includes(element.id) || BrandsArr.includes(JSON.stringify(element.id))) {
                            env.GetBrandList[i].selection = true;
                            if (!_this.PreferedBrands.includes(element.id)) {
                                _this.PreferedBrands.push(parseInt(element.id));
                            }
                        }
                    }
                });
            }, 4000);
        }
        setTimeout(function () {
            _this.lists.Servicetime = Weeks;
            _this.lists.Servicetime.forEach(function (element) {
                element.checked = true;
            });
        }, 1000);
        setTimeout(function () {
            env.common.dismissLoader();
        }, 10000);
    };
    BusniessregisterPage.prototype.Initalization = function () {
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
    };
    BusniessregisterPage.prototype.GetStatelist = function () {
        var _this = this;
        this.common.PostMethod("GetStates", { Id: 101 }).then(function (res) {
            _this.lists.Statelist = res.Data || [];
        });
    };
    BusniessregisterPage.prototype.GetCitylist = function (ev) {
        var _this = this;
        console.log(ev);
        this.common.PostMethod("GetCity", { Id: ev }).then(function (res) {
            _this.lists.Citylist = res.Data || [];
        });
    };
    BusniessregisterPage.prototype.GetServiceCategory = function () {
        var _this = this;
        this.common.PostMethod("GetService", { file: "service_category", name: "serviceid", value: null }).then(function (res) {
            _this.lists.Servicelist = res.Data || [];
            if (_this.lists.editprofile) {
                var Profile = JSON.parse(localStorage.getItem("UserProfile"));
                _this.common.PostMethod("GetServiceInfo", { ids: Profile.BusinessService }).then(function (res) {
                    _this.lists.Servicelist.forEach(function (element) {
                        res.Data.forEach(function (selement) {
                            if (element.id == selement) {
                                element.selection = true;
                            }
                        });
                    });
                });
            }
        });
    };
    BusniessregisterPage.prototype.GetSubServiceCategory = function () {
        var _this = this;
        this.common.PostMethod("GetSubService", {}).then(function (res) {
            _this.lists.SubServicelist = res.Data || [];
        });
    };
    BusniessregisterPage.prototype.GetServiceStep = function (ev) {
        var _this = this;
        if (ev.selection) {
            var avail_1 = false;
            this.lists.ServiceStep.forEach(function (element, index) {
                if (element.id == ev.id) {
                    avail_1 = true;
                    _this.lists.ServiceStep.splice(index, 1);
                }
            });
            if (!avail_1) {
                var sublist_1 = {};
                this.lists.Servicelist.forEach(function (element) {
                    if (element.id == ev.id) {
                        sublist_1.name = element.servicename;
                        sublist_1.name_hi = element.servicename_hi;
                        sublist_1.id = element.id;
                    }
                });
                var child_1 = [];
                this.lists.SubServicelist.forEach(function (element) {
                    if (element.serviceid == ev.id) {
                        child_1.push({ name: element.subservice, name_hi: element.subservice_hi, price: element.price, id: element.id });
                    }
                });
                sublist_1.Child = child_1;
                this.lists.ServiceStep.push(sublist_1);
            }
        }
        else {
            this.lists.ServiceStep.forEach(function (element, index) {
                if (element.id == ev.id) {
                    _this.lists.ServiceStep.splice(index, 1);
                }
            });
        }
        if (this.lists.editprofile) {
            setTimeout(function () {
                var Profile = JSON.parse(localStorage.getItem("UserProfile"));
                _this.lists.ServiceStep.forEach(function (sselement) {
                    sselement.checked = true;
                    sselement.Child.forEach(function (element) {
                        element.checked = false;
                    });
                    Profile.BusinessServiceinfo.forEach(function (selement) {
                        sselement.Child.forEach(function (element) {
                            if (element.id == selement.serviceid) {
                                element.checked = true;
                                element.price = selement.serviceprice;
                            }
                        });
                    });
                });
            }, 1000);
        }
    };
    BusniessregisterPage.prototype.ChangeinServiceTime = function () {
    };
    BusniessregisterPage.prototype.SaveBusiness = function () {
        var _this = this;
        if (!this.lists.terms) {
            this.common.BasicAlert("Alert !", "", "Please first accept terms and conditions.");
        }
        else {
            this.common.presentLoader();
            this.lists.Servicetime = this.lists.Servicetime.filter(function (i) { return i.checked == true; });
            this.Businessform1.value.Service_Week = this.lists.Servicetime;
            this.lists.ub_type = [];
            this.lists.ub_service = [];
            this.lists.ServiceStep.forEach(function (element) {
                if (element.checked) {
                    _this.lists.ub_type.push({ b_type: element.id, b_id: 0 });
                }
                if (element.Child.length > 0) {
                    element.Child.forEach(function (result) {
                        if (result.checked) {
                            _this.lists.ub_service.push({ service: result.name, service_hi: result.name_hi, serviceid: result.id, serviceprice: result.price || 0 });
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
            var ArrayLinks = [];
            if (this.AddonImages.AddOn1) {
                ArrayLinks.push(this.AddonImages.AddOn1);
            }
            if (this.AddonImages.AddOn2) {
                ArrayLinks.push(this.AddonImages.AddOn2);
            }
            if (this.AddonImages.AddOn3) {
                ArrayLinks.push(this.AddonImages.AddOn3);
            }
            if (this.AddonImages.AddOn4) {
                ArrayLinks.push(this.AddonImages.AddOn4);
            }
            if (ArrayLinks.length != 0) {
                this.Businessform1.value.additional_images = ArrayLinks;
            }
            else {
                if (this.BOS.additional_images)
                    this.Businessform1.value.additional_images = this.BOS.additional_images;
            }
            //-----------------------------------------------------------------
            if (this.lists.editprofile) {
                this.Businessform1.value.id = this.lists.userid;
                this.Businessform1.value.b_id = new user_pipe_1.UserPipe().transform('b_id');
            }
            this.common.PostMethod("UserRegistration", this.Businessform1.value).then(function (res) {
                if (res.status.Status == 1) {
                    _this.common.presentToast(res.Message, 4000);
                    if (_this.lists.editprofile) {
                        _this.common.dismissLoader();
                        _this.common.PostMethod("GetProfile", { Id: _this.Businessform1.value.id }).then(function (res) {
                            console.log(res);
                            localStorage.setItem("UserProfile", JSON.stringify(res.Data));
                        });
                        _this.common.presentToast(res.status.Message, 4000);
                        _this.common.PageGoto("Root", "");
                    }
                    else {
                        _this.common.PostMethod("login", { mobile: _this.Businessform1.value.mobile, password: _this.Businessform1.value.password, token: localStorage.getItem("FCMToken") }).then(function (res) {
                            if (res.Status == 1) {
                                _this.common.presentToast(res.Message, 4000);
                                localStorage.setItem("UserId", res.Data.id);
                                localStorage.setItem("UserProfile", JSON.stringify(res.Data));
                                localStorage.setItem("UserType", res.Data.usertype);
                                localStorage.setItem("language", res.Data.language);
                                _this.events.publish('ReloadDashboard');
                                _this.common.dismissLoader();
                                _this.common.PageGoto("Root", "");
                            }
                            else {
                                _this.common.dismissLoader();
                                _this.common.presentToast(res.status.Message, 4000);
                            }
                        });
                    }
                }
                else {
                    _this.common.dismissLoader();
                    _this.common.presentToast(res.status.Message, 4000);
                }
            });
        }
    };
    BusniessregisterPage.prototype.checkbusinessname = function () {
        return __awaiter(this, void 0, void 0, function () {
            var env, alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        env = this;
                        return [4 /*yield*/, this.common.alertController.create({
                                header: 'Confirm!',
                                message: "Are your sure! Your name <b>" + this.Businessform1.value.name + "</b>  is your business name ? If not then please update it.",
                                buttons: [
                                    {
                                        text: 'Confirm',
                                        handler: function () {
                                            _this.lists.nameapprove = true;
                                            env.myStepper.next();
                                        }
                                    },
                                    {
                                        text: 'Cancel',
                                        handler: function () {
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BusniessregisterPage.prototype.pickImage = function (sourceType) {
        var _this = this;
        var options = {
            quality: 40,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true,
            //Settings Custom Logo Size--------------------------
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.lists.Image = 'data:image/jpeg;base64,' + imageData;
            _this.common.PostMethod("FileUpload", { file: _this.lists.Image }).then(function (res) {
                console.log(res);
                _this.Businessform1.controls['logo'].setValue(res.file);
            })["catch"](function (y) {
                console.log(y);
            });
        }, function (err) {
            // Handle error
        });
    };
    BusniessregisterPage.prototype.selectImage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.common.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.CAMERA);
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BusniessregisterPage.prototype.SelectBusinessImage = function (Image_Type) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.common.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.GetImage_Upload(_this.camera.PictureSourceType.PHOTOLIBRARY, Image_Type);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.GetImage_Upload(_this.camera.PictureSourceType.CAMERA, Image_Type);
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BusniessregisterPage.prototype.GetImage_Upload = function (sourceType, Image_Type) {
        var env = this;
        var options = {
            quality: 50,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true,
            targetWidth: 400,
            targetHeight: 220
        };
        env.camera.getPicture(options).then(function (imageData) {
            if (Image_Type == 'Banner') {
                env.lists.Banner = 'data:image/jpeg;base64,' + imageData;
            }
            else {
                env.lists[Image_Type] = 'data:image/jpeg;base64,' + imageData;
            }
            var TempImage = 'data:image/jpeg;base64,' + imageData;
            env.common.PostMethod("FileUpload", { file: TempImage }).then(function (res) {
                console.log(res);
                if (Image_Type == 'Banner') {
                    env.Banner_Link = res.file;
                }
                else {
                    env.AddonImages[Image_Type] = res.file;
                }
            })["catch"](function (y) {
                console.log(y);
            });
        }, function (err) {
            // Handle error
        });
    };
    BusniessregisterPage.prototype.EditBusinessImage = function (Image_Type) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.common.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.EditImage_Upload(_this.camera.PictureSourceType.PHOTOLIBRARY, Image_Type);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.EditImage_Upload(_this.camera.PictureSourceType.CAMERA, Image_Type);
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BusniessregisterPage.prototype.EditImage_Upload = function (sourceType, Image_Type) {
        var env = this;
        var options = {
            quality: 50,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true,
            targetWidth: 400,
            targetHeight: 220
        };
        env.camera.getPicture(options).then(function (imageData) {
            if (Image_Type == 'Banner') {
                env.lists.Banner = 'data:image/jpeg;base64,' + imageData;
            }
            else {
                env.lists[Image_Type] = 'data:image/jpeg;base64,' + imageData;
            }
            var TempImage = 'data:image/jpeg;base64,' + imageData;
            env.common.PostMethod("FileUpload", { file: TempImage }).then(function (res) {
                console.log(res);
                if (Image_Type == 'Banner') {
                    env.Banner_Link = res.file;
                }
                else {
                    env.AddonImages[Image_Type] = res.file;
                }
            })["catch"](function (y) {
                console.log(y);
            });
        }, function (err) {
            // Handle error
        });
    };
    BusniessregisterPage.prototype.checkboxchange = function (ev) {
        if (ev.checked) {
            ev.Child.forEach(function (element) {
                element.checked = true;
            });
        }
        else {
            ev.Child.forEach(function (element) {
                element.checked = false;
            });
        }
    };
    BusniessregisterPage.prototype.CheckAll = function (ev) {
        var value = ev.detail.checked;
        this.lists.Servicetime.forEach(function (element) {
            element.checked = value;
        });
    };
    BusniessregisterPage.prototype.CancelEdit = function () {
        this.navCtrl.back();
    };
    BusniessregisterPage.prototype.FacilityChecked = function (FacilityId, e) {
        if (e.currentTarget.checked) { }
        var FacilityIdVar = parseInt(FacilityId);
        if (this.PreferedSelectedFacilites.includes(FacilityIdVar) || this.PreferedSelectedFacilites.includes(FacilityId)) {
            var index = this.PreferedSelectedFacilites.indexOf(FacilityIdVar);
            if (index > -1) {
                this.PreferedSelectedFacilites.splice(index, 1);
            }
        }
        else {
            if (e.currentTarget.checked) {
                this.PreferedSelectedFacilites.push(FacilityIdVar);
            }
        }
        console.log(this.PreferedSelectedFacilites, 'FacilityIds selected');
    };
    BusniessregisterPage.prototype.BrandChecked = function (BrandId, e) {
        if (e.currentTarget.checked) { }
        var BrandIdVar = parseInt(BrandId);
        if (this.PreferedBrands.includes(BrandIdVar) || this.PreferedBrands.includes(BrandId)) {
            var index = this.PreferedBrands.indexOf(BrandIdVar);
            if (index > -1) {
                this.PreferedBrands.splice(index, 1);
            }
        }
        else {
            if (e.currentTarget.checked) {
                this.PreferedBrands.push(BrandIdVar);
            }
        }
        console.log(this.PreferedBrands, 'PreferedBrands selected');
    };
    BusniessregisterPage.prototype.Readterms = function () {
        this.common.PageGoto('Forward', 'terms');
    };
    BusniessregisterPage.prototype.CheckDateValidate = function (ev) {
        var sdate = new Date(ev.detail.value);
        var today = new Date();
        if (sdate > today) {
            this.Businessform1.controls["dob"].setValue("");
            this.common.BasicAlert("Alert !", "", "Please do not Select Future Date.");
        }
    };
    BusniessregisterPage.prototype.numberOnlyValidation = function (event) {
        var pattern = /[0-9.,]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.target.value.length != 6) {
            this.showzipmsg = true;
        }
        else {
            this.showzipmsg = false;
        }
        if (!pattern.test(inputChar) || event.target.value.length > 5) {
            event.preventDefault();
        }
        else {
        }
    };
    __decorate([
        core_1.ViewChild('stepper', { static: false })
    ], BusniessregisterPage.prototype, "myStepper");
    BusniessregisterPage = __decorate([
        core_1.Component({
            selector: 'app-busniessregister',
            templateUrl: './busniessregister.page.html',
            styleUrls: ['./busniessregister.page.scss'],
            providers: [{
                    provide: stepper_1.MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                }]
        })
    ], BusniessregisterPage);
    return BusniessregisterPage;
}());
exports.BusniessregisterPage = BusniessregisterPage;
