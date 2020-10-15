"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginPage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginPage = /** @class */ (function () {
    function LoginPage(router, valid, common, menu, Fb) {
        this.router = router;
        this.valid = valid;
        this.common = common;
        this.menu = menu;
        this.Fb = Fb;
        this.lists = {};
        this.lists.passwordtype = "password";
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loginform = this.Fb.group({
            mobile: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(10), forms_1.Validators.maxLength(10)])),
            password: new forms_1.FormControl('', forms_1.Validators.required)
        });
        this.router.queryParams.subscribe(function (res) {
            if (res.Message) {
                _this.common.BasicAlert("Alert!", "", res.Message);
            }
        });
        this.lists.language = localStorage.getItem("language") || "English";
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.swipeEnable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menu.swipeEnable(true);
    };
    LoginPage.prototype.Login = function () {
        var _this = this;
        this.common.presentLoader();
        this.loginform.value.token = localStorage.getItem("FCMToken");
        this.common.PostMethod("login", this.loginform.value).then(function (res) {
            if (res.Status == 1 && res.Data.usertype != 3) {
                //this.common.presentToast(res.Message, 4000);
                res.Data.usertype = parseInt(res.Data.usertype);
                localStorage.setItem("UserId", res.Data.id);
                localStorage.setItem("UserProfile", JSON.stringify(res.Data));
                localStorage.setItem("UserType", res.Data.usertype);
                localStorage.setItem("language", res.Data.language);
                _this.common.dismissLoader();
                _this.common.PageGoto("Root", "/app/tabs/dashboard");
            }
            else {
                _this.common.dismissLoader();
                _this.common.presentToast(res.Message, 4000);
            }
        });
    };
    LoginPage.prototype.Openpopup = function () {
        this.stylistselect.open();
    };
    LoginPage.prototype.ChangeLanguage = function () {
        localStorage.setItem("language", this.lists.language);
    };
    __decorate([
        core_1.ViewChild('stylistselect', { static: false })
    ], LoginPage.prototype, "stylistselect");
    LoginPage = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss']
        })
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
