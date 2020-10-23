"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CuponsPage = void 0;
var user_pipe_1 = require("src/app/Pipes/pipe/user.pipe");
var core_1 = require("@angular/core");
var CuponsPage = /** @class */ (function () {
    function CuponsPage(modal, common) {
        this.modal = modal;
        this.common = common;
        this.lists = {};
    }
    CuponsPage.prototype.ngOnInit = function () {
        this.lists.Myoffers = [];
        this.GetMyOffers();
    };
    CuponsPage.prototype.close = function () {
        this.modal.dismiss({ status: false });
    };
    CuponsPage.prototype.GetMyOffers = function () {
        var _this = this;
        this.common.PostMethod("GetOffers", { b_id: new user_pipe_1.UserPipe().transform('b_id'), userid: localStorage.getItem("UserId"), usertype: new user_pipe_1.UserPipe().transform('usertype') }).then(function (res) {
            console.log(res);
            _this.lists.Myoffers = res.Data;
            _this.FilterOffers();
        });
    };
    CuponsPage.prototype.FilterOffers = function () {
        this.lists.Myoffers = this.lists.Myoffers.filter(function (i) { return i.type == 'OnService' || i.type == 'Package' || i.type == 'BuynGet' || i.type == 'Flat' || i.type == 'Combo'; });
    };
    CuponsPage.prototype.ApplyCupon = function (ev) {
        if (!this.common.dateCheck(ev.startdate, ev.enddate)) {
            this.common.presentToast('Coupon is expired..', 3000);
            return;
        }
        this.modal.dismiss({ status: true, Data: ev });
    };
    CuponsPage = __decorate([
        core_1.Component({
            selector: 'app-cupons',
            templateUrl: './cupons.page.html',
            styleUrls: ['./cupons.page.scss']
        })
    ], CuponsPage);
    return CuponsPage;
}());
exports.CuponsPage = CuponsPage;
