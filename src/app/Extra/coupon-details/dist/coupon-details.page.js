"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CouponDetailsPage = void 0;
var core_1 = require("@angular/core");
var CouponDetailsPage = /** @class */ (function () {
    function CouponDetailsPage(screenshot, router, modal, common, navparams) {
        this.screenshot = screenshot;
        this.router = router;
        this.modal = modal;
        this.common = common;
        this.navparams = navparams;
        this.OfferDetailData = {};
        this.BackgroundImage = '';
        this.CanvasImage = '';
        this.lists = {};
    }
    CouponDetailsPage.prototype.ngOnInit = function () {
        this.OfferDetailData = this.navparams.data;
        this.BackgroundImage = this.common.Url + 'Files/' + this.OfferDetailData.backgroundImage;
    };
    CouponDetailsPage.prototype.close = function () {
        this.modal.dismiss({ status: false });
    };
    CouponDetailsPage.prototype.Dismiss = function (ev) {
        this.modal.dismiss({ status: true, Data: ev });
    };
    CouponDetailsPage.prototype.ScreenShot = function () {
        var env = this;
        document.getElementById("btm_btns").style.display = "none";
        setTimeout(function () {
            var RandNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
            env.screenshot.save('jpg', 80, RandNumber + 'OfferImage').then(function (res) {
                console.log(res);
                setTimeout(function () {
                    env.common.presentToast('Image Saved in Gallery', 2000);
                    document.getElementById("btm_btns").style.display = "block";
                }, 1000);
            });
            // this.screenshot.URI(80).then(res => {
            //   console.log(res);
            //   document.getElementById("btm_btns").style.display = "none";
            // });
        }, 1000);
    };
    CouponDetailsPage = __decorate([
        core_1.Component({
            selector: 'app-coupon-details',
            templateUrl: './coupon-details.page.html',
            styleUrls: ['./coupon-details.page.scss']
        })
    ], CouponDetailsPage);
    return CouponDetailsPage;
}());
exports.CouponDetailsPage = CouponDetailsPage;
