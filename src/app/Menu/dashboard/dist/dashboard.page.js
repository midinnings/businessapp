"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DashboardPage = void 0;
var user_pipe_1 = require("./../../Pipes/pipe/user.pipe");
var core_1 = require("@angular/core");
var moment = require("moment");
var DashboardPage = /** @class */ (function () {
    function DashboardPage(common, inmessage, fcmmessage, router) {
        var _this = this;
        this.common = common;
        this.inmessage = inmessage;
        this.fcmmessage = fcmmessage;
        this.router = router;
        this.lists = {};
        this.slideOpts1 = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.slideOpts2 = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.slideOpts3 = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
        this.lists.dashboardwid = {};
        this.lists.dashboardwid.notifications = 0;
        this.subscription = this.inmessage.getMessage().subscribe(function (res) {
            if (res.Page == "Dashboard") {
                _this.lists.dashboardwid = {};
                setTimeout(function () {
                    _this.lists.usertype = localStorage.getItem("UserType");
                }, 500);
                _this.GetDashboardInfo();
                _this.GetBlogs();
            }
        });
    }
    DashboardPage.prototype.ionViewWillLeave = function () {
        this.slides1.stopAutoplay();
        this.slides2.stopAutoplay();
        this.slides3.stopAutoplay();
    };
    DashboardPage.prototype.slidesDidLoad = function (slides) {
        slides.startAutoplay();
    };
    DashboardPage.prototype.ngOnInit = function () {
        var _this = this;
        this.GetBlogs();
        this.GetSlider();
        setInterval(function () {
            _this.GetDashboardInfo();
        }, 15000);
    };
    DashboardPage.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    DashboardPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.lists.dashboardwid = {};
        setTimeout(function () {
            _this.lists.usertype = localStorage.getItem("UserType");
            _this.lists.logo = new user_pipe_1.UserPipe().transform('logo');
        }, 500);
        this.GetDashboardInfo();
        this.GetUserProfile();
    };
    DashboardPage.prototype.GetUserProfile = function () {
        var _this = this;
        this.common.PostMethod("GetProfile", { Id: localStorage.getItem("UserId") }).then(function (res) {
            res.Data.status = parseInt(res.Data.status);
            if (res.Data.status == 0) {
                localStorage.clear();
                setTimeout(function () {
                    _this.fcmmessage.GetToken();
                    window.location.reload();
                    _this.router.navigate(['/login']);
                }, 1000);
            }
        });
    };
    DashboardPage.prototype.GotoPage = function (ev) {
        if (ev == 'festivalnvishes') {
            this.common.presentToast("Feature Coming Soon", 4000);
        }
        else {
            this.common.PageGoto('Forward', ev, {});
        }
    };
    DashboardPage.prototype.Gotoenpage = function (ev) {
        this.common.PageGoto('Forward', ev, {});
    };
    DashboardPage.prototype.GetBlogs = function () {
        var _this = this;
        this.common.PostMethod("DashboardBlog", { userid: localStorage.getItem("UserId"), usertype: localStorage.getItem("UserType"), b_id: new user_pipe_1.UserPipe().transform('b_id'), language: new user_pipe_1.UserPipe().transform('language') }).then(function (res) {
            _this.lists.bloglist = res.Data.Blog;
            _this.lists.newslist = res.Data.News;
            _this.lists.eventlist = res.Data.Event;
        });
    };
    DashboardPage.prototype.GetDashboardInfo = function () {
        var _this = this;
        this.common.PostMethod("Dashboard", { userid: localStorage.getItem("UserId"), usertype: localStorage.getItem("UserType"), b_id: new user_pipe_1.UserPipe().transform('b_id'), from: moment().format('YYYY-MM-DD'), to: moment().format('YYYY-MM-DD') }).then(function (res) {
            _this.lists.dashboardwid = res.Data;
        });
    };
    DashboardPage.prototype.next = function (ev) {
        if (ev == 1) {
            this.slides1.slideNext();
        }
        if (ev == 2) {
            this.slides2.slideNext();
        }
        if (ev == 3) {
            this.slides3.slideNext();
        }
    };
    DashboardPage.prototype.pre = function (ev) {
        if (ev == 1) {
            this.slides1.slidePrev();
        }
        if (ev == 2) {
            this.slides2.slideNext();
        }
        if (ev == 3) {
            this.slides3.slideNext();
        }
    };
    DashboardPage.prototype.GetSlider = function () {
        var _this = this;
        // let id = 0;
        // if (localStorage.getItem("UserType") == "2" || localStorage.getItem("UserType") == "6") {
        //   id = 1;
        // } else {
        //   id = 2;
        // }
        this.common.PostMethod("GetBanners", { id: 2 }).then(function (res) {
            _this.lists.sliders = res.Data;
        });
    };
    __decorate([
        core_1.ViewChild('slides1', { static: false })
    ], DashboardPage.prototype, "slides1");
    __decorate([
        core_1.ViewChild('slides2', { static: true })
    ], DashboardPage.prototype, "slides2");
    __decorate([
        core_1.ViewChild('slides3', { static: false })
    ], DashboardPage.prototype, "slides3");
    DashboardPage = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.page.html',
            styleUrls: ['./dashboard.page.scss']
        })
    ], DashboardPage);
    return DashboardPage;
}());
exports.DashboardPage = DashboardPage;
