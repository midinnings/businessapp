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
exports.ShapingWishesPage = void 0;
var core_1 = require("@angular/core");
var dom_to_image_chrome_fix_1 = require("dom-to-image-chrome-fix");
var ShapingWishesPage = /** @class */ (function () {
    function ShapingWishesPage(transfer, sanitizer, navCtrl, common, camera, file, routes) {
        this.transfer = transfer;
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.common = common;
        this.camera = camera;
        this.file = file;
        this.routes = routes;
        this.fileTransfer = this.transfer.create();
        this.lists = {};
        this.templatedata = {};
        this.BackgroundTemplateSelected = '';
        this.lists.mytemplate = {};
        this.lists["class"] = "sparallelogram";
    }
    ShapingWishesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.queryParams.subscribe(function (res) {
            for (var property in res) {
                _this.templatedata[property] = res[property];
            }
            _this.GetTemplates();
        });
        this.getBase64ImageFromUrl('https://cdn.hasselblad.com/hasselblad-com/6cb604081ef3086569319ddb5adcae66298a28c5_x1d-ii-sample-01-web.jpg?auto=format&q=97')
            .then(function (result) { console.log('image console.log(result)', result); })["catch"](function (err) { return console.error(err); });
        setTimeout(function () {
            _this.downloadFile();
        }, 2000);
    };
    ShapingWishesPage.prototype.sanitizeFun = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    ShapingWishesPage.prototype.SelectImage = function () {
        var _this = this;
        var options = {
            quality: 50,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true,
            targetHeight: 300,
            targetWidth: 800
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.lists.BackgroundImage = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            console.log(err);
        });
    };
    ShapingWishesPage.prototype.ChangeClass = function (ev) {
        this.lists["class"] = ev;
    };
    ShapingWishesPage.prototype.toDataURL = function (url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };
    ShapingWishesPage.prototype.GetTemplates = function () {
        var _this = this;
        this.common.PostMethod("GetDefaultTemplate", { 'occassion': this.templatedata.SelectedOccasion }).then(function (res) {
            _this.lists.defaulttemplates = res.Data;
            _this.lists.defaulttemplates.forEach(function (element) {
                element.textsetting = JSON.parse(element.textsetting);
            });
            if (res.Data.length == 0) {
                _this.common.presentToast('No template found for ' + _this.templatedata.SelectedOccasion + '', 3000);
                _this.GetTemplates_All();
            }
            // this.lists.mytemplate = res.Data[res.Data.length - 1];
            // this.lists.mytemplate.textsetting = JSON.parse(this.lists.mytemplate.textsetting);
        });
    };
    ShapingWishesPage.prototype.GetTemplates_All = function () {
        var _this = this;
        this.common.PostMethod("GetDefaultTemplate", {}).then(function (res) {
            _this.lists.defaulttemplates = res.Data;
            _this.lists.defaulttemplates.forEach(function (element) {
                element.textsetting = JSON.parse(element.textsetting);
            });
            // this.lists.mytemplate = res.Data[res.Data.length - 1];
            // this.lists.mytemplate.textsetting = JSON.parse(this.lists.mytemplate.textsetting);
        });
    };
    ShapingWishesPage.prototype.exportImage = function () {
        var env = this;
        // this.common.presentLoader();
        this.slider.getActiveIndex().then(function (res) {
            env.BackgroundTemplateSelected = env.lists.defaulttemplates[res].backgroundimageurl;
            dom_to_image_chrome_fix_1["default"].toPng(document.getElementById(res))
                .then(function (blob) {
                env.SaveNow(blob);
            });
        });
    };
    ShapingWishesPage.prototype.SaveNow = function (blob) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.common.alertController.create({
                            header: 'Please Confirm',
                            message: 'Are you sure? do you want to share this wish to your Salon Customers!',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Save & Share',
                                    handler: function () {
                                        console.log('save clicked');
                                        _this.common.PostMethod("FileUpload", { file: blob }).then(function (result) {
                                            _this.common.dismissLoader();
                                            console.log(_this.templatedata);
                                            _this.templatedata['imageurl'] = result.file;
                                            //this.common.PageGoto('Forward', 'offers/offerreview', this.templatedata);
                                            // Save Template Now ----------------------------------
                                            _this.templatedata.type = 'Wishes';
                                            _this.templatedata.backgroundImage = _this.BackgroundTemplateSelected;
                                            _this.common.PostMethod("CreateOffer", _this.templatedata).then(function (res) {
                                                _this.common.dismissLoader();
                                                if (res.Status == 1) {
                                                    _this.common.presentToast('Festival Wish Created Successfully', 4000);
                                                }
                                                else {
                                                    _this.common.presentToast(res.Message, 4000);
                                                }
                                            }, function (err) {
                                            });
                                            //----------End------------------------------------------
                                        }, function (err) {
                                        });
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
    ShapingWishesPage.prototype.getBase64ImageFromUrl = function (imageUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var res, blob;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(imageUrl)];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.blob()];
                    case 2:
                        blob = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var reader = new FileReader();
                                reader.addEventListener("load", function () {
                                    resolve(reader.result);
                                }, false);
                                reader.onerror = function () {
                                    return reject(_this);
                                };
                                reader.readAsDataURL(blob);
                            })];
                }
            });
        });
    };
    ShapingWishesPage.prototype.downloadFile = function () {
        var url = 'https://cdn.hasselblad.com/hasselblad-com/6cb604081ef3086569319ddb5adcae66298a28c5_x1d-ii-sample-01-web.jpg';
        this.fileTransfer.download(url, this.file.dataDirectory + 'webpngsampl.pdf').then(function (entry) {
            console.log('download complete: ' + entry.toURL());
        }, function (error) {
            // handle error
        });
    };
    __decorate([
        core_1.ViewChild('testSlider', null)
    ], ShapingWishesPage.prototype, "slider");
    ShapingWishesPage = __decorate([
        core_1.Component({
            selector: 'app-shaping-wishes',
            templateUrl: './shaping-wishes.page.html',
            styleUrls: ['./shaping-wishes.page.scss']
        })
    ], ShapingWishesPage);
    return ShapingWishesPage;
}());
exports.ShapingWishesPage = ShapingWishesPage;
