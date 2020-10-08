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
exports.AppointmentsPage = void 0;
var appointmenttimestatus_page_1 = require("./../Modal/appointmenttimestatus/appointmenttimestatus.page");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var user_pipe_1 = require("../Pipes/pipe/user.pipe");
var moment = require("moment");
var cupons_page_1 = require("../Extra/cupons/cupons.page");
var AppointmentsPage = /** @class */ (function () {
    function AppointmentsPage(modal, common, fb, router, inmessage) {
        this.modal = modal;
        this.common = common;
        this.fb = fb;
        this.router = router;
        this.inmessage = inmessage;
        this.eventSource = [];
        this.eventSource1 = [];
        this.calendar = {
            locale: 'en-GB',
            mode: 'month',
            timemode: 'day',
            currentDate: new Date(),
            currenttime: new Date()
        };
        this.lists = {};
        this.OfferParams = {};
        this.ShowCode = '';
        this.ShowDealSelection = true;
        this.markDisabled = function (date) {
            var current = new Date();
            var mydate = current.getFullYear() + "-" + (current.getMonth() + 1) + "-" + (current.getDate());
            current = new Date(mydate);
            return date <= current;
        };
        this.lists.appointmentdate = new Date();
        this.lists.eventtime = [];
        this.lists.Events = [];
        this.lists.Times = ["12:00 AM", "12:30 AM", "01:00 AM", "01:30 AM", "02:00 AM", "02:30 AM", "03:00 AM", "03:30 AM", "04:00 AM", "04:30 AM", "05:00 AM", "05:30 AM", "06:00 AM", "06:30 AM", "07:00 AM", "07:30 AM", "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM", "11:30 PM"];
    }
    AppointmentsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.book = this.fb.group({
            cname: new forms_1.FormControl('', forms_1.Validators.required),
            cmobile: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10)])),
            cemail: new forms_1.FormControl('', forms_1.Validators.email),
            gender: new forms_1.FormControl(),
            service: new forms_1.FormControl(''),
            stylist: new forms_1.FormControl('', forms_1.Validators.required),
            PackageSelected: new forms_1.FormControl(false, forms_1.Validators.required)
        });
        this.router.queryParams.subscribe(function (res) {
            if (Object.keys(res).length != 0) {
                _this.ShowDealSelection = false;
            }
            else {
                _this.lists.ShowOffers = false;
                return;
            }
            if (res.coupon_id != null || res.coupon_id != "null") {
                _this.ShowCode = res.coupon_applied;
                _this.lists.ShowOffers = true;
            }
            _this.book.controls['cname'].setValue(res.customer_name);
            _this.book.controls['cmobile'].setValue(res.contactno);
            if (res.email && res.email != "null")
                _this.book.controls['cemail'].setValue(res.email);
            _this.book.controls['gender'].setValue(res.gender);
            setTimeout(function () {
                _this.book.controls['service'].setValue(JSON.parse(res.service));
                _this.book.controls['stylist'].setValue(res.employee);
            }, 2000);
            _this.lists.bookid = res.id;
            var startDate = moment(res.prefeerddate);
            var end = moment(res.prefeerddate).add(1, 'hours');
            _this.lists.Events = [{
                    startTime: new Date(startDate),
                    endTime: new Date(end),
                    allDay: false,
                    color: "primary"
                }];
            if (res.id) {
                _this.calendar.currentDate = new Date(res.prefeerddate);
                _this.calendar.currenttime = new Date(res.prefeerddate);
                _this.lists.appointmentdate = new Date(res.prefeerddate);
                _this.onTimeSelected1({ selectedTime: new Date(res.prefeerddate) });
            }
            _this.eventSource1 = _this.lists.Events;
        });
        this.GetUserTime();
        this.Getservice();
        this.GetStylist();
    };
    AppointmentsPage.prototype.onEventSelected = function (ev) {
        console.log(ev);
    };
    AppointmentsPage.prototype.onViewTitleChanged = function (ev) {
        this.lists.title = ev;
    };
    AppointmentsPage.prototype.onTimeSelected = function (ev) {
        this.lists.appointmentdate = ev.selectedTime;
        this.calendar.currenttime = ev.selectedTime;
    };
    AppointmentsPage.prototype.onTimeSelected1 = function (ev) {
        this.lists.selectedtime = ev.selectedTime;
        var startDate = moment(ev.selectedTime);
        var end = moment(ev.selectedTime).add(1, 'hours');
        this.lists.Events = [{
                startTime: new Date(startDate),
                endTime: new Date(end),
                allDay: false,
                color: "primary"
            }];
        this.eventSource1 = this.lists.Events;
        this.CheckTimeStatus(new common_1.DatePipe('en-GB').transform(this.lists.appointmentdate, 'yyyy-MM-dd') + ' ' + new common_1.DatePipe('en-GB').transform(this.lists.selectedtime, 'hh:mm:ss a'));
    };
    AppointmentsPage.prototype.GetUserTime = function () {
        var BusinessProfile = JSON.parse(localStorage.getItem("UserProfile"));
        this.lists.Weekinfo = BusinessProfile.Businessinfo.Timing;
    };
    AppointmentsPage.prototype.Getservice = function () {
        var _this = this;
        this.common.PostMethod("GetFilterData", { file: "ub_service", name: "userid", value: new user_pipe_1.UserPipe().transform('b_id') }).then(function (res) {
            _this.lists.servicelist = res.Data;
        });
    };
    AppointmentsPage.prototype.GetStylist = function () {
        var _this = this;
        this.common.PostMethod("GetFilterData", { file: "userlogin", name: "b_id", value: new user_pipe_1.UserPipe().transform('b_id') }).then(function (res) {
            _this.lists.userlist = res.Data;
        });
    };
    AppointmentsPage.prototype.SaveAppointment = function () {
        var _this = this;
        if (this.book.value.PackageSelected) {
            if (!this.OfferParams.coupon_applied) {
                this.common.presentToast("Please Select an Offer", 4000);
                return;
            }
        }
        this.common.presentLoader();
        var id = 0;
        if (this.lists.bookid) {
            id = this.lists.bookid;
        }
        var time = new common_1.DatePipe('en-GB').transform(this.lists.selectedtime, 'hh:mm:ss a');
        if (!time) {
            this.common.dismissLoader();
            this.common.presentToast("Please Select Appointment time", 4000);
        }
        else {
            this.lists.prefeereddate = new common_1.DatePipe('en-GB').transform(this.lists.appointmentdate, 'yyyy-MM-dd') + ' ' + new common_1.DatePipe('en-GB').transform(this.lists.selectedtime, 'hh:mm:ss a');
            var Services_i = "[]";
            if (this.book.value.service != "") {
                Services_i = JSON.stringify(this.book.value.service);
                this.OfferParams.coupon_applied = this.OfferParams.coupon_id = null;
            }
            var Data = {
                'id': id,
                'userid': localStorage.getItem("UserId"),
                'b_id': new user_pipe_1.UserPipe().transform('b_id'),
                'customer_name': this.book.value.cname,
                'contactno': this.book.value.cmobile,
                'email': this.book.value.cemail,
                'salon': new user_pipe_1.UserPipe().transform('Businessinfo')['name'],
                'gender': this.book.value.gender,
                'service': Services_i,
                'prefeerddate': this.lists.prefeereddate,
                'comments': '', 'employee': this.book.value.stylist,
                'appointmentstatus': 'Waiting',
                'coupon_id': this.OfferParams.coupon_id,
                'coupon_applied': this.OfferParams.coupon_applied,
                'cost': this.OfferParams.cost
            };
            this.common.PostMethod("CreateAppointment", Data).then(function (res) {
                if (res.Status == "1") {
                    _this.lists.ShowOffers = false;
                    _this.common.dismissLoader();
                    _this.common.presentToast(res.Message, 4000);
                    setTimeout(function () {
                        _this.inmessage.sendMessage("Check Start Service", "Dashboard");
                    }, 100);
                    _this.book.reset();
                    _this.eventSource1 = [];
                }
                else {
                    _this.common.dismissLoader();
                    _this.common.presentToast(res.Message, 4000);
                }
            });
        }
    };
    AppointmentsPage.prototype.SearchCustomer = function (ev) {
        var _this = this;
        if (ev.length > 2) {
            this.common.PostMethod("SearchCustomer", { Search: ev, b_id: new user_pipe_1.UserPipe().transform('b_id') }).then(function (res) {
                _this.lists.Customerlist = res.Data;
            });
        }
    };
    AppointmentsPage.prototype.SelectedCustomer = function (ev) {
        var _this = this;
        console.log(ev);
        this.book.controls['cname'].setValue(ev.name);
        this.book.controls['cmobile'].setValue(ev.mobile);
        this.book.controls['gender'].setValue(ev.gender);
        setTimeout(function () {
            _this.lists.Customerlist = [];
        }, 200);
    };
    AppointmentsPage.prototype.CheckTimeStatus = function (ev) {
        var _this = this;
        var from = moment(ev).format('YYYY-MM-DD');
        var to = moment(ev).format('YYYY-MM-DD');
        var userid = 0;
        if (localStorage.getItem("UserType") != "2" && localStorage.getItem("UserType") != "6") {
            userid = localStorage.getItem("UserId");
        }
        this.common.PostMethod("AppointmentTimeStatus", { userid: userid, from: from, to: to, b_id: new user_pipe_1.UserPipe().transform('b_id') }).then(function (res) {
            _this.lists.pendinglists = res.Data;
            if (res.Data.length > 0) {
                _this.OpenAppointmentPopup(res.Data);
            }
        });
    };
    AppointmentsPage.prototype.OpenAppointmentPopup = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: appointmenttimestatus_page_1.AppointmenttimestatusPage,
                            cssClass: 'viewtimestatus',
                            showBackdrop: true,
                            componentProps: { appointment: ev }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AppointmentsPage.prototype.SelectAnOffer = function (value) {
        var CheckVal = this.book.value.PackageSelected;
        if (CheckVal == true) {
            this.lists.ShowOffers = true;
        }
        else {
            this.lists.ShowOffers = false;
        }
    };
    AppointmentsPage.prototype.ViewOffers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: cupons_page_1.CuponsPage,
                            cssClass: '',
                            showBackdrop: true,
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data.status) {
                            if (data.Data.type == 'OnService' || data.Data.type == 'Flat') {
                                this.common.presentToast('Please select from any Package/Combo/BuynGet Offers', 3000);
                            }
                            else {
                                this.OfferParams.coupon_id = data.Data.id;
                                this.ShowCode = this.OfferParams.coupon_applied = data.Data.couponcode;
                                this.OfferParams.cost = data.Data.discount;
                            }
                            //this.ApplyDiscountConcession(data.Data);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AppointmentsPage = __decorate([
        core_1.Component({
            selector: 'app-appointments',
            templateUrl: './appointments.page.html',
            styleUrls: ['./appointments.page.scss']
        })
    ], AppointmentsPage);
    return AppointmentsPage;
}());
exports.AppointmentsPage = AppointmentsPage;
