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
exports.DailyledgerPage = void 0;
var customdate_page_1 = require("./../../Modal/customdate/customdate.page");
var addexpense_page_1 = require("./../../Modal/addexpense/addexpense.page");
var user_pipe_1 = require("src/app/Pipes/pipe/user.pipe");
var core_1 = require("@angular/core");
var moment = require("moment");
var DailyledgerPage = /** @class */ (function () {
    function DailyledgerPage(common, modal) {
        this.common = common;
        this.modal = modal;
        this.lists = {};
        this.filterbystaff = '';
        this.StaffList = [];
        this.EmployeeSelected = '';
        this.Usertype = '';
    }
    DailyledgerPage.prototype.ngOnInit = function () {
        this.Usertype = localStorage.getItem('UserType');
        this.Type = "Daily";
        this.lists.Sales = [];
        this.lists.Expenses = [];
        this.GetDailyLedger();
        this.GetStylist();
    };
    DailyledgerPage.prototype.FilterByStaff = function (emp_id) {
        this.EmployeeSelected = emp_id;
        this.GetDailyLedger();
        // this.common.PostMethod("DailyLedger", {
        //   b_id: new UserPipe().transform('b_id'),
        //   bystaff: true,
        //   employee_id: emp_id
        // }).then((res: any) => {
        //   this.lists = res.Data;
        // });
    };
    DailyledgerPage.prototype.GetStylist = function () {
        var _this = this;
        this.common.PostMethod("GetFilterData", { file: "userlogin", name: "b_id", value: new user_pipe_1.UserPipe().transform('b_id') }).then(function (res) {
            _this.StaffList = res.Data;
        });
    };
    DailyledgerPage.prototype.GetDailyLedger = function () {
        var _this = this;
        if (this.Usertype == '1') {
            this.EmployeeSelected = localStorage.getItem('UserId');
        }
        if (this.Type == "Custom") {
            this.Customdateopen();
        }
        else {
            var fromdate = new Date();
            var todate = new Date();
            if (this.Type == 'Weekly') {
                fromdate = moment(fromdate).subtract(7, 'days');
            }
            if (this.Type == 'Monthly') {
                fromdate = moment(fromdate).subtract(30, 'days');
            }
            this.common.PostMethod("DailyLedger", {
                b_id: new user_pipe_1.UserPipe().transform('b_id'),
                from: moment(fromdate).format('YYYY-MM-DD'),
                to: moment(todate).format('YYYY-MM-DD'),
                employee_id: this.EmployeeSelected
            }).then(function (res) {
                _this.lists = res.Data;
            });
        }
    };
    DailyledgerPage.prototype.TotalSales = function () {
        var _this = this;
        var Total = 0;
        this.lists.Sales.forEach(function (element) {
            if (element.cost && element.cost != '') {
                Total = parseInt(Total) + parseInt(element.cost);
            }
            else {
                Total = parseInt(Total) + _this.SimpleTotalCount(element);
            }
        });
        return Total;
    };
    DailyledgerPage.prototype.SimpleTotalCount = function (data) {
        var price = 0;
        if (data.service) {
            (data.service).forEach(function (element) {
                price = parseInt(price) + parseInt(element.serviceprice);
            });
            return price;
        }
        else {
            return "";
        }
    };
    DailyledgerPage.prototype.TotalExpense = function () {
        var Total = 0;
        this.lists.Expenses.forEach(function (element) {
            Total = parseInt(Total) + parseInt(element.amount);
        });
        return Total;
    };
    DailyledgerPage.prototype.AddExpenses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: addexpense_page_1.AddexpensePage,
                            cssClass: 'addcustomer',
                            showBackdrop: true
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
                            this.GetDailyLedger();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DailyledgerPage.prototype.Customdateopen = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({
                            component: customdate_page_1.CustomdatePage,
                            cssClass: 'addcustomer',
                            showBackdrop: true
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data.status) {
                            this.common.PostMethod("DailyLedger", {
                                b_id: new user_pipe_1.UserPipe().transform('b_id'),
                                from: moment(data.fromdate).format('YYYY-MM-DD'),
                                to: moment(data.todate).format('YYYY-MM-DD')
                            }).then(function (res) {
                                _this.lists = res.Data;
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DailyledgerPage = __decorate([
        core_1.Component({
            selector: 'app-dailyledger',
            templateUrl: './dailyledger.page.html',
            styleUrls: ['./dailyledger.page.scss']
        })
    ], DailyledgerPage);
    return DailyledgerPage;
}());
exports.DailyledgerPage = DailyledgerPage;
