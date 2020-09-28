"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authguard_service_1 = require("./Service/authguard.service");
var routes = [
    {
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./tab1/tab1.module'); }).then(function (m) { return m.Tab1PageModule; }); },
        canActivate: [authguard_service_1.AuthguardService]
    },
    {
        path: 'app',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./tabs/tabs.module'); }).then(function (m) { return m.TabsPageModule; }); },
        canActivate: [authguard_service_1.AuthguardService]
    },
    { path: 'login', loadChildren: './User/login/login.module#LoginPageModule' },
    { path: 'forgot', loadChildren: './User/forgot/forgot.module#ForgotPageModule' },
    { path: 'register', loadChildren: './User/register/register.module#RegisterPageModule' },
    { path: 'businessregister', loadChildren: './User/busniessregister/busniessregister.module#BusniessregisterPageModule' },
    { path: 'stylistregister', loadChildren: './User/stylistregister/stylistregister.module#StylistregisterPageModule' },
    { path: 'addjobpost', loadChildren: './Job/addjobpost/addjobpost.module#AddjobpostPageModule' },
    { path: 'joblisting', loadChildren: './Job/joblisting/joblisting.module#JoblistingPageModule' },
    { path: 'jobdetail', loadChildren: './Job/jobdetail/jobdetail.module#JobdetailPageModule' },
    { path: 'oldprofile', loadChildren: './SidebarOption/profile/profile.module#ProfilePageModule' },
    { path: 'aboutus', loadChildren: './SidebarOption/aboutus/aboutus.module#AboutusPageModule' },
    { path: 'contactus', loadChildren: './SidebarOption/contactus/contactus.module#ContactusPageModule' },
    { path: 'otp', loadChildren: './Modal/otp/otp.module#OtpPageModule' },
    { path: 'detail', loadChildren: './User/detail/detail.module#DetailPageModule' },
    {
        path: 'businessprofile',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Business/businessprofile/businessprofile.module'); }).then(function (m) { return m.BusinessprofilePageModule; }); }
    },
    {
        path: 'pastemployee',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Job/pastemployee/pastemployee.module'); }).then(function (m) { return m.PastemployeePageModule; }); }
    },
    {
        path: 'addcustpop',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/addcustpop/addcustpop.module'); }).then(function (m) { return m.AddcustpopPageModule; }); }
    },
    {
        path: 'checkoutpop',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/checkoutpop/checkoutpop.module'); }).then(function (m) { return m.CheckoutpopPageModule; }); }
    },
    {
        path: 'appointments',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./appointments/appointments.module'); }).then(function (m) { return m.AppointmentsPageModule; }); }
    },
    {
        path: 'addcustomer',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/addcustomer/addcustomer.module'); }).then(function (m) { return m.AddcustomerPageModule; }); }
    },
    {
        path: 'reviewjob',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Job/reviewjob/reviewjob.module'); }).then(function (m) { return m.ReviewjobPageModule; }); }
    },
    {
        path: 'businessmanager',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Business/businessmanager/businessmanager.module'); }).then(function (m) { return m.BusinessmanagerPageModule; }); }
    },
    {
        path: 'customermanager',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Customer/customermanager/customermanager.module'); }).then(function (m) { return m.CustomermanagerPageModule; }); }
    },
    {
        path: 'customerlist',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Customer/customerlist/customerlist.module'); }).then(function (m) { return m.CustomerlistPageModule; }); }
    },
    {
        path: 'manual',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Checkout/manual/manual.module'); }).then(function (m) { return m.ManualPageModule; }); }
    },
    {
        path: 'event',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/event/event.module'); }).then(function (m) { return m.EventPageModule; }); }
    },
    {
        path: 'offers',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/offers/offers.module'); }).then(function (m) { return m.OffersPageModule; }); }
    },
    {
        path: 'customerhistory',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Customer/customerhistory/customerhistory.module'); }).then(function (m) { return m.CustomerhistoryPageModule; }); }
    },
    {
        path: 'cancelappointment',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/cancelappointment/cancelappointment.module'); }).then(function (m) { return m.CancelappointmentPageModule; }); }
    },
    {
        path: 'messagebox',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/messagebox/messagebox.module'); }).then(function (m) { return m.MessageboxPageModule; }); }
    },
    {
        path: 'acceptappointment',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/acceptappointment/acceptappointment.module'); }).then(function (m) { return m.AcceptappointmentPageModule; }); }
    },
    {
        path: 'news',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/news/news.module'); }).then(function (m) { return m.NewsPageModule; }); }
    },
    {
        path: 'endetails',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/endetails/endetails.module'); }).then(function (m) { return m.EndetailsPageModule; }); }
    },
    {
        path: 'checkout',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/checkout/checkout.module'); }).then(function (m) { return m.CheckoutPageModule; }); }
    },
    {
        path: 'report',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/report/report.module'); }).then(function (m) { return m.ReportPageModule; }); }
    },
    {
        path: 'dailyledger',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/dailyledger/dailyledger.module'); }).then(function (m) { return m.DailyledgerPageModule; }); }
    },
    {
        path: 'appliedjob',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Job/appliedjob/appliedjob.module'); }).then(function (m) { return m.AppliedjobPageModule; }); }
    },
    {
        path: 'openjob',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Job/openjob/openjob.module'); }).then(function (m) { return m.OpenjobPageModule; }); }
    },
    {
        path: 'festivalnvishes',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/festivalnvishes/festivalnvishes.module'); }).then(function (m) { return m.FestivalnvishesPageModule; }); }
    },
    {
        path: 'stylistnotify',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/stylistnotify/stylistnotify.module'); }).then(function (m) { return m.StylistnotifyPageModule; }); }
    },
    {
        path: 'successcheckout',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/successcheckout/successcheckout.module'); }).then(function (m) { return m.SuccesscheckoutPageModule; }); }
    },
    {
        path: 'featuredjob',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Job/featuredjob/featuredjob.module'); }).then(function (m) { return m.FeaturedjobPageModule; }); }
    },
    {
        path: 'blog',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/blog/blog.module'); }).then(function (m) { return m.BlogPageModule; }); }
    },
    {
        path: 'blogdetail',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/blogdetail/blogdetail.module'); }).then(function (m) { return m.BlogdetailPageModule; }); }
    },
    {
        path: 'newsdetails',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/newsdetails/newsdetails.module'); }).then(function (m) { return m.NewsdetailsPageModule; }); }
    },
    {
        path: 'checkoutreceipt',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/checkoutreceipt/checkoutreceipt.module'); }).then(function (m) { return m.CheckoutreceiptPageModule; }); }
    },
    {
        path: 'cupons',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/cupons/cupons.module'); }).then(function (m) { return m.CuponsPageModule; }); }
    },
    {
        path: 'manage-employee',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Employee/manage-employee/manage-employee.module'); }).then(function (m) { return m.ManageEmployeePageModule; }); }
    },
    {
        path: 'templatemanager',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Template/templatemanager/templatemanager.module'); }).then(function (m) { return m.TemplatemanagerPageModule; }); }
    },
    {
        path: 'employeelist',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Employee/employeelist/employeelist.module'); }).then(function (m) { return m.EmployeelistPageModule; }); }
    },
    // {
    //   path: 'reviewrating',
    //   loadChildren: () => import('./reviewrating/reviewrating.module').then( m => m.ReviewratingPageModule)
    // },
    {
        path: 'findcandidate',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Employee/findcandidate/findcandidate.module'); }).then(function (m) { return m.FindcandidatePageModule; }); }
    },
    {
        path: 'thankyouusms',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/thankyouusms/thankyouusms.module'); }).then(function (m) { return m.ThankyouusmsPageModule; }); }
    },
    {
        path: 'services',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/services/services.module'); }).then(function (m) { return m.ServicesPageModule; }); }
    },
    {
        path: 'employeermanagment',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Myemployeer/employeermanagment/employeermanagment.module'); }).then(function (m) { return m.EmployeermanagmentPageModule; }); }
    },
    {
        path: 'applieduser',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Job/applieduser/applieduser.module'); }).then(function (m) { return m.ApplieduserPageModule; }); }
    },
    {
        path: 'attendance',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Myemployeer/attendance/attendance.module'); }).then(function (m) { return m.AttendancePageModule; }); }
    },
    {
        path: 'applicantdetail',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Job/applicantdetail/applicantdetail.module'); }).then(function (m) { return m.ApplicantdetailPageModule; }); }
    },
    {
        path: 'addexpense',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/addexpense/addexpense.module'); }).then(function (m) { return m.AddexpensePageModule; }); }
    },
    {
        path: 'passwordreset',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/passwordreset/passwordreset.module'); }).then(function (m) { return m.PasswordresetPageModule; }); }
    },
    {
        path: 'sharingpop',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/sharingpop/sharingpop.module'); }).then(function (m) { return m.SharingpopPageModule; }); }
    },
    {
        path: 'upcomingbrithday',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Customer/upcomingbrithday/upcomingbrithday.module'); }).then(function (m) { return m.UpcomingbrithdayPageModule; }); }
    },
    {
        path: 'templates',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Template/templates/templates.module'); }).then(function (m) { return m.TemplatesPageModule; }); }
    },
    {
        path: 'addtemplates',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/addtemplates/addtemplates.module'); }).then(function (m) { return m.AddtemplatesPageModule; }); }
    },
    {
        path: 'contactlist',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/contactlist/contactlist.module'); }).then(function (m) { return m.ContactlistPageModule; }); }
    },
    {
        path: 'jobskeerinfo',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/jobskeerinfo/jobskeerinfo.module'); }).then(function (m) { return m.JobskeerinfoPageModule; }); }
    },
    {
        path: 'mapmaker',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./User/mapmaker/mapmaker.module'); }).then(function (m) { return m.MapmakerPageModule; }); }
    },
    {
        path: 'notifications',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/notifications/notifications.module'); }).then(function (m) { return m.NotificationsPageModule; }); }
    },
    {
        path: 'about',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./More/aboutus/aboutus.module'); }).then(function (m) { return m.AboutusPageModule; }); }
    },
    {
        path: 'vision',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./More/vision/vision.module'); }).then(function (m) { return m.VisionPageModule; }); }
    },
    {
        path: 'faq',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./More/faq/faq.module'); }).then(function (m) { return m.FaqPageModule; }); }
    },
    {
        path: 'contact',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./More/contact/contact.module'); }).then(function (m) { return m.ContactPageModule; }); }
    },
    {
        path: 'privacy',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./More/privacy/privacy.module'); }).then(function (m) { return m.PrivacyPageModule; }); }
    },
    {
        path: 'terms',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./More/terms/terms.module'); }).then(function (m) { return m.TermsPageModule; }); }
    },
    {
        path: 'disclaimer',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./More/disclaimer/disclaimer.module'); }).then(function (m) { return m.DisclaimerPageModule; }); }
    },
    {
        path: 'appointmenttimestatus',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/appointmenttimestatus/appointmenttimestatus.module'); }).then(function (m) { return m.AppointmenttimestatusPageModule; }); }
    },
    {
        path: 'customdate',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/customdate/customdate.module'); }).then(function (m) { return m.CustomdatePageModule; }); }
    },
    {
        path: 'shaping',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Template/shaping/shaping.module'); }).then(function (m) { return m.ShapingPageModule; }); }
    },
    {
        path: 'bussiness-settings',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Modal/bussiness-settings/bussiness-settings.module'); }).then(function (m) { return m.BussinessSettingsPageModule; }); }
    },
    {
        path: 'shaping-wishes',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Template/shaping-wishes/shaping-wishes.module'); }).then(function (m) { return m.ShapingWishesPageModule; }); }
    },
    {
        path: 'coupon-details',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/coupon-details/coupon-details.module'); }).then(function (m) { return m.CouponDetailsPageModule; }); }
    },
    {
        path: 'customer-reviews',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./Extra/customer-reviews/customer-reviews.module'); }).then(function (m) { return m.CustomerReviewsPageModule; }); }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
