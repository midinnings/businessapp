"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BlogPage = void 0;
var user_pipe_1 = require("./../../Pipes/pipe/user.pipe");
var core_1 = require("@angular/core");
var BlogPage = /** @class */ (function () {
    function BlogPage(common) {
        this.common = common;
        this.lists = {};
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
    }
    BlogPage.prototype.ngOnInit = function () {
    };
    BlogPage.prototype.ionViewWillEnter = function () {
        this.GetEventsList();
    };
    BlogPage.prototype.GetEventsList = function () {
        var _this = this;
        this.common.presentLoader();
        this.common.PostMethod("GetBloglist", { language: new user_pipe_1.UserPipe().transform('language'), usertype: localStorage.getItem("UserType") }).then(function (res) {
            _this.lists.bloglist = res.Data;
            _this.common.dismissLoader();
        }, function (err) {
            _this.common.dismissLoader();
        });
    };
    BlogPage.prototype.GOtoDetails = function (ev) {
        this.common.PageGoto('Forward', 'blogdetail', { Data: ev, Type: Event });
    };
    BlogPage = __decorate([
        core_1.Component({
            selector: 'app-blog',
            templateUrl: './blog.page.html',
            styleUrls: ['./blog.page.scss']
        })
    ], BlogPage);
    return BlogPage;
}());
exports.BlogPage = BlogPage;
