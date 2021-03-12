"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FcmmessageService = void 0;
var core_1 = require("@angular/core");
var FcmmessageService = /** @class */ (function () {
    function FcmmessageService(platform, FcmMessage, inmessage) {
        this.platform = platform;
        this.FcmMessage = FcmMessage;
        this.inmessage = inmessage;
    }
    FcmmessageService.prototype.GetToken = function () {
        if (this.platform.is("android")) {
            this.FcmMessage.getToken().then(function (res) {
                if (!localStorage.getItem("FCMToken")) {
                    localStorage.setItem("FCMToken", res);
                }
            });
        }
    };
    FcmmessageService.prototype.GetForgroundMessage = function () {
        var _this = this;
        if (this.platform.is("android")) {
            this.FcmMessage.onMessage().subscribe(function (res) {
                console.log(res);
                _this.inmessage.sendMessage("Dasboard", "Dashboard");
            }, function (error) {
                console.log(error);
            });
        }
    };
    FcmmessageService.prototype.GetBackgroundMessage = function () {
        var _this = this;
        if (this.platform.is("android")) {
            this.FcmMessage.onBackgroundMessage().subscribe(function (res) {
                console.log(res);
                _this.inmessage.sendMessage("Dasboard", "Dashboard");
            }, function (error) {
                console.log(error);
            });
        }
    };
    FcmmessageService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FcmmessageService);
    return FcmmessageService;
}());
exports.FcmmessageService = FcmmessageService;
