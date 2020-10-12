"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EventPage = void 0;
var user_pipe_1 = require("src/app/Pipes/pipe/user.pipe");
var core_1 = require("@angular/core");
var EventPage = /** @class */ (function () {
    function EventPage(common) {
        this.common = common;
        this.lists = {};
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true
        };
    }
    EventPage.prototype.ngOnInit = function () {
    };
    EventPage.prototype.ionViewWillEnter = function () {
        this.GetEventsList();
    };
    EventPage.prototype.GetEventsList = function () {
        var _this = this;
        this.common.presentLoader();
        this.common.PostMethod("GetEvents", {
            b_id: new user_pipe_1.UserPipe().transform('b_id'), userid: localStorage.getItem("UserId"), language: new user_pipe_1.UserPipe().transform('language'), usertype: localStorage.getItem("UserType")
        }).then(function (res) {
            _this.lists.eventlist = res.Data;
            _this.common.dismissLoader();
        }, function (err) {
            _this.common.dismissLoader();
        });
    };
    EventPage.prototype.GOtoDetails = function (ev) {
        this.common.PageGoto('Forward', 'endetails', { Data: ev, Type: Event });
    };
    EventPage = __decorate([
        core_1.Component({
            selector: 'app-event',
            templateUrl: './event.page.html',
            styleUrls: ['./event.page.scss']
        })
    ], EventPage);
    return EventPage;
}());
exports.EventPage = EventPage;
