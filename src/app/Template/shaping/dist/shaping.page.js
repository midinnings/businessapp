"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShapingPage = void 0;
var core_1 = require("@angular/core");
var dom_to_image_chrome_fix_1 = require("dom-to-image-chrome-fix");
var ShapingPage = /** @class */ (function () {
    function ShapingPage(sanitizer, navCtrl, common, camera, file, routes) {
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.common = common;
        this.camera = camera;
        this.file = file;
        this.routes = routes;
        this.lists = {};
        this.templatedata = {};
        this.lists.mytemplate = {};
        this.lists["class"] = "sparallelogram";
    }
    ShapingPage.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.queryParams.subscribe(function (res) {
            _this.lists.occassion = res.occassion;
            for (var property in res) {
                _this.templatedata[property] = res[property];
            }
        });
        this.GetTemplates();
    };
    ShapingPage.prototype.sanitizeFun = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    ShapingPage.prototype.SelectImage = function () {
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
    ShapingPage.prototype.ChangeClass = function (ev) {
        this.lists["class"] = ev;
    };
    ShapingPage.prototype.toDataURL = function (url, callback) {
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
    ShapingPage.prototype.GetTemplates = function () {
        var _this = this;
        var data = {};
        debugger;
        if (this.lists.occassion) {
            data = { occassion: this.lists.occassion };
        }
        this.common.PostMethod("GetDefaultTemplate", data).then(function (res) {
            if (res.Data.length == 0) {
                _this.common.presentToast('No template found for ' + _this.lists.occassion + '', 3000);
                _this.GetTemplates_All();
            }
            else {
                _this.lists.defaulttemplates = res.Data;
                _this.lists.defaulttemplates.forEach(function (element) {
                    element.textsetting = JSON.parse(element.textsetting);
                });
            }
        });
    };
    ShapingPage.prototype.exportImage = function () {
        var _this = this;
        var env = this;
        this.common.presentLoader();
        this.slider.getActiveIndex().then(function (res) {
            localStorage.setItem('TempBackgroundPath', env.lists.defaulttemplates[res].backgroundimageurl);
            dom_to_image_chrome_fix_1["default"].toPng(document.getElementById(res))
                .then(function (blob) {
                _this.common.PostMethod("FileUpload", { file: blob }).then(function (result) {
                    _this.common.dismissLoader();
                    console.log(_this.templatedata);
                    _this.templatedata['imageurl'] = result.file;
                    _this.common.PageGoto('Forward', 'offers/offerreview', _this.templatedata);
                });
            });
        });
    };
    ShapingPage.prototype.GetTemplates_All = function () {
        var _this = this;
        this.common.PostMethod("GetDefaultTemplate", {}).then(function (res) {
            _this.lists.defaulttemplates = res.Data;
            _this.lists.defaulttemplates.forEach(function (element) {
                element.textsetting = JSON.parse(element.textsetting);
            });
        });
    };
    __decorate([
        core_1.ViewChild('testSlider', null)
    ], ShapingPage.prototype, "slider");
    ShapingPage = __decorate([
        core_1.Component({
            selector: 'app-shaping',
            templateUrl: './shaping.page.html',
            styleUrls: ['./shaping.page.scss']
        })
    ], ShapingPage);
    return ShapingPage;
}());
exports.ShapingPage = ShapingPage;
