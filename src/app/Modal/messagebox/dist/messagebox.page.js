"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MessageboxPage = void 0;
var user_pipe_1 = require("./../../Pipes/pipe/user.pipe");
var core_1 = require("@angular/core");
var MessageboxPage = /** @class */ (function () {
    function MessageboxPage(common, modal, navParams) {
        this.common = common;
        this.modal = modal;
        this.navParams = navParams;
        this.lists = {};
    }
    MessageboxPage.prototype.ngOnInit = function () {
        this.lists = this.navParams.data;
    };
    MessageboxPage.prototype.close = function () {
        this.modal.dismiss({ Status: false });
    };
    MessageboxPage.prototype.SendSms = function () {
        var _this = this;
        // this.sms.send(this.lists.contactno, this.lists.message).then(res => {
        //   this.common.presentToast('SMS Send Successfully', 4000);
        // }).catch(y => {
        //   this.modal.dismiss();
        // });
        this.common.PostMethod("SendCustomerMessage", { b_id: new user_pipe_1.UserPipe().transform("b_id"), mobile: this.lists.contactno, message: this.lists.message + " -via My Salon Zone App" }).then(function (res) {
            if (res.Status == 1) {
                _this.modal.dismiss();
            }
            _this.common.presentToast(res.Message, 4000);
        });
    };
    MessageboxPage = __decorate([
        core_1.Component({
            selector: 'app-messagebox',
            templateUrl: './messagebox.page.html',
            styleUrls: ['./messagebox.page.scss']
        })
    ], MessageboxPage);
    return MessageboxPage;
}());
exports.MessageboxPage = MessageboxPage;
