"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerReviewsPage = void 0;
var core_1 = require("@angular/core");
var user_pipe_1 = require("src/app/Pipes/pipe/user.pipe");
var CustomerReviewsPage = /** @class */ (function () {
    function CustomerReviewsPage(common) {
        this.common = common;
        this.Rating = [];
    }
    CustomerReviewsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.common.PostMethod("GetBusinessRatings", { b_id: new user_pipe_1.UserPipe().transform('b_id') }).then(function (res) {
            var Data = res.Data;
            if (res.Status == 1) {
                _this.Rating = Data;
            }
            else {
                _this.common.presentToast('Unable to fetch ratings, please try again after sometime', '2000');
            }
        }, function (err) {
            _this.common.presentToast('Unable to fetch ratings, please try again after sometime', '2000');
        });
    };
    CustomerReviewsPage = __decorate([
        core_1.Component({
            selector: 'app-customer-reviews',
            templateUrl: './customer-reviews.page.html',
            styleUrls: ['./customer-reviews.page.scss']
        })
    ], CustomerReviewsPage);
    return CustomerReviewsPage;
}());
exports.CustomerReviewsPage = CustomerReviewsPage;
