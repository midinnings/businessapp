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
exports.FestivalnvishesPage = void 0;
var sharingpop_page_1 = require("./../../Modal/sharingpop/sharingpop.page");
var user_pipe_1 = require("./../../Pipes/pipe/user.pipe");
var core_1 = require("@angular/core");
var moment = require("moment");
var coupon_details_page_1 = require("../coupon-details/coupon-details.page");
var FestivalnvishesPage = /** @class */ (function () {
    function FestivalnvishesPage(common, modal) {
        this.common = common;
        this.modal = modal;
        this.lists = {};
        this.wish_title = '';
        this.wish_description = '';
        this.start_date = '';
        this.end_date = '';
        this.TakeDes = false;
        this.datePickerObj = {
            inputDate: new Date(),
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
        this.OccasionList = [];
        this.OccasionDescriptions = [];
    }
    FestivalnvishesPage.prototype.ngOnInit = function () {
        this.lists.Brithdays = [];
        this.lists.Myoffers = [];
        this.GetMyOffers();
    };
    FestivalnvishesPage.prototype.ionViewWillEnter = function () {
        this.GetBrithDaylist();
        this.GetFestivals();
        this.GetImportantDays();
    };
    FestivalnvishesPage.prototype.GetBrithDaylist = function () {
        var _this = this;
        var today = moment().format("MM-DD");
        console.log(today);
        this.common.PostMethod("GetBrithDayUser", { b_id: new user_pipe_1.UserPipe().transform("b_id"), dob: today }).then(function (res) {
            console.log(res);
            _this.lists.Brithdays = res.Data;
        });
    };
    FestivalnvishesPage.prototype.GetFestivals = function () {
        var _this = this;
        this.common.PostMethod("GetTemplate", { categories: [3] }).then(function (res) {
            console.log(res);
            _this.lists.Festival = res.Data;
        });
    };
    FestivalnvishesPage.prototype.GetImportantDays = function () {
        var _this = this;
        this.common.PostMethod("GetTemplate", { categories: [2] }).then(function (res) {
            console.log(res);
            _this.lists.Importantdays = res.Data;
        });
    };
    FestivalnvishesPage.prototype.SelectTemplate = function (TemplateFor) {
        this.lists.SelectedOccasion = TemplateFor;
        this.TakeDes = true;
        this.OccasionChange(TemplateFor);
    };
    FestivalnvishesPage.prototype.OpenSharingPopup = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: sharingpop_page_1.SharingpopPage,
                            cssClass: 'addcustomer',
                            showBackdrop: true,
                            componentProps: { id: ev }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data.Status) {
                            this.TakeDes = true;
                            //this.common.presentToast('Message Shared Successfully', 4000);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FestivalnvishesPage.prototype.BackToOffer = function () {
        this.TakeDes = false;
    };
    FestivalnvishesPage.prototype.SaveDes = function () {
        var offerform = {};
        offerform.b_id = new user_pipe_1.UserPipe().transform('b_id');
        offerform.userid = localStorage.getItem("UserId");
        offerform.title = this.wish_title;
        offerform.description = this.wish_description;
        offerform.startdate = this.start_date;
        offerform.enddate = this.end_date;
        offerform.SelectedOccasion = this.lists.SelectedOccasion;
        this.common.PageGoto('Forward', 'shaping-wishes', offerform);
    };
    FestivalnvishesPage.prototype.GetMyOffers = function () {
        var _this = this;
        this.common.PostMethod("GetFestivalWishesList", { b_id: new user_pipe_1.UserPipe().transform('b_id'), userid: localStorage.getItem("UserId"), usertype: new user_pipe_1.UserPipe().transform('usertype') }).then(function (res) {
            console.log(res);
            _this.lists.Myoffers = res.Data;
        });
    };
    FestivalnvishesPage.prototype.OpenCoupon = function (CouponData) {
        return __awaiter(this, void 0, void 0, function () {
            var env, custmodal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        env = this;
                        return [4 /*yield*/, this.modal.create({
                                component: coupon_details_page_1.CouponDetailsPage,
                                showBackdrop: true,
                                componentProps: CouponData
                            })];
                    case 1:
                        custmodal = _a.sent();
                        return [4 /*yield*/, custmodal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FestivalnvishesPage.prototype.OccasionChange = function (Cat) {
        var _this = this;
        this.common.PostMethod("GetOccasionData", { type: "title", category: Cat }).then(function (res) {
            if (res.Status == 1) {
                _this.OccasionList = res.Data;
            }
        });
        this.common.PostMethod("GetOccasionData", { type: "description", category: Cat }).then(function (res) {
            if (res.Status == 1) {
                _this.OccasionDescriptions = res.Data;
            }
        });
    };
    FestivalnvishesPage = __decorate([
        core_1.Component({
            selector: 'app-festivalnvishes',
            templateUrl: './festivalnvishes.page.html',
            styleUrls: ['./festivalnvishes.page.scss']
        })
    ], FestivalnvishesPage);
    return FestivalnvishesPage;
}());
exports.FestivalnvishesPage = FestivalnvishesPage;
