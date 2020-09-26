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
exports.StylistregisterPage = void 0;
var user_pipe_1 = require("./../../Pipes/pipe/user.pipe");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var stepper_1 = require("@angular/cdk/stepper");
var StylistregisterPage = /** @class */ (function () {
    function StylistregisterPage(fcmmessage, navCtrl, router, camera, route, valid, common, menu, Fb) {
        this.fcmmessage = fcmmessage;
        this.navCtrl = navCtrl;
        this.router = router;
        this.camera = camera;
        this.route = route;
        this.valid = valid;
        this.common = common;
        this.menu = menu;
        this.Fb = Fb;
        this.lists = {};
        this.datePickerObj = {
            inputDate: new Date(),
            // fromDate: new Date(), // default null
            toDate: new Date(),
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
        this.lists.Statelist = [];
        this.lists.Citylist = [];
        this.lists.Skilllist = [];
        this.lists.business = [];
        this.GetStatelist();
        this.Initalization();
        this.GetDroplist();
    }
    StylistregisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.stylistregister = this.Fb.group({
            name: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            mobile: new forms_1.FormControl(),
            yourself: new forms_1.FormControl(),
            stateid: new forms_1.FormControl('', forms_1.Validators.required),
            cityid: new forms_1.FormControl('', forms_1.Validators.required),
            address: new forms_1.FormControl('', forms_1.Validators.required),
            stateid1: new forms_1.FormControl('', forms_1.Validators.required),
            cityid1: new forms_1.FormControl('', forms_1.Validators.required),
            address1: new forms_1.FormControl('', forms_1.Validators.required),
            dob: new forms_1.FormControl(''),
            landmark: new forms_1.FormControl(),
            pincode: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(6), forms_1.Validators.minLength(6)])),
            landmark1: new forms_1.FormControl(),
            pincode1: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(6), forms_1.Validators.minLength(6)])),
            qualification: new forms_1.FormControl(),
            university: new forms_1.FormControl(),
            emptype: new forms_1.FormControl(),
            indtype: new forms_1.FormControl(),
            experience: new forms_1.FormControl(),
            skills: new forms_1.FormControl(),
            salary: new forms_1.FormControl(),
            usertype: new forms_1.FormControl(1),
            language: '',
            password: '',
            terms: '',
            logo: '',
            employer: '',
            b_id: ''
        });
        this.route.queryParams.subscribe(function (res) {
            if (res.edit) {
                _this.lists.edit = true;
                _this.stylistregister.controls['usertype'].setValue(1);
                _this.stylistregister.controls['language'].setValue("English");
                var Password = "msz123";
                _this.stylistregister.controls['password'].setValue(Password);
                var profile = new user_pipe_1.UserPipe().transform('Businessinfo');
                _this.stylistregister.controls["employer"].setValue(profile.name);
                _this.stylistregister.controls["employer"].disable();
                _this.stylistregister.controls["b_id"].setValue(profile.id);
            }
            else if (res.useredit) {
                _this.lists.useredit = true;
                // this.stylistregister.patchValue(res);
                _this.stylistregister.controls['name'].setValue(res.name);
                _this.stylistregister.controls['mobile'].setValue(res.mobileno);
                _this.stylistregister.controls['email'].setValue(res.email);
                _this.stylistregister.controls['dob'].setValue(res.dob);
                _this.stylistregister.controls['password'].setValue(res.password);
                _this.stylistregister.controls['usertype'].setValue(1);
                _this.stylistregister.controls['language'].setValue(res.language);
                // this.stylistregister.controls['logo'].setValue(res.logo);
                if (res.logo) {
                    _this.lists.Image = _this.common.Url + 'Files/' + res.logo;
                }
                _this.stylistregister.controls['address'].setValue(res.addressinfo.address);
                _this.stylistregister.controls['landmark'].setValue(res.addressinfo.landmark);
                _this.stylistregister.controls['pincode'].setValue(res.addressinfo.pincode);
                _this.GetCitylist1(res.addressinfo.stateid1);
                _this.GetCitylist(res.addressinfo.stateid);
                setTimeout(function () {
                    _this.stylistregister.controls['stateid'].setValue(res.addressinfo.stateid);
                    _this.stylistregister.controls['stateid1'].setValue(res.addressinfo.stateid1);
                    setTimeout(function () {
                        _this.stylistregister.controls['cityid'].setValue(res.addressinfo.cityid);
                        _this.stylistregister.controls['cityid1'].setValue(res.addressinfo.cityid1);
                        _this.stylistregister.controls['emptype'].setValue(res.OtherInfo.employertype);
                        _this.stylistregister.controls['indtype'].setValue(res.OtherInfo.industrytype);
                        _this.stylistregister.controls['experience'].setValue(String(res.OtherInfo.eperience));
                        _this.stylistregister.controls['skills'].setValue(JSON.parse(res.OtherInfo.skill));
                        _this.stylistregister.controls['qualification'].setValue(res.OtherInfo.qualification);
                    }, 2000);
                }, 2000);
                _this.stylistregister.controls['address1'].setValue(res.addressinfo.address1);
                _this.stylistregister.controls['landmark1'].setValue(res.addressinfo.landmark1);
                _this.stylistregister.controls['pincode1'].setValue(res.addressinfo.pincode1);
                _this.stylistregister.controls['b_id'].setValue(res.b_id);
                _this.stylistregister.controls['employer'].setValue(res.Businessinfo.name);
                _this.lists.presentbid = res.b_id;
                // this.stylistregister.controls['employer'].disable();
                _this.stylistregister.controls['salary'].setValue(res.OtherInfo.currentsalary);
                _this.stylistregister.controls['yourself'].setValue(res.about);
                _this.lists.userid = res.id;
            }
            else {
                _this.stylistregister.controls['name'].setValue(res.name);
                _this.stylistregister.controls['mobile'].setValue(res.mobile);
                _this.stylistregister.controls['password'].setValue(res.password);
                _this.stylistregister.controls['usertype'].setValue(1);
                _this.stylistregister.controls['language'].setValue(res.language);
            }
        });
        this.lists.language = localStorage.getItem("language");
    };
    StylistregisterPage.prototype.CreateAccount = function () {
        var _this = this;
        if (!this.stylistregister.valid) {
            this.common.dismissLoader();
            this.common.presentToast("Please Check All the Mandate Fields(*).", 4000);
        }
        else if (!this.lists.terms) {
            this.common.BasicAlert("Alert !", "", "Please first accept terms and conditions.");
        }
        else {
            this.common.presentLoader();
            this.stylistregister.controls['skills'].setValue(JSON.stringify(this.stylistregister.value.skills));
            if (this.lists.edit) {
                var Password = "msz123" + this.stylistregister.value.mobile.substr(this.stylistregister.value.mobile.length - 4);
                this.stylistregister.controls['password'].setValue(Password);
            }
            if (this.lists.useredit) {
                this.stylistregister.value.id = this.lists.userid;
                var profile = JSON.parse(localStorage.getItem("UserProfile"));
                profile.logo = this.stylistregister.value.logo;
                profile.about = this.stylistregister.value.yourself;
                localStorage.setItem("UserProfile", JSON.stringify(profile));
            }
            if (this.lists.useredit && (parseInt(this.lists.presentbid) != parseInt(this.stylistregister.value.b_id))) {
                this.common.dismissLoader();
                this.common.Confirm("Are you sure to change your employer?", function (res) {
                    if (res) {
                        _this.stylistregister.value.changeemployeer = 1;
                        _this.stylistregister.value.oldbid = _this.lists.presentbid;
                        _this.common.presentLoader();
                        _this.Register();
                    }
                });
            }
            else {
                this.Register();
            }
        }
    };
    StylistregisterPage.prototype.Register = function () {
        var _this = this;
        this.common.PostMethod("UserRegistration", this.stylistregister.value).then(function (res) {
            if (res.status.Status == 1) {
                _this.common.presentToast(res.Message, 4000);
                _this.common.dismissLoader();
                if (_this.lists.edit) {
                    _this.common.presentToast("Please Activate Stylist Account.", 4000);
                    _this.navCtrl.back();
                }
                else if (_this.lists.useredit) {
                    if ((parseInt(_this.lists.presentbid) != parseInt(_this.stylistregister.value.b_id))) {
                        var option_1 = {
                            queryParams: { Message: "Please Contact To Your Administrator To Activate Your Account." }
                        };
                        localStorage.clear();
                        setTimeout(function () {
                            _this.fcmmessage.GetToken();
                            _this.router.navigate(['/login'], option_1);
                        }, 200);
                    }
                    else {
                        _this.common.presentToast("Stylist Updated Successfully.", 4000);
                        _this.common.PageGoto("Root", "");
                    }
                }
                else {
                    var option = {
                        queryParams: { Message: "Please Contact To Your Administrator To Activate Your Account." }
                    };
                    _this.router.navigate(['/login'], option);
                }
            }
            else {
                _this.common.dismissLoader();
                _this.common.presentToast(res.status.Message, 4000);
            }
        });
    };
    StylistregisterPage.prototype.pickImage = function (sourceType) {
        var _this = this;
        var options = {
            quality: 50,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.lists.Image = 'data:image/jpeg;base64,' + imageData;
            _this.common.PostMethod("FileUpload", { file: _this.lists.Image }).then(function (res) {
                console.log(res);
                _this.stylistregister.controls['logo'].setValue(res.file);
            })["catch"](function (y) {
                console.log(y);
            });
        }, function (err) {
            console.log(err);
        });
    };
    StylistregisterPage.prototype.selectImage = function () {
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
    StylistregisterPage.prototype.Initalization = function () {
    };
    StylistregisterPage.prototype.GetCitylist = function (ev) {
        var _this = this;
        this.common.PostMethod("GetCity", { Id: ev }).then(function (res) {
            _this.lists.Citylist = res.Data;
        });
    };
    StylistregisterPage.prototype.GetCitylist1 = function (ev) {
        var _this = this;
        this.common.PostMethod("GetCity", { Id: ev }).then(function (res) {
            _this.lists.Citylist1 = res.Data;
        });
    };
    StylistregisterPage.prototype.GetStatelist = function () {
        var _this = this;
        this.common.PostMethod("GetStates", { Id: 101 }).then(function (res) {
            _this.lists.Statelist = res.Data || [];
            _this.lists.Statelist1 = res.Data || [];
        });
    };
    StylistregisterPage.prototype.GetDroplist = function () {
        var _this = this;
        this.common.PostMethod("GetFilterData", { file: "master", name: "Name", value: "Qualification" }).then(function (res) {
            var data = res.Data || [];
            data.forEach(function (element) {
                element.Value = element.Value.split(",");
                element.ValueHi = element.ValueHi.split(",");
            });
            if (localStorage.getItem('language') == 'Hindi') {
                _this.lists.qualificationlist = data[0].ValueHi;
            }
            else {
                _this.lists.qualificationlist = data[0].Value;
            }
        });
        this.common.PostMethod("GetFilterData", { file: "master", name: "Name", value: "Employment Type" }).then(function (res) {
            var data = res.Data || [];
            data.forEach(function (element) {
                element.Value = element.Value.split(",");
                element.ValueHi = element.ValueHi.split(",");
            });
            if (localStorage.getItem('language') == 'Hindi') {
                _this.lists.employeementtypelist = data[0].ValueHi;
            }
            else {
                _this.lists.employeementtypelist = data[0].Value;
            }
        });
        this.common.PostMethod("GetFilterData", { file: "master", name: "Name", value: "Industry Type" }).then(function (res) {
            var data = res.Data || [];
            data.forEach(function (element) {
                element.Value = element.Value.split(",");
                element.ValueHi = element.ValueHi.split(",");
            });
            if (localStorage.getItem('language') == 'Hindi') {
                _this.lists.industrytypelist = data[0].ValueHi;
            }
            else {
                _this.lists.industrytypelist = data[0].Value;
            }
        });
        this.common.PostMethod("GetFilterData", { file: "master", name: "Name", value: "Experience" }).then(function (res) {
            var data = res.Data || [];
            data.forEach(function (element) {
                element.Value = element.Value.split(",");
                element.ValueHi = element.ValueHi.split(",");
            });
            if (localStorage.getItem('language') == 'Hindi') {
                _this.lists.experiencelist = data[0].ValueHi;
            }
            else {
                _this.lists.experiencelist = data[0].Value;
            }
        });
        this.common.PostMethod("GetFilterData", { file: "master", name: "Name", value: "Skills" }).then(function (res) {
            var data = res.Data || [];
            data.forEach(function (element) {
                element.Value = element.Value.split(",");
                element.ValueHi = element.ValueHi.split(",");
            });
            if (localStorage.getItem('language') == 'Hindi') {
                _this.lists.skilllist = data[0].ValueHi;
            }
            else {
                _this.lists.skilllist = data[0].Value;
            }
        });
    };
    StylistregisterPage.prototype.SearchBusiness = function (ev) {
        var _this = this;
        this.common.PostMethod("SearchBusiness", { Search: ev }).then(function (res) {
            _this.lists.business = res.Data;
        });
    };
    StylistregisterPage.prototype.selectEmployer = function (ev) {
        var _this = this;
        this.stylistregister.controls["employer"].setValue(ev.name);
        this.stylistregister.controls["b_id"].setValue(ev.id);
        setTimeout(function () {
            _this.lists.business = [];
        }, 1000);
    };
    StylistregisterPage.prototype.Readterms = function () {
        this.common.PageGoto('Forward', 'terms');
    };
    StylistregisterPage.prototype.SameAddress = function (ev) {
        var env = this;
        console.log(ev);
        if (ev.detail.checked) {
            this.stylistregister.controls["address1"].setValue(this.stylistregister.value.address);
            this.stylistregister.controls["landmark1"].setValue(this.stylistregister.value.landmark);
            this.stylistregister.controls["stateid1"].setValue(this.stylistregister.value.stateid);
            this.GetCitylist1(this.stylistregister.value.stateid);
            setTimeout(function () {
                env.stylistregister.controls["cityid1"].setValue(env.stylistregister.value.cityid);
            }, 2000);
            this.stylistregister.controls["pincode1"].setValue(this.stylistregister.value.pincode);
        }
        else {
            this.stylistregister.controls["address1"].setValue("");
            this.stylistregister.controls["landmark1"].setValue("");
            this.stylistregister.controls["stateid1"].setValue(0);
            this.stylistregister.controls["cityid1"].setValue(0);
            this.stylistregister.controls["pincode1"].setValue("");
        }
    };
    StylistregisterPage.prototype.CheckDateValidate = function (ev) {
        var sdate = new Date(ev.detail.value);
        var today = new Date();
        if (sdate > today) {
            this.stylistregister.controls["dob"].setValue("");
            this.common.BasicAlert("Alert !", "", "Please do not Select Future Date.");
        }
    };
    StylistregisterPage = __decorate([
        core_1.Component({
            selector: 'app-stylistregister',
            templateUrl: './stylistregister.page.html',
            styleUrls: ['./stylistregister.page.scss'],
            providers: [{
                    provide: stepper_1.MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                }]
        })
    ], StylistregisterPage);
    return StylistregisterPage;
}());
exports.StylistregisterPage = StylistregisterPage;
