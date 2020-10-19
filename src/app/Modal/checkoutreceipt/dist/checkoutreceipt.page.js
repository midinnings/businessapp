"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CheckoutreceiptPage = void 0;
var core_1 = require("@angular/core");
var CheckoutreceiptPage = /** @class */ (function () {
    function CheckoutreceiptPage(common, modal, navParams) {
        this.common = common;
        this.modal = modal;
        this.navParams = navParams;
        this.lists = {};
        this.PackageComboApplied = false;
    }
    CheckoutreceiptPage.prototype.ngOnInit = function () {
        this.lists = this.navParams.data;
        console.log(this.navParams.data);
        this.lists.UserProfile = JSON.parse(localStorage.getItem("UserProfile"));
        debugger;
        this.GetOfferData(this.lists.coupon_id);
    };
    CheckoutreceiptPage.prototype.next = function () {
        this.modal.dismiss({ Status: true });
    };
    CheckoutreceiptPage.prototype.close = function () {
        this.modal.dismiss({ Status: false });
    };
    CheckoutreceiptPage.prototype.totalamount = function () {
        var total = 0;
        this.lists.serviceinfo.forEach(function (element) {
            total = parseInt(total) + parseInt(element.serviceprice);
        });
        if (this.lists.applycoupon.discounttype == "Percent") {
            this.lists.Discount = total - this.lists.cost;
            total = this.lists.cost;
        }
        else {
            total = parseInt(total) - parseInt(this.lists.Discount);
        }
        return total;
    };
    CheckoutreceiptPage.prototype.GetOfferData = function (offer_id) {
        var _this = this;
        var env = this;
        this.common.PostMethod("GetFilterData", { file: "offer", name: "id", value: offer_id }).then(function (res) {
            var Data = res.Data[0];
            if (Data) {
                if (Data.type == 'Combo' || Data.type == 'Package') {
                    _this.PackageComboApplied = true;
                }
            }
        });
    };
    CheckoutreceiptPage = __decorate([
        core_1.Component({
            selector: 'app-checkoutreceipt',
            templateUrl: './checkoutreceipt.page.html',
            styleUrls: ['./checkoutreceipt.page.scss']
        })
    ], CheckoutreceiptPage);
    return CheckoutreceiptPage;
}());
exports.CheckoutreceiptPage = CheckoutreceiptPage;
