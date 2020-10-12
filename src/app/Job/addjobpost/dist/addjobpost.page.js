"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddjobpostPage = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var moment = require("moment");
var user_pipe_1 = require("src/app/Pipes/pipe/user.pipe");
var AddjobpostPage = /** @class */ (function () {
    function AddjobpostPage(common, fb) {
        this.common = common;
        this.fb = fb;
        this.lists = {};
        this.GetMasterListData();
    }
    AddjobpostPage.prototype.ngOnInit = function () {
        var today = new Date();
        this.lists.today = new Date();
        var futureDate = moment(today).add(15, 'days');
        var jobend = new Date(futureDate);
        this.jobform = this.fb.group({
            title: new forms_1.FormControl('', forms_1.Validators.required),
            location: new forms_1.FormControl('', forms_1.Validators.required),
            description: new forms_1.FormControl(),
            experience: new forms_1.FormControl(),
            skills: new forms_1.FormControl(),
            lastdate: new forms_1.FormControl(jobend, forms_1.Validators.required),
            postdate: new forms_1.FormControl(),
            incentive: new forms_1.FormControl(),
            accommodation: new forms_1.FormControl()
        });
    };
    AddjobpostPage.prototype.submit = function () {
        var Data = {};
        Data = this.jobform.value;
        Data.position_type = this.lists.Category;
        Data.positon = this.lists.Type;
        Data.experience = this.lists.Experience;
        Data.salary = this.lists.salary;
        Data.userid = localStorage.getItem("UserId");
        Data.b_id = new user_pipe_1.UserPipe().transform("b_id");
        if (!Data.b_id) {
            Data.b_id = Data.userid;
        }
        Data.postdate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        Data.lastdate = moment(Data.lastdate).format("YYYY-MM-DD HH:mm:ss");
        Data.company_name = new user_pipe_1.UserPipe().transform('companyname');
        debugger;
        this.common.PageGoto('Forward', 'reviewjob', Data);
    };
    AddjobpostPage.prototype.GetMasterListData = function () {
        var _this = this;
        this.common.PostMethod("GetFilterData", { file: "master", name: "id", value: "1" }).then(function (res) {
            if (localStorage.getItem('language') == 'Hindi') {
                _this.lists.Jobtype = res.Data[0].ValueHi.split(',');
            }
            else {
                _this.lists.Jobtype = res.Data[0].Value.split(',');
            }
            _this.common.PostMethod("GetFilterData", { file: "master", name: "id", value: "9" }).then(function (res) {
                if (localStorage.getItem('language') == 'Hindi') {
                    _this.lists.JobCat = res.Data[0].ValueHi.split(',');
                }
                else {
                    _this.lists.JobCat = res.Data[0].Value.split(',');
                }
                _this.common.PostMethod("GetFilterData", { file: "master", name: "id", value: "6" }).then(function (res) {
                    if (localStorage.getItem('language') == 'Hindi') {
                        _this.lists.exp = res.Data[0].ValueHi.split(',');
                    }
                    else {
                        _this.lists.exp = res.Data[0].Value.split(',');
                    }
                    _this.common.PostMethod("GetFilterData", { file: "master", name: "id", value: "10" }).then(function (res) {
                        if (localStorage.getItem('language') == 'Hindi') {
                            _this.lists.sal = res.Data[0].ValueHi.split(',');
                        }
                        else {
                            _this.lists.sal = res.Data[0].Value.split(',');
                        }
                    });
                });
            });
        });
    };
    AddjobpostPage.prototype.Check = function (Type, ev, Data) {
        if (!this.lists[Type]) {
            this.lists[Type] = "";
        }
        if (ev.detail.checked) {
            this.lists[Type] += Data + ",";
        }
        else {
            var str = this.lists[Type];
            this.lists[Type] = str.replace(Data + ",", '');
        }
    };
    AddjobpostPage = __decorate([
        core_1.Component({
            selector: 'app-addjobpost',
            templateUrl: './addjobpost.page.html',
            styleUrls: ['./addjobpost.page.scss']
        })
    ], AddjobpostPage);
    return AddjobpostPage;
}());
exports.AddjobpostPage = AddjobpostPage;
