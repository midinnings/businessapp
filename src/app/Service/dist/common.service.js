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
exports.CommonService = void 0;
var core_1 = require("@angular/core");
var CommonService = /** @class */ (function () {
    function CommonService(inapp, actionSheetController, navCtrl, http, toastController, alertController, loadingController) {
        this.inapp = inapp;
        this.actionSheetController = actionSheetController;
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastController = toastController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        //public Url:any = "http://192.168.0.120/mysalonzone/api/public/";  
        // Url: any = "http://localhost/mysalone/public/";
        // public Url: any = "http://mysalonzone.in/staging/public/";
        this.Url = "http://api.mysalonzone.in/";
        this.Website = "http://mysalonzone.in/";
        this.isLoading = false;
    }
    CommonService.prototype.GetMethod = function (MapUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.Url + MapUrl).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CommonService.prototype.PostMethod = function (MapUrl, Data) {
        var _this = this;
        console.log(MapUrl, Data);
        return new Promise(function (resolve, reject) {
            _this.http
                .post(_this.Url + MapUrl, Data)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CommonService.prototype.MeesageSend = function (MapUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get(MapUrl)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    CommonService.prototype.presentToast = function (Message, Timer) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: Message,
                            duration: Timer,
                            position: "bottom"
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonService.prototype.BasicAlert = function (Header, Subtitle, Message, Buttons) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: Header,
                            subHeader: Subtitle,
                            message: "" + Message,
                            buttons: Buttons || ["Ok"]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonService.prototype.presentLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController.create({
                                duration: 5000,
                                spinner: "circles",
                                message: "Please Wait..."
                            }).then(function (a) {
                                a.present().then(function () {
                                    console.log('presented');
                                    if (!_this.isLoading) {
                                        a.dismiss().then(function () { return console.log('abort presenting'); });
                                    }
                                });
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommonService.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = false;
                        return [4 /*yield*/, this.loadingController.dismiss().then(function () { return console.log('dismissed'); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CommonService.prototype.PageGoto = function (Type, Page, Data) {
        if (!Data) {
            Data = {};
        }
        var Options = {
            queryParams: Data
        };
        if (Type == 'Forward') {
            this.navCtrl.navigateForward("/" + Page, Options);
        }
        if (Type == 'Root') {
            this.navCtrl.navigateRoot("/" + Page, Options);
        }
    };
    CommonService.prototype.Base64toblob = function (b64Data) {
        var contentType = 'image/png';
        var sliceSize = 512;
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    CommonService.prototype.fileUpload = function (ev, Callback) {
        console.log(ev);
        var file = new FormData();
        file.append('file', ev);
        this.PostMethod("RawFile", file).then(function (res) {
            console.log(res);
            if (res.Status == 1) {
                Callback({ Status: true, filename: res.Filename });
            }
            else {
                Callback({ Status: false });
            }
        });
    };
    CommonService.prototype.Confirm = function (Message, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirm!',
                            message: Message,
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                        callback(true);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                        callback(false);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonService.prototype.OpenUrl = function (url, isinapp) {
        isinapp = parseInt(isinapp);
        if (isinapp) {
            this.navCtrl.navigateForward("/" + url);
        }
        else {
            this.inapp.create(url, '_self', 'location=no');
        }
    };
    CommonService.prototype.SplitTime = function (DateTime_V) {
        if (DateTime_V) {
            var TimeOnly = DateTime_V.split(' ')[1];
            var Phase = DateTime_V.split(' ')[2];
            if (TimeOnly) {
                return TimeOnly + ' ' + Phase;
            }
            else {
                return '00:00:00';
            }
        }
        else {
            return '00:00:00';
        }
    };
    CommonService.prototype.dateCheck = function (from, to) {
        var fDate, lDate, cDate;
        fDate = Date.parse(from);
        lDate = Date.parse(to);
        cDate = Date.parse(new Date().toJSON().slice(0, 10));
        if ((cDate <= lDate && cDate >= fDate)) {
            return true;
        }
        return false;
    };
    CommonService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CommonService);
    return CommonService;
}());
exports.CommonService = CommonService;
