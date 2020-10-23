"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomerhistoryPage = void 0;
var core_1 = require("@angular/core");
var user_pipe_1 = require("src/app/Pipes/pipe/user.pipe");
var CustomerhistoryPage = /** @class */ (function () {
    function CustomerhistoryPage(common) {
        this.common = common;
        this.lists = {};
    }
    CustomerhistoryPage.prototype.ngOnInit = function () {
        this.lists.Usertype = localStorage.getItem('UserType');
        this.lists.UserId = localStorage.getItem('UserId');
        this.lists.employee_id = '';
        if (this.lists.Usertype == '1') {
            this.lists.employee_id = this.lists.UserId;
        }
        this.GetCustomerHistory();
    };
    CustomerhistoryPage.prototype.GetCustomerHistory = function () {
        var _this = this;
        this.common.PostMethod("GetCustomerHistory", { employee_id: this.lists.employee_id, b_id: new user_pipe_1.UserPipe().transform('b_id') }).then(function (res) {
            _this.lists.customerlist = res.Data;
        });
    };
    CustomerhistoryPage.prototype.SearchCustomer = function (ev) {
        var _this = this;
        this.common.PostMethod("GetCustomerHistory", { employee_id: this.lists.employee_id, b_id: new user_pipe_1.UserPipe().transform('b_id'), search: ev }).then(function (res) {
            _this.lists.customerlist = res.Data;
        });
    };
    CustomerhistoryPage = __decorate([
        core_1.Component({
            selector: 'app-customerhistory',
            templateUrl: './customerhistory.page.html',
            styleUrls: ['./customerhistory.page.scss']
        })
    ], CustomerhistoryPage);
    return CustomerhistoryPage;
}());
exports.CustomerhistoryPage = CustomerhistoryPage;
