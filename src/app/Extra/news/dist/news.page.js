"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewsPage = void 0;
var core_1 = require("@angular/core");
var user_pipe_1 = require("src/app/Pipes/pipe/user.pipe");
var NewsPage = /** @class */ (function () {
    function NewsPage(common) {
        this.common = common;
        this.lists = {};
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
    }
    NewsPage.prototype.ngOnInit = function () {
        this.GetNewslist();
    };
    NewsPage.prototype.GetNewslist = function () {
        var _this = this;
        this.common.PostMethod("GetNews", { language: new user_pipe_1.UserPipe().transform('language'), usertype: localStorage.getItem("UserType") }).then(function (res) {
            _this.lists.newslist = res.Data;
        });
    };
    NewsPage.prototype.GOtoDetails = function (ev) {
        this.common.PageGoto('Forward', 'newsdetails', { Data: ev, Type: Event });
    };
    NewsPage = __decorate([
        core_1.Component({
            selector: 'app-news',
            templateUrl: './news.page.html',
            styleUrls: ['./news.page.scss']
        })
    ], NewsPage);
    return NewsPage;
}());
exports.NewsPage = NewsPage;
