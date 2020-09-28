"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewsdetailsPage = void 0;
var striphtml_pipe_1 = require("./../../Pipes/striphtml.pipe");
var core_1 = require("@angular/core");
var limitto_pipe_1 = require("src/app/Pipes/limitto.pipe");
var NewsdetailsPage = /** @class */ (function () {
    function NewsdetailsPage(sanitize, router, common, social) {
        this.sanitize = sanitize;
        this.router = router;
        this.common = common;
        this.social = social;
        this.lists = {};
    }
    NewsdetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (res) {
            _this.lists = res.Data;
        });
    };
    NewsdetailsPage.prototype.Sharenews = function () {
        var _this = this;
        this.common.presentLoader();
        var message = new striphtml_pipe_1.StriphtmlPipe().transform(this.lists.news);
        message = new limitto_pipe_1.LimittoPipe().transform(message, 120);
        var file = [encodeURI(this.common.Url + 'Files/' + this.lists.coverimage)];
        // url = this.common.Website + 'news_single.html?type=App&id=' + this.lists.id;
        var TitleProcessed = this.lists.title.replace(/-/gi, '_');
        TitleProcessed = TitleProcessed.replace(/\s/g, '-');
        var url = this.common.Website + 'news/latest/' + TitleProcessed;
        message = this.lists.title + "\n\n" + message;
        this.social.share(message, this.lists.title, file, url).then(function (res) {
            _this.common.dismissLoader();
        })["catch"](function (y) {
            _this.common.dismissLoader();
        });
    };
    NewsdetailsPage = __decorate([
        core_1.Component({
            selector: 'app-newsdetails',
            templateUrl: './newsdetails.page.html',
            styleUrls: ['./newsdetails.page.scss']
        })
    ], NewsdetailsPage);
    return NewsdetailsPage;
}());
exports.NewsdetailsPage = NewsdetailsPage;
