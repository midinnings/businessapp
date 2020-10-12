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
exports.CustomerlistPage = void 0;
var user_pipe_1 = require("src/app/Pipes/pipe/user.pipe");
var core_1 = require("@angular/core");
var addcustomer_page_1 = require("src/app/Modal/addcustomer/addcustomer.page");
var contactlist_page_1 = require("src/app/Extra/contactlist/contactlist.page");
var messagebox_page_1 = require("src/app/Modal/messagebox/messagebox.page");
var CustomerlistPage = /** @class */ (function () {
    function CustomerlistPage(camera, common, modal) {
        this.camera = camera;
        this.common = common;
        this.modal = modal;
        this.lists = {};
    }
    CustomerlistPage.prototype.ngOnInit = function () {
        this.GetCustomerList();
    };
    CustomerlistPage.prototype.GetCustomerList = function () {
        var _this = this;
        this.common.presentLoader();
        this.common.PostMethod("GetCustomerList", { b_id: new user_pipe_1.UserPipe().transform('b_id') }).then(function (res) {
            _this.lists.Customerlist = res.Data;
            _this.common.dismissLoader();
        }, function (err) {
            _this.common.dismissLoader();
        });
    };
    CustomerlistPage.prototype.SearchCustomer = function (ev) {
        var _this = this;
        this.common.PostMethod("SearchCustomer", { b_id: new user_pipe_1.UserPipe().transform('b_id'), Search: ev }).then(function (res) {
            _this.lists.Customerlist = res.Data;
        });
    };
    CustomerlistPage.prototype.AddCustomer = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var custmodal, data, contactmodal, data_1, custmodal_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: addcustomer_page_1.AddcustomerPage,
                            cssClass: 'addcustomer',
                            showBackdrop: true,
                            componentProps: ev || {}
                        })];
                    case 1:
                        custmodal = _a.sent();
                        return [4 /*yield*/, custmodal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, custmodal.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (!data.contactbook) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.modal.create({
                                component: contactlist_page_1.ContactlistPage,
                                showBackdrop: true
                            })];
                    case 4:
                        contactmodal = _a.sent();
                        return [4 /*yield*/, contactmodal.present()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, contactmodal.onWillDismiss()];
                    case 6:
                        data_1 = (_a.sent()).data;
                        if (!data_1.status) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.modal.create({
                                component: addcustomer_page_1.AddcustomerPage,
                                cssClass: 'addcustomer',
                                showBackdrop: true,
                                componentProps: data_1.Data
                            })];
                    case 7:
                        custmodal_1 = _a.sent();
                        return [4 /*yield*/, custmodal_1.present()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        this.GetCustomerList();
                        this.lists.search = "";
                        _a.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    CustomerlistPage.prototype.editcustomer = function (ev) {
        ev.edit = true;
        console.log(ev);
        this.AddCustomer(ev);
    };
    CustomerlistPage.prototype.selectImage = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.common.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.PHOTOLIBRARY, id);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.pickImage(_this.camera.PictureSourceType.CAMERA, id);
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerlistPage.prototype.pickImage = function (sourceType, id) {
        var _this = this;
        var options = {
            quality: 50,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.lists.Image = 'data:image/jpeg;base64,' + imageData;
            _this.common.PostMethod("FileUpload", { file: _this.lists.Image }).then(function (res) {
                // this.Businessform1.controls['logo'].setValue(res.file);
                _this.UpdateProfileImage({ logo: res.file, id: id });
            });
        }, function (err) {
            // Handle error
        });
    };
    CustomerlistPage.prototype.UpdateProfileImage = function (ev) {
        var _this = this;
        this.common.PostMethod("UpdateCustomerlogo", { logo: ev.logo, id: ev.id }).then(function (res) {
            if (res.Status == 1) {
                _this.GetCustomerList();
            }
            _this.common.presentToast(res.Message, 4000);
        });
    };
    CustomerlistPage.prototype.mailcustomer = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: messagebox_page_1.MessageboxPage,
                            cssClass: 'addcustomer',
                            showBackdrop: true,
                            componentProps: { customer_name: ev.name, contactno: ev.mobile }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomerlistPage = __decorate([
        core_1.Component({
            selector: 'app-customerlist',
            templateUrl: './customerlist.page.html',
            styleUrls: ['./customerlist.page.scss']
        })
    ], CustomerlistPage);
    return CustomerlistPage;
}());
exports.CustomerlistPage = CustomerlistPage;
