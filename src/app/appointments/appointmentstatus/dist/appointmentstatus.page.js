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
exports.AppointmentstatusPage = void 0;
var user_pipe_1 = require("./../../Pipes/pipe/user.pipe");
var acceptappointment_page_1 = require("./../../Modal/acceptappointment/acceptappointment.page");
var core_1 = require("@angular/core");
var cancelappointment_page_1 = require("src/app/Modal/cancelappointment/cancelappointment.page");
var AppointmentstatusPage = /** @class */ (function () {
    function AppointmentstatusPage(common, modal, inmessage) {
        var _this = this;
        this.common = common;
        this.modal = modal;
        this.inmessage = inmessage;
        this.eventSource = [];
        this.calendar = {
            locale: 'en-GB',
            mode: 'month',
            currentDate: new Date()
        };
        this.lists = {};
        this.subscription = this.inmessage.getMessage().subscribe(function (res) {
            if (res.Page == "Dashboard") {
                _this.GetAppointments();
            }
        });
    }
    AppointmentstatusPage.prototype.ngOnInit = function () {
        this.common.presentLoader();
        this.GetAppointments();
    };
    AppointmentstatusPage.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AppointmentstatusPage.prototype.onEventSelected = function (ev) {
        console.log(ev);
    };
    AppointmentstatusPage.prototype.onViewTitleChanged = function (ev) {
        console.log(ev);
        this.lists.title = ev;
    };
    AppointmentstatusPage.prototype.onTimeSelected = function (ev) {
        console.log(ev);
    };
    AppointmentstatusPage.prototype.GetAppointments = function () {
        var _this = this;
        var userid = 0;
        if (localStorage.getItem("UserType") != '2' && localStorage.getItem("UserType") != '6') {
            userid = localStorage.getItem("UserId");
        }
        this.common.PostMethod("AppointmentStatusWise", { appointmentstatus: "Waiting", userid: userid, b_id: new user_pipe_1.UserPipe().transform('b_id') }).then(function (res) {
            _this.lists.appointmentlist = res.Data;
            _this.common.dismissLoader();
        });
    };
    AppointmentstatusPage.prototype.CancelAppointment = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: cancelappointment_page_1.CancelappointmentPage,
                            cssClass: 'addcustomer',
                            showBackdrop: true,
                            componentProps: ev
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data.Status) {
                            this.common.presentLoader();
                            this.common.PostMethod("UpdateData", { file: 'appointment', name: 'id', value: ev.id, updatename: 'appointmentstatus', updatevalue: 'Cancel' }).then(function (res) {
                                if (res.Status == 1) {
                                    _this.common.GetMethod('StatusNotification?id=' + ev.id);
                                    _this.GetAppointments();
                                    setTimeout(function () {
                                        _this.inmessage.sendMessage("Dasboard", "Dashboard");
                                    }, 100);
                                }
                                _this.common.dismissLoader();
                                _this.common.presentToast(res.Message, 4000);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AppointmentstatusPage.prototype.EditAppointment = function (ev) {
        this.common.PageGoto('Forward', 'appointments', ev);
    };
    AppointmentstatusPage.prototype.AcceptAppointment = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: acceptappointment_page_1.AcceptappointmentPage,
                            cssClass: 'addcustomer',
                            showBackdrop: true,
                            componentProps: ev
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data.Status) {
                            this.common.presentLoader();
                            this.common.PostMethod("UpdateData", { file: 'appointment', name: 'id', value: ev.id, updatename: 'appointmentstatus', updatevalue: 'Confirm' }).then(function (res) {
                                if (res.Status == 1) {
                                    _this.common.GetMethod('StatusNotification?id=' + ev.id);
                                    _this.GetAppointments();
                                    setTimeout(function () {
                                        _this.inmessage.sendMessage("Dashboard", "Dashboard");
                                    }, 100);
                                }
                                _this.common.dismissLoader();
                                _this.common.presentToast(res.Message, 4000);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AppointmentstatusPage = __decorate([
        core_1.Component({
            selector: 'app-appointmentstatus',
            templateUrl: './appointmentstatus.page.html',
            styleUrls: ['./appointmentstatus.page.scss']
        })
    ], AppointmentstatusPage);
    return AppointmentstatusPage;
}());
exports.AppointmentstatusPage = AppointmentstatusPage;
