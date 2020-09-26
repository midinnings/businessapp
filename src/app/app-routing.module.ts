import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './Service/authguard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule),
    canActivate: [AuthguardService]
  },
  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthguardService]
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
    loadChildren: () => import('./Business/businessprofile/businessprofile.module').then(m => m.BusinessprofilePageModule)
  },
  {
    path: 'pastemployee',
    loadChildren: () => import('./Job/pastemployee/pastemployee.module').then(m => m.PastemployeePageModule)
  },
  {
    path: 'addcustpop',
    loadChildren: () => import('./Modal/addcustpop/addcustpop.module').then(m => m.AddcustpopPageModule)
  },
  {
    path: 'checkoutpop',
    loadChildren: () => import('./Modal/checkoutpop/checkoutpop.module').then(m => m.CheckoutpopPageModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsPageModule)
  },
  {
    path: 'addcustomer',
    loadChildren: () => import('./Modal/addcustomer/addcustomer.module').then(m => m.AddcustomerPageModule)
  },
  {
    path: 'reviewjob',
    loadChildren: () => import('./Job/reviewjob/reviewjob.module').then(m => m.ReviewjobPageModule)
  },
  {
    path: 'businessmanager',
    loadChildren: () => import('./Business/businessmanager/businessmanager.module').then(m => m.BusinessmanagerPageModule)
  },
  {
    path: 'customermanager',
    loadChildren: () => import('./Customer/customermanager/customermanager.module').then(m => m.CustomermanagerPageModule)
  },
  {
    path: 'customerlist',
    loadChildren: () => import('./Customer/customerlist/customerlist.module').then(m => m.CustomerlistPageModule)
  },
  {
    path: 'manual',
    loadChildren: () => import('./Checkout/manual/manual.module').then(m => m.ManualPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./Extra/event/event.module').then(m => m.EventPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./Extra/offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'customerhistory',
    loadChildren: () => import('./Customer/customerhistory/customerhistory.module').then( m => m.CustomerhistoryPageModule)
  },
  {
    path: 'cancelappointment',
    loadChildren: () => import('./Modal/cancelappointment/cancelappointment.module').then( m => m.CancelappointmentPageModule)
  },
  {
    path: 'messagebox',
    loadChildren: () => import('./Modal/messagebox/messagebox.module').then( m => m.MessageboxPageModule)
  },
  {
    path: 'acceptappointment',
    loadChildren: () => import('./Modal/acceptappointment/acceptappointment.module').then( m => m.AcceptappointmentPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./Extra/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'endetails',
    loadChildren: () => import('./Extra/endetails/endetails.module').then( m => m.EndetailsPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./Extra/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./Extra/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'dailyledger',
    loadChildren: () => import('./Extra/dailyledger/dailyledger.module').then( m => m.DailyledgerPageModule)
  },
  {
    path: 'appliedjob',
    loadChildren: () => import('./Job/appliedjob/appliedjob.module').then( m => m.AppliedjobPageModule)
  },
  {
    path: 'openjob',
    loadChildren: () => import('./Job/openjob/openjob.module').then( m => m.OpenjobPageModule)
  },
  {
    path: 'festivalnvishes',
    loadChildren: () => import('./Extra/festivalnvishes/festivalnvishes.module').then( m => m.FestivalnvishesPageModule)
  },
  {
    path: 'stylistnotify',
    loadChildren: () => import('./Modal/stylistnotify/stylistnotify.module').then( m => m.StylistnotifyPageModule)
  },
  {
    path: 'successcheckout',
    loadChildren: () => import('./Modal/successcheckout/successcheckout.module').then( m => m.SuccesscheckoutPageModule)
  },
  {
    path: 'featuredjob',
    loadChildren: () => import('./Job/featuredjob/featuredjob.module').then( m => m.FeaturedjobPageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./Extra/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'blogdetail',
    loadChildren: () => import('./Extra/blogdetail/blogdetail.module').then( m => m.BlogdetailPageModule)
  },
  {
    path: 'newsdetails',
    loadChildren: () => import('./Extra/newsdetails/newsdetails.module').then( m => m.NewsdetailsPageModule)
  },
  {
    path: 'checkoutreceipt',
    loadChildren: () => import('./Modal/checkoutreceipt/checkoutreceipt.module').then( m => m.CheckoutreceiptPageModule)
  },
  {
    path: 'cupons',
    loadChildren: () => import('./Extra/cupons/cupons.module').then( m => m.CuponsPageModule)
  },
  {
    path: 'manage-employee',
    loadChildren: () => import('./Employee/manage-employee/manage-employee.module').then( m => m.ManageEmployeePageModule)
  },
  {
    path: 'templatemanager',
    loadChildren: () => import('./Template/templatemanager/templatemanager.module').then( m => m.TemplatemanagerPageModule)
  },
  {
    path: 'employeelist',
    loadChildren: () => import('./Employee/employeelist/employeelist.module').then( m => m.EmployeelistPageModule)
  },
  {
    path: 'reviewrating',
    loadChildren: () => import('./reviewrating/reviewrating.module').then( m => m.ReviewratingPageModule)
  },
  {
    path: 'findcandidate',
    loadChildren: () => import('./Employee/findcandidate/findcandidate.module').then( m => m.FindcandidatePageModule)
  },
  {
    path: 'thankyouusms',
    loadChildren: () => import('./Extra/thankyouusms/thankyouusms.module').then( m => m.ThankyouusmsPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./Extra/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'employeermanagment',
    loadChildren: () => import('./Myemployeer/employeermanagment/employeermanagment.module').then( m => m.EmployeermanagmentPageModule)
  },
  {
    path: 'applieduser',
    loadChildren: () => import('./Job/applieduser/applieduser.module').then( m => m.ApplieduserPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./Myemployeer/attendance/attendance.module').then( m => m.AttendancePageModule)
  },
  {
    path: 'applicantdetail',
    loadChildren: () => import('./Job/applicantdetail/applicantdetail.module').then( m => m.ApplicantdetailPageModule)
  },
  {
    path: 'addexpense',
    loadChildren: () => import('./Modal/addexpense/addexpense.module').then( m => m.AddexpensePageModule)
  },
  {
    path: 'passwordreset',
    loadChildren: () => import('./Modal/passwordreset/passwordreset.module').then( m => m.PasswordresetPageModule)
  },
  {
    path: 'sharingpop',
    loadChildren: () => import('./Modal/sharingpop/sharingpop.module').then( m => m.SharingpopPageModule)
  },
  {
    path: 'upcomingbrithday',
    loadChildren: () => import('./Customer/upcomingbrithday/upcomingbrithday.module').then( m => m.UpcomingbrithdayPageModule)
  },
  {
    path: 'templates',
    loadChildren: () => import('./Template/templates/templates.module').then( m => m.TemplatesPageModule)
  },
  {
    path: 'addtemplates',
    loadChildren: () => import('./Modal/addtemplates/addtemplates.module').then( m => m.AddtemplatesPageModule)
  },
  {
    path: 'contactlist',
    loadChildren: () => import('./Extra/contactlist/contactlist.module').then( m => m.ContactlistPageModule)
  },
  {
    path: 'jobskeerinfo',
    loadChildren: () => import('./Modal/jobskeerinfo/jobskeerinfo.module').then( m => m.JobskeerinfoPageModule)
  },
  {
    path: 'mapmaker',
    loadChildren: () => import('./User/mapmaker/mapmaker.module').then( m => m.MapmakerPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./Extra/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./More/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'vision',
    loadChildren: () => import('./More/vision/vision.module').then( m => m.VisionPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./More/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./More/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./More/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./More/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'disclaimer',
    loadChildren: () => import('./More/disclaimer/disclaimer.module').then( m => m.DisclaimerPageModule)
  },
  {
    path: 'appointmenttimestatus',
    loadChildren: () => import('./Modal/appointmenttimestatus/appointmenttimestatus.module').then( m => m.AppointmenttimestatusPageModule)
  },
  {
    path: 'customdate',
    loadChildren: () => import('./Modal/customdate/customdate.module').then( m => m.CustomdatePageModule)
  },
  {
    path: 'shaping',
    loadChildren: () => import('./Template/shaping/shaping.module').then( m => m.ShapingPageModule)
  },
  {
    path: 'bussiness-settings',
    loadChildren: () => import('./Modal/bussiness-settings/bussiness-settings.module').then( m => m.BussinessSettingsPageModule)
  },
  {
    path: 'shaping-wishes',
    loadChildren: () => import('./Template/shaping-wishes/shaping-wishes.module').then( m => m.ShapingWishesPageModule)
  },
  {
    path: 'coupon-details',
    loadChildren: () => import('./Extra/coupon-details/coupon-details.module').then( m => m.CouponDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
