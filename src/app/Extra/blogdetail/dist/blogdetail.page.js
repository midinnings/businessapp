"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BlogdetailPage = void 0;
var limitto_pipe_1 = require("./../../Pipes/limitto.pipe");
var striphtml_pipe_1 = require("./../../Pipes/striphtml.pipe");
var core_1 = require("@angular/core");
var BlogdetailPage = /** @class */ (function () {
    function BlogdetailPage(social, common, router) {
        this.social = social;
        this.common = common;
        this.router = router;
        this.lists = {};
    }
    BlogdetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.router.queryParams.subscribe(function (res) {
            _this.lists = res.Data;
        });
    };
    BlogdetailPage.prototype.Shareblog = function () {
        var _this = this;
        this.common.presentLoader();
        var message = new striphtml_pipe_1.StriphtmlPipe().transform(this.lists.description);
        message = new limitto_pipe_1.LimittoPipe().transform(message, 120);
        var file = [encodeURI(this.common.Url + 'Files/' + this.lists.coverImage)];
        //let url = this.common.Website + 'blog_single.html?type=App&id=' + this.lists.id;
        var TitleProcessed = this.lists.title.replace(/-/gi, '_');
        TitleProcessed = TitleProcessed.replace(/\s/g, '-');
        var url = this.common.Website + 'blog/latest/' + TitleProcessed;
        console.log(file);
        message = this.lists.title + "\n\n" + message;
        this.social.share(message, this.lists.title, file, url).then(function (res) {
            _this.common.dismissLoader();
        })["catch"](function (y) {
            _this.common.dismissLoader();
        });
    };
    BlogdetailPage = __decorate([
        core_1.Component({
            selector: 'app-blogdetail',
            templateUrl: './blogdetail.page.html',
            styleUrls: ['./blogdetail.page.scss']
        })
    ], BlogdetailPage);
    return BlogdetailPage;
}());
exports.BlogdetailPage = BlogdetailPage;
