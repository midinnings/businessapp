"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OfferndealPage = void 0;
var user_pipe_1 = require("src/app/Pipes/pipe/user.pipe");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var OfferndealPage = /** @class */ (function () {
    function OfferndealPage(common, modal, fb, navCtrl) {
        this.common = common;
        this.modal = modal;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.eventSource = [];
        this.calendar = {
            locale: 'en-GB',
            mode: 'month',
            currentDate: new Date()
        };
        this.lists = {};
        this.ShowService = false;
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
        this.lists.from = new Date();
        this.lists.to = new Date();
    }
    OfferndealPage.prototype.onEventSelected = function (ev) {
        console.log(ev);
    };
    OfferndealPage.prototype.onViewTitleChanged = function (ev) {
        console.log(ev);
        this.lists.title = ev;
    };
    OfferndealPage.prototype.onTimeSelected = function (ev) {
        console.log(ev);
        // this.calendar.currentDate = new Date(ev.selectedTime);
        this.lists.from = new Date(ev.selectedTime);
        this.lists.to = new Date(ev.selectedTime);
    };
    OfferndealPage.prototype.ngOnInit = function () {
        this.offerform = this.fb.group({
            type: new forms_1.FormControl('Offer', forms_1.Validators.required),
            title: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl(),
            couponcode: new forms_1.FormControl(''),
            startdate: new forms_1.FormControl('', forms_1.Validators.required),
            enddate: new forms_1.FormControl('', forms_1.Validators.required),
            usage: new forms_1.FormControl(''),
            noftime: new forms_1.FormControl(0),
            discounttype: new forms_1.FormControl('Amount', forms_1.Validators.required),
            discount: new forms_1.FormControl(0, forms_1.Validators.required),
            //  applysetting: new FormControl('', Validators.required),
            services: new forms_1.FormControl(''),
            templatecategory: new forms_1.FormControl(''),
            occassion: new forms_1.FormControl(''),
            discountMainTypes: new forms_1.FormControl('')
        });
        this.GetServicelist();
        this.GetTemplateCategorylist();
        this.Occassions();
    };
    OfferndealPage.prototype.GetServicelist = function () {
        var _this = this;
        this.common.PostMethod("GetBusinesslists", { b_id: new user_pipe_1.UserPipe().transform("b_id") }).then(function (res) {
            _this.lists.Servicelist = res.Data;
        });
    };
    OfferndealPage.prototype.GetTemplateCategorylist = function () {
        var _this = this;
        this.common.PostMethod("GetFilterData", { file: "master", name: "id", value: 11 }).then(function (res) {
            _this.lists.templatecategorylist = res.Data[0].Value.split(',');
        });
    };
    OfferndealPage.prototype.Occassions = function () {
        var _this = this;
        this.common.PostMethod("GetFilterData", { file: "master", name: "id", value: 12 }).then(function (res) {
            _this.lists.Occassions = res.Data[0].Value.split(',');
        });
    };
    OfferndealPage.prototype.ServiceSelected = function (values) {
        //----
        if (this.offerform.value.discountMainTypes == 'BuynGet') {
            if (this.offerform.value.services.length != 2) {
                this.offerform.value.services = '';
                this.common.presentToast('Please select appropriate services from service list to create BuynGet/Combo/Package', 2000);
            }
        }
    };
    OfferndealPage.prototype.TypeSelected = function (value) {
        if (value == 'OnService' || value == 'Flat') {
            this.ShowService = false;
        }
        else {
            this.ShowService = true;
        }
    };
    OfferndealPage.prototype.SaveOffer = function () {
    };
    OfferndealPage.prototype.Back = function () {
        this.navCtrl.back();
    };
    OfferndealPage.prototype.Next = function () {
        if (this.ShowService) {
            if (this.offerform.value.services.length >= 2) {
            }
            else {
                this.common.presentToast('Please select appropriate services from service list to create BuynGet/Combo/Package', 2000);
                return;
            }
        }
        this.offerform.value.type = this.offerform.value.discountMainTypes;
        this.offerform.value.b_id = new user_pipe_1.UserPipe().transform('b_id');
        this.offerform.value.userid = localStorage.getItem("UserId");
        this.common.PageGoto('Forward', 'shaping', this.offerform.value);
    };
    OfferndealPage = __decorate([
        core_1.Component({
            selector: 'app-offerndeal',
            templateUrl: './offerndeal.page.html',
            styleUrls: ['./offerndeal.page.scss']
        })
    ], OfferndealPage);
    return OfferndealPage;
}());
exports.OfferndealPage = OfferndealPage;
