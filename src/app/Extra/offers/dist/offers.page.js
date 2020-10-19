"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.OffersPage = void 0;
var common_1 = require("@angular/common");
var user_pipe_1 = require("./../../Pipes/pipe/user.pipe");
var core_1 = require("@angular/core");
var coupon_details_page_1 = require("../coupon-details/coupon-details.page");
var OffersPage = /** @class */ (function () {
    function OffersPage(androidPermissions, screenshot, transfer, file, common, social, modal, popUp) {
        this.androidPermissions = androidPermissions;
        this.screenshot = screenshot;
        this.transfer = transfer;
        this.file = file;
        this.common = common;
        this.social = social;
        this.modal = modal;
        this.popUp = popUp;
        this.lists = {};
        this.Usertype_check = '2';
    }
    OffersPage.prototype.ngOnInit = function () {
        var _this = this;
        this.Usertype_check = new user_pipe_1.UserPipe().transform('usertype');
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (result) { return console.log('Has permission?', result.hasPermission); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE); });
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (result) { return console.log('Has permission? read', result.hasPermission); }, function (err) { return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE); });
        // this.GetMyOffers();
    };
    OffersPage.prototype.ionViewWillEnter = function () {
        this.GetMyOffers();
    };
    OffersPage.prototype.GetMyOffers = function () {
        var _this = this;
        this.common.PostMethod("GetOffers", { b_id: new user_pipe_1.UserPipe().transform('b_id'), userid: localStorage.getItem("UserId"), usertype: new user_pipe_1.UserPipe().transform('usertype') }).then(function (res) {
            console.log(res);
            _this.lists.Myoffers = res.Data;
        });
    };
    OffersPage.prototype.ShareCoupon = function (ev) {
        var Message = ev.title + " \n Coupon Code:" + ev.couponcode + " \n Valid Till Date:" + new common_1.DatePipe('en-GB').transform(ev.enddate) + "\n Discount:" + (ev.discounttype == 'A' ? ev.discount + '<i class="fa fa-inr"></i>' : ev.discount + '%') + " \n " + ev.description + "\n Via-My Salon Zone App";
        console.log(Message);
        this.social.share(Message, 'My Salon Zone Coupon', [], '');
    };
    OffersPage.prototype.NotifiyMe = function () {
        var _this = this;
        this.common.PostMethod("NotifyMe", { b_id: new user_pipe_1.UserPipe().transform('b_id'), userid: localStorage.getItem("UserId"), type: 'Coupon' }).then(function (res) {
            _this.common.presentToast(res.Message, 4000);
        });
    };
    OffersPage.prototype.AddCoupon = function (Type) {
        localStorage.setItem('CreationType', Type);
        this.common.PageGoto('Forward', 'offers/offerndeal', { 'type': Type });
    };
    OffersPage.prototype.OpenCoupon = function (CouponData) {
        return __awaiter(this, void 0, void 0, function () {
            var env, custmodal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        env = this;
                        debugger;
                        return [4 /*yield*/, this.popUp.create({
                                component: coupon_details_page_1.CouponDetailsPage,
                                showBackdrop: true,
                                componentProps: CouponData
                            })];
                    case 1:
                        custmodal = _a.sent();
                        return [4 /*yield*/, custmodal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OffersPage.prototype.ScreenShot = function () {
        var RandNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        this.screenshot.save('jpg', 80, RandNumber + 'OfferImage').then(function (res) {
            console.log(res);
        });
    };
    OffersPage.prototype.downloadImage = function (ImageFullPath) {
        //   const fileTransfer: FileTransferObject = this.transfer.create();
        var RandNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        //   const url = ImageFullPath;
        //   fileTransfer.download(url, this.file.dataDirectory + RandNumber+'offerimage_.jpg').then((entry) => {
        //     console.log('download complete: ' + entry.toURL());
        //   }, (error) => {
        //     // handle error
        //   });
        // }
        var transfer = this.transfer.create();
        var url = ImageFullPath;
        var uri = encodeURI(url);
        var filepath = this.file.cacheDirectory + '/' + RandNumber + 'offerimage_.jpg';
        transfer.download(uri, filepath, true).then(function (entry) {
            console.log('download complete: ' + JSON.stringify(entry));
            var imageSrc = entry.toUrl();
            console.log(imageSrc);
        })["catch"](function (error) {
            console.log(JSON.stringify(error));
        });
    };
    OffersPage.prototype.CanvasSave = function (index) {
        window.canvas2ImagePlugin.saveImageDataToLibrary(function (msg) {
            console.log(msg);
        }, function (err) {
            console.log(err);
        }, document.getElementById('myCanvas_' + index));
    };
    OffersPage = __decorate([
        core_1.Component({
            selector: 'app-offers',
            templateUrl: './offers.page.html',
            styleUrls: ['./offers.page.scss']
        })
    ], OffersPage);
    return OffersPage;
}());
exports.OffersPage = OffersPage;
