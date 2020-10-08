"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OfferreviewPage = void 0;
var core_1 = require("@angular/core");
var OfferreviewPage = /** @class */ (function () {
    function OfferreviewPage(routes, common) {
        this.routes = routes;
        this.common = common;
        this.lists = {};
        this.BackgroundImagePath = '';
    }
    OfferreviewPage.prototype.ngOnInit = function () {
        var _this = this;
        this.BackgroundImagePath = localStorage.getItem('TempBackgroundPath');
        this.routes.queryParams.subscribe(function (res) {
            console.log(res);
            _this.lists = res;
        });
    };
    OfferreviewPage.prototype.CreateCoupon = function () {
        var _this = this;
        this.common.presentLoader();
        var DataSend = {};
        DataSend = JSON.parse(JSON.stringify(this.lists));
        DataSend.backgroundImage = this.BackgroundImagePath;
        this.common.PostMethod("CreateOffer", DataSend).then(function (res) {
            _this.common.dismissLoader();
            if (res.Status == 1) {
                _this.common.presentToast(res.Message, 4000);
                _this.common.PageGoto('Root', '');
            }
            else {
                _this.common.presentToast(res.Message, 4000);
            }
        });
    };
    OfferreviewPage = __decorate([
        core_1.Component({
            selector: 'app-offerreview',
            templateUrl: './offerreview.page.html',
            styleUrls: ['./offerreview.page.scss']
        })
    ], OfferreviewPage);
    return OfferreviewPage;
}());
exports.OfferreviewPage = OfferreviewPage;
