"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppointmenttimestatusPage = void 0;
var core_1 = require("@angular/core");
var AppointmenttimestatusPage = /** @class */ (function () {
    function AppointmenttimestatusPage(common, modal, navparams) {
        this.common = common;
        this.modal = modal;
        this.navparams = navparams;
        this.lists = {};
    }
    AppointmenttimestatusPage.prototype.ngOnInit = function () {
        this.lists = this.navparams.data.appointment;
    };
    AppointmenttimestatusPage.prototype.close = function () {
        this.modal.dismiss();
    };
    AppointmenttimestatusPage = __decorate([
        core_1.Component({
            selector: 'app-appointmenttimestatus',
            templateUrl: './appointmenttimestatus.page.html',
            styleUrls: ['./appointmenttimestatus.page.scss']
        })
    ], AppointmenttimestatusPage);
    return AppointmenttimestatusPage;
}());
exports.AppointmenttimestatusPage = AppointmenttimestatusPage;
