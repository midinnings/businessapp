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
exports.ManualPage = void 0;
var common_1 = require("@angular/common");
var user_pipe_1 = require("./../../Pipes/pipe/user.pipe");
var cupons_page_1 = require("./../../Extra/cupons/cupons.page");
var checkoutreceipt_page_1 = require("./../../Modal/checkoutreceipt/checkoutreceipt.page");
var successcheckout_page_1 = require("./../../Modal/successcheckout/successcheckout.page");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var ManualPage = /** @class */ (function () {
    function ManualPage(social, file, inmessage, modal, common, router, fb, navCtrl) {
        this.social = social;
        this.file = file;
        this.inmessage = inmessage;
        this.modal = modal;
        this.common = common;
        this.router = router;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.eventSource = [];
        this.calendar = {
            locale: 'en-GB',
            mode: 'month',
            currentDate: new Date()
        };
        this.lists = {};
        this.DiscountValues = {};
        this.Final_DiscountAvail = 0;
        this.Amount_PayableShow = 0;
        this.CustomCoupon = '';
        this.AppliedCoupon = '';
        this.Points_Redeemed = false;
    }
    ManualPage.prototype.ngOnInit = function () {
        var _this = this;
        this.common.presentLoader();
        this.lists.serviceinfo = [];
        this.lists.Discount = 0;
        this.lists.employeeinfo = {};
        this.lists.DiscountType = "P";
        this.lists.applycoupon = {};
        this.checkoutform = this.fb.group({
            name: new forms_1.FormControl('', forms_1.Validators.required),
            mobile: new forms_1.FormControl('', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(10), forms_1.Validators.minLength(10)])),
            couponCode: new forms_1.FormControl()
        });
        this.lists.Old = false;
        this.router.queryParams.subscribe(function (res) {
            if (res.id) {
                _this.lists.Old = true;
                var object = Object.keys(res);
                object.forEach(function (element) {
                    _this.lists[element] = res[element];
                });
                if (_this.lists.service) {
                    _this.lists.service = JSON.parse(_this.lists.service);
                }
                if (_this.lists.service.length == 0) {
                    _this.lists.PackageApplied = true;
                }
                if (_this.lists.coupon_id && _this.lists.coupon_id != '') {
                    _this.GetOfferData(_this.lists.coupon_id);
                }
                _this.checkoutform.controls['name'].setValue(res.customer_name);
                _this.checkoutform.controls['mobile'].setValue(res.contactno);
            }
        });
        setTimeout(function () {
            _this.GetServiceList();
            _this.GetEmployeelist();
            if (_this.lists.PackageApplied) {
                _this.PackageDiscount(_this.lists);
            }
        }, 200);
    };
    ManualPage.prototype.GetOfferData = function (offer_id) {
        var _this = this;
        var env = this;
        this.common.PostMethod("GetFilterData", { file: "offer", name: "id", value: offer_id }).then(function (res) {
            var Data = res.Data[0];
            if (Data) {
                if (Data.type == 'Flat' || Data.type == 'OnService') {
                    setTimeout(function () {
                        _this.CustomCoupon = Data.couponcode;
                        env.ApplyDiscountConcession(Data);
                    }, 3000);
                }
            }
        });
    };
    ManualPage.prototype.onEventSelected = function (ev) {
        console.log(ev);
    };
    ManualPage.prototype.onViewTitleChanged = function (ev) {
        this.lists.title = ev;
    };
    ManualPage.prototype.onTimeSelected = function (ev) {
        console.log(ev);
    };
    ManualPage.prototype.GetServiceList = function () {
        var _this = this;
        this.common.PostMethod("GetFilterData", { file: "ub_service", name: "userid", value: new user_pipe_1.UserPipe().transform('b_id') }).then(function (res) {
            _this.lists.servicelist = res.Data;
            _this.totalamount();
        });
    };
    ManualPage.prototype.GetEmployeelist = function () {
        var _this = this;
        this.common.PostMethod("GetFilterData", { file: "userlogin", name: "b_id", value: new user_pipe_1.UserPipe().transform('b_id') }).then(function (res) {
            _this.lists.userlist = res.Data;
            _this.ChangeStylist(_this.lists);
        });
    };
    ManualPage.prototype.totalamount = function () {
        var price = 0;
        if (this.lists.serviceinfo) {
            this.lists.serviceinfo.forEach(function (element) {
                price = parseInt(price) + parseInt(element.serviceprice);
            });
            this.TempPrice = price;
        }
        //this.lists.payableamount = (parseInt(price) - parseInt(this.lists.Discount));
        //return (parseInt(price) - parseInt(this.lists.Discount));
        this.lists.price = price;
        if (this.lists.applycoupon.type) {
            this.lists.Discount = this.lists.Discount = (this.lists.price * (this.lists.applycoupon.type / 100));
            this.lists.Discount = parseInt(this.lists.Discount);
        }
        this.lists.payableamount = price;
        this.Amount_PayableShow = price;
        if (this.lists.points_redeem && this.lists.points_redeem != 0 && this.lists.points_redeem != '0') {
            this.lists.payableamount = this.Amount_PayableShow = this.Amount_PayableShow - parseInt(this.lists.points_redeem);
            this.Points_Redeemed = true;
        }
        this.Final_DiscountAvail = 0;
        this.CustomCoupon = '';
        // reset discount value--------------------------
        return (this.lists.price);
    };
    ManualPage.prototype.AddmoreService = function () {
        this.serviceselect.open();
    };
    ManualPage.prototype.selectedservice = function (ev) {
        console.log(ev);
    };
    ManualPage.prototype.Openstylst = function () {
        this.stylistselect.open();
    };
    ManualPage.prototype.Changeservicelist = function (ev) {
        var _this = this;
        var env = this;
        this.lists.serviceinfo = [];
        ev.detail.value.forEach(function (element) {
            _this.lists.servicelist.forEach(function (data) {
                if (data.serviceid == element) {
                    _this.lists.serviceinfo.push(data);
                }
            });
        });
        setTimeout(function () {
            env.totalamount();
        }, 500);
    };
    ManualPage.prototype.SubmitCheckout = function () {
        var _this = this;
        this.common.Confirm("Are you Sure You Want to Checkout this Appointment?", function (res) {
            if (res) {
                _this.common.presentLoader();
                var service_1 = [];
                _this.lists.serviceinfo.forEach(function (element) {
                    service_1.push(element.serviceid);
                });
                // Send Update Cost when changed costing from business app-----------------------
                _this.lists.updatecost = null;
                if (_this.lists.payableamount && _this.lists.payableamount != 0) {
                    _this.lists.updatecost = _this.lists.payableamount;
                }
                else {
                    _this.lists.updatecost = _this.lists.cost;
                }
                _this.lists.checkout_app = 'business';
                if (!_this.lists.Old) {
                    _this.lists.services = JSON.stringify(service_1);
                    var Data = {
                        customer_name: _this.checkoutform.value.name,
                        userid: localStorage.getItem("UserId"),
                        b_id: new user_pipe_1.UserPipe().transform('b_id'),
                        contactno: _this.checkoutform.value.mobile,
                        email: '',
                        salon: new user_pipe_1.UserPipe().transform('Businessinfo')['name'],
                        gender: _this.lists.gender,
                        service: _this.lists.services,
                        prefeerddate: new common_1.DatePipe('en-GB').transform(_this.calendar.currentDate, 'yyyy-MM-dd') + ' ' + new common_1.DatePipe('en-GB').transform(_this.calendar.currentDate, 'hh:mm:ss a'),
                        comments: 'MANUAL CHECKOUT BY ' + new user_pipe_1.UserPipe().transform('name'),
                        employee: _this.lists.employee,
                        appointmentstatus: 'Confirm',
                        checkout_app: 'business'
                    };
                    _this.lists.customer_name = _this.checkoutform.value.name;
                    _this.lists.contactno = _this.checkoutform.value.mobile;
                    _this.common.PostMethod("CreateAppointment", Data).then(function (res) {
                        if (res.Data) {
                            _this.lists.id = res.Data;
                            _this.lists.userid = localStorage.getItem("UserId");
                            _this.lists.b_id = new user_pipe_1.UserPipe().transform('b_id');
                            _this.common.PostMethod("CompleteCheckout", _this.lists).then(function (resu) {
                                _this.lists.billid = resu.CheckoutId;
                                _this.common.dismissLoader();
                                _this.inmessage.sendMessage("Check Start Service", "Dashboard");
                                _this.OpenSucessCheckout();
                            });
                            _this.common.presentToast(res.Message, 4000);
                        }
                    });
                }
                else {
                    _this.lists.services = JSON.stringify(service_1);
                    _this.common.PostMethod("CompleteCheckout", _this.lists).then(function (resu) {
                        _this.lists.billid = resu.CheckoutId;
                        _this.common.dismissLoader();
                        _this.inmessage.sendMessage("Check Start Service", "Dashboard");
                        _this.common.presentToast(resu.Message, 4000);
                        _this.OpenSucessCheckout();
                    });
                }
            }
        });
    };
    ManualPage.prototype.OpenSucessCheckout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var custmodal, data, receipt, rdata, filename_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.lists.Amount_PayableShow = this.Amount_PayableShow;
                        this.common.GetMethod('StatusNotification?id=' + this.lists.id);
                        return [4 /*yield*/, this.modal.create({
                                component: checkoutreceipt_page_1.CheckoutreceiptPage,
                                cssClass: 'checkoutreceipt',
                                showBackdrop: true,
                                componentProps: this.lists
                            })];
                    case 1:
                        custmodal = _a.sent();
                        return [4 /*yield*/, custmodal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, custmodal.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (!data.Status) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.modal.create({
                                component: successcheckout_page_1.SuccesscheckoutPage,
                                cssClass: 'successcheckout',
                                showBackdrop: true,
                                componentProps: this.lists
                            })];
                    case 4:
                        receipt = _a.sent();
                        return [4 /*yield*/, receipt.present()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, receipt.onWillDismiss()];
                    case 6:
                        rdata = _a.sent();
                        if (rdata.data.Status) {
                            if (!rdata.data.finish) {
                                filename_1 = rdata.data.filename + ".pdf";
                                this.file.writeFile(this.file.externalRootDirectory + "MSZApp/", filename_1, rdata.data.Data, { replace: true }).then(function (result) {
                                    _this.social.share("Your Salon Receipt via-My Salon Zone", "Receipt", [_this.file.externalRootDirectory + "MSZApp/" + filename_1], "");
                                });
                            }
                            if (!this.lists.Old) {
                                this.checkoutform.reset();
                                this.lists.serviceinfo = [];
                                this.lists.employeeinfo = {};
                                this.lists.PaymentMode = "";
                                this.navCtrl.navigateBack('/app/tabs/dashboard');
                            }
                            else {
                                this.checkoutform.reset();
                                this.lists.serviceinfo = [];
                                this.lists.employeeinfo = {};
                                this.lists.PaymentMode = "";
                                this.navCtrl.back();
                            }
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ManualPage.prototype.GotoBack = function () {
        this.navCtrl.back();
    };
    ManualPage.prototype.ServiceCheck = function (ev) {
        console.log(ev);
    };
    ManualPage.prototype.SearchCustomer = function (ev) {
        var _this = this;
        if (ev.length > 2) {
            this.common.PostMethod("SearchCustomer", { Search: ev, b_id: new user_pipe_1.UserPipe().transform('b_id') }).then(function (res) {
                _this.lists.Customerlist = res.Data;
            });
        }
    };
    ManualPage.prototype.SelectedCustomer = function (ev) {
        var _this = this;
        this.checkoutform.controls['name'].setValue(ev.name);
        this.checkoutform.controls['mobile'].setValue(ev.mobile);
        this.lists.gender = ev.gender;
        setTimeout(function () {
            _this.lists.Customerlist = [];
        }, 200);
    };
    ManualPage.prototype.ChangeStylist = function (ev) {
        var _this = this;
        if (typeof this.lists.employeeinfo == "string") {
            var EmployeeData = this.lists.userlist.filter(function (i) { return i.id == _this.lists.employee; });
            if (EmployeeData) {
                if (typeof this.lists.employeeinfo == "string") {
                    this.lists.employeeinfo = {};
                }
                this.lists.employeeinfo.name = EmployeeData[0].name;
                return;
            }
        }
        this.lists.userlist.forEach(function (element) {
            if (element.id == ev.detail.value) {
                _this.lists.employeeinfo.name = element.name;
                return false;
            }
        });
    };
    ManualPage.prototype.OpenCoupon = function () {
        return __awaiter(this, void 0, void 0, function () {
            var env, custmodal, data, msg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.common.presentToast('Offers/Deals not available....', 2000);
                        return [2 /*return*/];
                    case 1:
                        custmodal = _a.sent();
                        if (!(this.lists.service.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, custmodal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, custmodal.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        if (data.status) {
                            this.ApplyDiscountConcession(data.Data);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        msg = "please add one service to activate Coupons";
                        this.common.presentToast(msg, 1000);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ManualPage.prototype.ApplyDiscountConcession = function (DataCoupon) {
        //Remove functionality for now-----------------
        console.log(DataCoupon);
        var values = this.DiscountValues = DataCoupon;
        this.lists.applycoupon = values;
        this.lists.couponCode = values.couponcode;
        if (values.type == 'OnService' || values.type == 'Flat') {
            this.DirectDiscount(values);
        }
        else {
            this.common.presentToast('Please select a valid offer applicable on services..', 2000);
        }
        // this.book.controls['couponCode'].setValue(values.couponcode);
        // Apply Check by Percentage or Direct Cost Cutting--------------
        // if (values.discounttype == 'A') {
        //   this.lists.Discount = parseInt(values.discount);
        // }
        // else if (values.discounttype == 'P') {
        //   this.lists.Discount = (this.lists.price * (parseInt(values.discount) / 100));
        // }
        // else {
        //   let msg = "Coupon is not valid or expired..";
        //   this.common.presentToast(msg, 2000);
        //   return;
        // }
        // Apply Date Check Now--------------------------------------------
        // if (!this.dateCheck(values.startdate, values.enddate)) {
        //   let msg = "Coupon is expired..";
        //   this.common.presentToast(msg, 2000);
        //   return;
        // }
        // this.CustomCoupon = this.lists.couponCode;
        // this.Final_DiscountAvail = this.lists.Discount = parseInt(this.lists.Discount);
        // this.Amount_PayableShow = this.lists.payableamount = this.lists.price - this.lists.Discount;
    };
    ManualPage.prototype.DirectDiscount = function (values) {
        var SelectedServices = this.lists.service;
        if (SelectedServices.length == 0) {
            this.common.presentToast('Please select services to proceed..', 2000);
            return;
        }
        if (values.discounttype == 'Amount') {
            this.lists.Discount = parseInt(values.discount);
        }
        else if (values.discounttype == 'Percent') {
            this.lists.Discount = (this.lists.price * (parseInt(values.discount) / 100));
        }
        else {
            this.common.presentToast("Coupon is not valid or expired..", 2000);
            return;
        }
        // Apply Date Check Now--------------------------------------------
        if (!this.dateCheck(values.startdate, values.enddate)) {
            this.common.presentToast("Coupon is expired..", 2000);
            return;
        }
        //---Applying Discount on Flat or service basis----------------------------------------
        if (this.DiscountValues.type == 'OnService') {
            var CountServices = SelectedServices.length;
            this.AppliedCoupon = this.lists.couponCode;
            this.lists.Discount = parseInt(this.lists.Discount);
            this.Final_DiscountAvail = CountServices * this.lists.Discount;
            this.Amount_PayableShow = this.lists.price - this.Final_DiscountAvail;
            this.lists.payableamount = this.Amount_PayableShow;
        }
        else if (this.DiscountValues.type == 'Flat') {
            this.AppliedCoupon = this.lists.couponCode;
            this.Final_DiscountAvail = this.lists.Discount = parseInt(this.lists.Discount);
            this.Amount_PayableShow = this.lists.price - this.lists.Discount;
            this.lists.payableamount = this.Amount_PayableShow;
        }
    };
    ManualPage.prototype.ApplyCoupon = function () {
        var _this = this;
        this.common.presentToast('Offers/Deals not available....', 2000);
        return;
        var data = { file: 'offer', name: 'couponcode', value: this.CustomCoupon };
        this.common.PostMethod("GetFilterData", data).then(function (res) {
            console.log(res);
            if (res.Status == 1) {
                if (res.Data.length != 0) {
                    var CouponExtractData = res.Data[0];
                    _this.ApplyDiscountConcession(CouponExtractData);
                }
                else {
                    var msg = "Coupon Code is not valid..";
                    _this.common.presentToast(msg, 2000);
                }
            }
            else {
                var msg = "Coupon Code is not valid..";
                _this.common.presentToast(msg, 2000);
            }
        });
    };
    ManualPage.prototype.PackageDiscount = function (values) {
        var _this = this;
        var data = { file: 'offer', name: 'id', value: this.lists.coupon_id };
        this.common.PostMethod("GetFilterData", data).then(function (res) {
            if (res.Status == 1) {
                if (res.Data[0].services) {
                    var ServiceIds = res.Data[0].services.split(',');
                    _this.lists.packageservicelist = [];
                    ServiceIds.forEach(function (element) {
                        var ServiceFound = _this.lists.servicelist.filter(function (i) { return i.serviceid == element; });
                        if (ServiceFound) {
                            _this.lists.packageservicelist.push(ServiceFound[0]);
                        }
                    });
                }
            }
        });
        // Applying package discounts and making other service carges-----------------
    };
    // totalamount() {
    //   let env = this;
    //   let price: number = 0;
    //   if (this.book.value.service) {
    //     console.log(this.book.value.service);
    //     this.book.value.service.forEach(function (ServiceId, index) {
    //       var resServiceObject = env.lists.servicelist.filter(function (item) {
    //         return item.serviceid == ServiceId;
    //       });
    //       if (resServiceObject[0]) { price = price + parseInt(resServiceObject[0].serviceprice); } else { price = 0; }
    //     });
    //   }
    //   this.lists.price = price;
    //   // if (this.lists.applycoupon.type) {
    //   //   this.lists.Discount = this.lists.Discount = (this.lists.price * (this.lists.applycoupon.type / 100));
    //   //   this.lists.Discount = parseInt(this.lists.Discount);
    //   // }
    //   this.lists.payableamount = price;
    //   this.Amount_PayableShow = price;
    //   return (this.lists.price);
    // }
    ManualPage.prototype.dateCheck = function (from, to) {
        var fDate, lDate, cDate;
        fDate = Date.parse(from);
        lDate = Date.parse(to);
        cDate = Date.parse(new Date().toJSON().slice(0, 10));
        if ((cDate <= lDate && cDate >= fDate)) {
            return true;
        }
        return false;
    };
    __decorate([
        core_1.ViewChild('serviceselect', { static: false })
    ], ManualPage.prototype, "serviceselect");
    __decorate([
        core_1.ViewChild('stylistselect', { static: false })
    ], ManualPage.prototype, "stylistselect");
    ManualPage = __decorate([
        core_1.Component({
            selector: 'app-manual',
            templateUrl: './manual.page.html',
            styleUrls: ['./manual.page.scss']
        })
    ], ManualPage);
    return ManualPage;
}());
exports.ManualPage = ManualPage;
