"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EndetailsPage = void 0;
var striphtml_pipe_1 = require("./../../Pipes/striphtml.pipe");
var core_1 = require("@angular/core");
var limitto_pipe_1 = require("src/app/Pipes/limitto.pipe");
var EndetailsPage = /** @class */ (function () {
    function EndetailsPage(santize, share, router, common) {
        this.santize = santize;
        this.share = share;
        this.router = router;
        this.common = common;
        this.lists = {};
    }
    EndetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (res) {
            _this.lists = res.Data;
            if (_this.lists.eventvidoe) {
                _this.lists.eventvidoe = _this.santize.bypassSecurityTrustResourceUrl(_this.lists.eventvidoe);
            }
        });
    };
    EndetailsPage.prototype.Shareevent = function () {
        var _this = this;
        this.common.presentLoader();
        var message = new striphtml_pipe_1.StriphtmlPipe().transform(this.lists.description);
        message = new limitto_pipe_1.LimittoPipe().transform(message, 120);
        var file = [encodeURI(this.common.Url + 'Files/' + this.lists.coverImage)];
        //let url = this.common.Website + 'event_single.html?type=App&id=' + this.lists.id;
        var TitleProcessed = this.lists.eventname.replace(/-/gi, '_');
        TitleProcessed = TitleProcessed.replace(/\s/g, '-');
        var url = this.common.Website + 'blog/latest/' + TitleProcessed;
        message = this.lists.eventname + "\n\n" + new limitto_pipe_1.LimittoPipe().transform(message, 120);
        this.share.share(message, this.lists.eventname + ' Starting at ' + this.lists.startdatetime, file, url).then(function (res) {
            _this.common.dismissLoader();
        })["catch"](function (y) {
            _this.common.dismissLoader();
        });
    };
    EndetailsPage = __decorate([
        core_1.Component({
            selector: 'app-endetails',
            templateUrl: './endetails.page.html',
            styleUrls: ['./endetails.page.scss']
        })
    ], EndetailsPage);
    return EndetailsPage;
}());
exports.EndetailsPage = EndetailsPage;
