"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var news_page_1 = require("./Extra/news/news.page");
var event_page_1 = require("./Extra/event/event.page");
var blog_page_1 = require("./Extra/blog/blog.page");
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, diagno, fcmmessage, file, deeplinks, common) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.diagno = diagno;
        this.fcmmessage = fcmmessage;
        this.file = file;
        this.deeplinks = deeplinks;
        this.common = common;
        this.initializeApp();
    }
    AppComponent.prototype.HideSplash = function () {
        var env = this;
        setTimeout(function () {
            env.splashScreen.hide();
        }, 2000);
    };
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        var env = this;
        this.platform.ready().then(function () {
            _this.statusBar.backgroundColorByHexString('#c73130');
            _this.HideSplash();
            _this.diagno.requestRuntimePermissions([_this.diagno.permission.CAMERA, _this.diagno.permission.WRITE_EXTERNAL_STORAGE, _this.diagno.permission.READ_EXTERNAL_STORAGE]).then(function (res) {
                console.log(res);
            })["catch"](function (y) {
                console.log(y);
            });
            _this.fcmmessage.GetToken();
            _this.fcmmessage.GetForgroundMessage();
            _this.fcmmessage.GetBackgroundMessage();
            _this.file.checkDir(_this.file.externalRootDirectory, "MSZApp")["catch"](function (res) {
                _this.file.createDir(_this.file.externalRootDirectory, "MSZApp", false);
            });
            env.deeplinks.route({
                '/': {},
                '/news': news_page_1.NewsPage,
                '/event': event_page_1.EventPage,
                '/blog': blog_page_1.BlogPage,
                //New Routes ----------------------
                '/news/latest/:title': news_page_1.NewsPage,
                '/event/latest/:title': event_page_1.EventPage,
                '/blog/latest/:title': blog_page_1.BlogPage
            }).subscribe(function (match) {
                env.NavigateDeepLink(match);
                console.log('Successfully matched route', match);
            }, function (nomatch) {
                console.error('Got a deeplink that didn\'t match', nomatch);
            });
        });
    };
    AppComponent.prototype.NavigateDeepLink = function (Match) {
        debugger;
        var Path = Match.$link.url;
        if (Path) {
            if (Path.includes('blog/')) {
                var Title = Path.split('blog/latest/')[1];
                this.GetDatabyTitle(Title, 'blog', 'title', 'blogdetail');
            }
            else if (Path.includes('news/')) {
                var Title = Path.split('news/latest/')[1];
                this.GetDatabyTitle(Title, 'news', 'title', 'newsdetails');
                //  this.common.PageGoto('Forward', 'newsdetails', { Data: DataPass, Type: Event });
            }
            else if (Path.includes('event/')) {
                var Title = Path.split('event/latest/')[1];
                this.GetDatabyTitle(Title, 'event', 'eventname', 'enddetails');
                //  this.common.PageGoto('Forward', 'enddetails', { Data: DataPass, Type: Event });
            }
        }
    };
    AppComponent.prototype.GetDatabyTitle = function (Title, File, Col, Page) {
        var env = this;
        Title = Title.replace(/-/g, " ");
        Title = Title.replace(/_/g, "-");
        var data = { file: File, name: Col, value: Title || 0 };
        this.common.PostMethod("GetFilterData", data).then(function (res) {
            console.log(res);
            if (res.Status == 1) {
                env.common.PageGoto('Forward', Page, { Data: res.Data[0], Type: Event });
            }
            else {
                return {};
            }
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.common.presentLoader();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
