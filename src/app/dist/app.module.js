"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var customdate_page_1 = require("./Modal/customdate/customdate.page");
var appointmenttimestatus_page_1 = require("./Modal/appointmenttimestatus/appointmenttimestatus.page");
var jobskeerinfo_page_1 = require("./Modal/jobskeerinfo/jobskeerinfo.page");
var contactlist_page_1 = require("./Extra/contactlist/contactlist.page");
var addtemplates_page_1 = require("./Modal/addtemplates/addtemplates.page");
var sharingpop_page_1 = require("./Modal/sharingpop/sharingpop.page");
var passwordreset_page_1 = require("./Modal/passwordreset/passwordreset.page");
var addexpense_page_1 = require("./Modal/addexpense/addexpense.page");
var cupons_page_1 = require("./Extra/cupons/cupons.page");
var successcheckout_page_1 = require("./Modal/successcheckout/successcheckout.page");
var acceptappointment_page_1 = require("./Modal/acceptappointment/acceptappointment.page");
var messagebox_page_1 = require("./Modal/messagebox/messagebox.page");
var cancelappointment_page_1 = require("./Modal/cancelappointment/cancelappointment.page");
var addcustomer_page_1 = require("./Modal/addcustomer/addcustomer.page");
var checkoutpop_page_1 = require("./Modal/checkoutpop/checkoutpop.page");
var addcustpop_page_1 = require("./Modal/addcustpop/addcustpop.page");
var material_module_1 = require("./material.module");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var angular_1 = require("@ionic/angular");
var ngx_1 = require("@ionic-native/splash-screen/ngx");
var ngx_2 = require("@ionic-native/status-bar/ngx");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/common/http");
var component_module_1 = require("./Components/component/component.module");
var modal_module_1 = require("./Modal/modal/modal.module");
var pipe_module_1 = require("./Pipes/pipe/pipe.module");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var otp_page_1 = require("./Modal/otp/otp.page");
var ngx_3 = require("@ionic-native/Camera/ngx");
var ngx_4 = require("@ionic-native/file/ngx");
var ngx_5 = require("@ionic-native/android-permissions/ngx");
var ng_otp_input_1 = require("ng-otp-input");
var ngx_6 = require("@ionic-native/sms/ngx");
var ngx_7 = require("@ionic-native/diagnostic/ngx");
var ngx_8 = require("@ionic-native/social-sharing/ngx");
var checkoutreceipt_page_1 = require("./Modal/checkoutreceipt/checkoutreceipt.page");
var ionic4_datepicker_1 = require("@logisticinfotech/ionic4-datepicker");
var ngx_9 = require("@ionic-native/file-opener/ngx");
var ngx_10 = require("@ionic-native/firebase-messaging/ngx");
var ngx_11 = require("@ionic-native/geolocation/ngx");
var ngx_12 = require("@ionic-native/contacts/ngx");
var ngx_13 = require("@ionic-native/in-app-browser/ngx");
var ng_pick_datetime_1 = require("ng-pick-datetime");
var ngx_14 = require("@ionic-native/deeplinks/ngx");
var bussiness_settings_page_1 = require("./Modal/bussiness-settings/bussiness-settings.page");
var ngx_15 = require("@ionic-native/file-transfer/ngx");
var coupon_details_page_1 = require("./Extra/coupon-details/coupon-details.page");
var ngx_16 = require("@ionic-native/screenshot/ngx");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, coupon_details_page_1.CouponDetailsPage, otp_page_1.OtpPage, bussiness_settings_page_1.BussinessSettingsPage, addcustpop_page_1.AddcustpopPage, checkoutpop_page_1.CheckoutpopPage, addcustomer_page_1.AddcustomerPage, cancelappointment_page_1.CancelappointmentPage, messagebox_page_1.MessageboxPage, acceptappointment_page_1.AcceptappointmentPage, successcheckout_page_1.SuccesscheckoutPage, checkoutreceipt_page_1.CheckoutreceiptPage, cupons_page_1.CuponsPage, addexpense_page_1.AddexpensePage, passwordreset_page_1.PasswordresetPage, sharingpop_page_1.SharingpopPage, addtemplates_page_1.AddtemplatesPage, contactlist_page_1.ContactlistPage, jobskeerinfo_page_1.JobskeerinfoPage, appointmenttimestatus_page_1.AppointmenttimestatusPage, customdate_page_1.CustomdatePage],
            entryComponents: [coupon_details_page_1.CouponDetailsPage, bussiness_settings_page_1.BussinessSettingsPage, otp_page_1.OtpPage, addcustpop_page_1.AddcustpopPage, checkoutpop_page_1.CheckoutpopPage, addcustomer_page_1.AddcustomerPage, cancelappointment_page_1.CancelappointmentPage, messagebox_page_1.MessageboxPage, acceptappointment_page_1.AcceptappointmentPage, successcheckout_page_1.SuccesscheckoutPage, checkoutreceipt_page_1.CheckoutreceiptPage, cupons_page_1.CuponsPage, addexpense_page_1.AddexpensePage, passwordreset_page_1.PasswordresetPage, sharingpop_page_1.SharingpopPage, addtemplates_page_1.AddtemplatesPage, contactlist_page_1.ContactlistPage, jobskeerinfo_page_1.JobskeerinfoPage, appointmenttimestatus_page_1.AppointmenttimestatusPage, customdate_page_1.CustomdatePage],
            imports: [platform_browser_1.BrowserModule, angular_1.IonicModule.forRoot(), app_routing_module_1.AppRoutingModule, material_module_1.MaterialModule, http_1.HttpClientModule,
                component_module_1.ComponentModule,
                modal_module_1.ModalModule,
                pipe_module_1.PipeModule,
                forms_1.FormsModule,
                ng_otp_input_1.NgOtpInputModule,
                forms_1.ReactiveFormsModule,
                ionic4_datepicker_1.Ionic4DatepickerModule,
                ng_pick_datetime_1.OwlDateTimeModule,
                ng_pick_datetime_1.OwlNativeDateTimeModule,
                animations_1.BrowserAnimationsModule,
            ],
            providers: [
                ngx_2.StatusBar,
                ngx_1.SplashScreen,
                ngx_5.AndroidPermissions,
                ngx_3.Camera,
                ngx_4.File,
                ngx_6.SMS,
                ngx_8.SocialSharing,
                ngx_7.Diagnostic,
                ngx_9.FileOpener,
                ngx_11.Geolocation,
                ngx_10.FirebaseMessaging,
                ngx_12.Contacts,
                ngx_14.Deeplinks,
                ngx_13.InAppBrowser,
                ngx_15.FileTransfer,
                ngx_16.Screenshot,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
