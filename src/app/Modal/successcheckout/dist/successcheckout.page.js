"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SuccesscheckoutPage = void 0;
var core_1 = require("@angular/core");
var pdfmake = require("pdfmake/build/pdfmake");
var pdfFonts = require("pdfmake/build/vfs_fonts");
var moment = require("moment");
var SuccesscheckoutPage = /** @class */ (function () {
    function SuccesscheckoutPage(common, modal, navParams, file) {
        this.common = common;
        this.modal = modal;
        this.navParams = navParams;
        this.file = file;
        this.lists = {};
        this.externalDataRetrievedFromServer = [];
    }
    SuccesscheckoutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.lists = this.navParams.data;
        this.lists.UserProfile = JSON.parse(localStorage.getItem("UserProfile"));
        this.common.GetMethod("GetProfileBase64?id=" + this.lists.UserProfile.b_id).then(function (res) {
            console.log("Success");
            _this.image = res.Data;
        });
    };
    SuccesscheckoutPage.prototype.BackModal = function () {
        this.modal.dismiss({ Status: true, finish: true });
    };
    SuccesscheckoutPage.prototype.close = function () {
        this.modal.dismiss({ Status: false });
    };
    SuccesscheckoutPage.prototype.totalamount = function () {
        if (this.lists.cost && this.lists.cost != '0' && this.lists.cost != 0) {
            return this.lists.cost;
        }
        else {
            return this.lists.Amount_PayableShow;
        }
    };
    SuccesscheckoutPage.prototype.CalculateCoreValue = function () {
        var total = 0;
        this.lists.serviceinfo.forEach(function (element) {
            total = parseInt(total) + parseInt(element.serviceprice);
        });
        return parseInt(total);
    };
    SuccesscheckoutPage.prototype.MessageCheckout = function () {
        this.MakeInvoice();
    };
    SuccesscheckoutPage.prototype.MakeInvoice_next = function () {
    };
    SuccesscheckoutPage.prototype.MakeInvoice = function () {
        var _this = this;
        var env = this;
        this.common.presentLoader();
        var ServicesCosting = this.CalculateCoreValue();
        var DiscountAVail = 0;
        var finalDiscount = '₹';
        if (Object.keys(env.lists.applycoupon).length != 0) {
            DiscountAVail = ServicesCosting - this.totalamount();
            finalDiscount = ' ₹';
            //finalDiscount = env.lists.applycoupon.discounttype == 'P' || env.lists.applycoupon.discounttype == 'Percent' ? ' %' : ' ₹';
            if (env.lists.applycoupon.type != 'Combo' && env.lists.applycoupon.type != 'Package') {
                var StringDicount_v = JSON.stringify(DiscountAVail);
                finalDiscount = StringDicount_v + '' + finalDiscount;
            }
        }
        if (this.lists.points_redeem && this.lists.points_redeem != 0 && this.lists.points_redeem != '0') {
            finalDiscount = this.lists.points_redeem + ' ₹';
        }
        this.externalDataRetrievedFromServer = [];
        this.lists.serviceinfo.forEach(function (element, index) {
            _this.externalDataRetrievedFromServer.push({ No: index + 1, Service: element.service, Price: element.serviceprice });
        });
        console.log(this.externalDataRetrievedFromServer);
        var today = new Date();
        var Profile = JSON.parse(localStorage.getItem("UserProfile"));
        var receiptname = this.splitname(Profile.Businessinfo.name);
        pdfmake.vfs = pdfFonts.pdfMake.vfs;
        var docDefinition = {
            content: [
                {
                    columns: [
                        {
                            image: this.image,
                            height: 100,
                            width: 100
                        },
                        [
                            { text: Profile.Businessinfo.name, style: 'header' },
                            { text: Profile.Businessaddressinfo.address + "," + Profile.Businessaddressinfo.statename + "," + Profile.Businessaddressinfo.cityname + "-" + Profile.Businessaddressinfo.pincode, style: 'sub_header' },
                            { text: '+91 ' + Profile.Businessinfo.mobileno, style: 'url' },
                        ]
                    ]
                },
                { text: "Receipt Date : " + moment(today).format("DD.MM.YYYY hh:mm a"), style: 'date' },
                { text: "Receipt No. : " + receiptname + "/" + moment(today).format("DD/MM/YYYY") + "/" + this.lists.billid, style: 'date' },
                { text: "Stylist Name : " + this.lists.employeeinfo.name },
                { text: "Customer Name : " + this.lists.customer_name },
                { text: 'Summary', style: 'statment', margin: [0, 10, 0, 10] },
                this.table(this.externalDataRetrievedFromServer, ['No', 'Service', 'Price']),
                {
                    table: {
                        widths: ['auto', 100],
                        body: [
                            ['Offer/Deal Applied', this.lists.couponCode || 'NA'],
                            ['Discount', finalDiscount],
                            ['Tax', '0%',],
                            ['Total Amount', this.totalamount()]
                        ]
                    },
                    alignment: 'right'
                }
            ],
            footer: {
                columns: [
                    { text: 'Receipt Generated by - My Salon Zone App', style: 'date', margin: [30, 0, 0, 0] }
                ]
            },
            styles: {
                header: {
                    bold: true,
                    fontSize: 16,
                    alignment: 'right'
                },
                sub_header: {
                    fontSize: 12,
                    alignment: 'right'
                },
                url: {
                    fontSize: 12,
                    alignment: 'right'
                },
                statment: {
                    bold: true,
                    fontSize: 16,
                    alignment: 'center'
                },
                date: {
                    fontSize: 12,
                    alignment: 'left'
                }
            },
            pageSize: 'A4',
            pageOrientation: 'portrait'
        };
        var binaryArray;
        pdfmake.createPdf(docDefinition).getBuffer(function (buffer) {
            var utf8 = new Uint8Array(buffer);
            binaryArray = utf8.buffer;
        });
        setTimeout(function () {
            _this.common.dismissLoader();
            _this.modal.dismiss({ Status: true, Data: binaryArray, finish: false, Info: _this.lists, filename: receiptname + "-" + moment(today).format("MM-YYYY") + "-" + _this.lists.billid });
        }, 2000);
    };
    SuccesscheckoutPage.prototype.buildTableBody = function (data, columns) {
        var body = [];
        body.push(columns);
        data.forEach(function (row) {
            var dataRow = [];
            columns.forEach(function (column) {
                dataRow.push(row[column].toString());
            });
            body.push(dataRow);
        });
        return body;
    };
    SuccesscheckoutPage.prototype.table = function (data, columns) {
        return {
            table: {
                headerRows: 1,
                widths: [100, '*', '*'],
                body: this.buildTableBody(data, columns)
            },
            margin: [0, 10, 0, 10]
        };
    };
    SuccesscheckoutPage.prototype.splitname = function (ev) {
        var character = ev.split(" ");
        var name = "";
        character.forEach(function (element) {
            name += element.slice(0, 1);
        });
        return name;
    };
    SuccesscheckoutPage = __decorate([
        core_1.Component({
            selector: 'app-successcheckout',
            templateUrl: './successcheckout.page.html',
            styleUrls: ['./successcheckout.page.scss']
        })
    ], SuccesscheckoutPage);
    return SuccesscheckoutPage;
}());
exports.SuccesscheckoutPage = SuccesscheckoutPage;
