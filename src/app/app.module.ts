import { CustomdatePage } from './Modal/customdate/customdate.page';
import { AppointmenttimestatusPage } from './Modal/appointmenttimestatus/appointmenttimestatus.page';
import { JobskeerinfoPage } from './Modal/jobskeerinfo/jobskeerinfo.page';
import { ContactlistPage } from './Extra/contactlist/contactlist.page';
import { AddtemplatesPage } from './Modal/addtemplates/addtemplates.page';
import { SharingpopPage } from './Modal/sharingpop/sharingpop.page';
import { PasswordresetPage } from './Modal/passwordreset/passwordreset.page';
import { AddexpensePage } from './Modal/addexpense/addexpense.page';
import { CuponsPage } from './Extra/cupons/cupons.page';
import { SuccesscheckoutPage } from './Modal/successcheckout/successcheckout.page';
import { AcceptappointmentPage } from './Modal/acceptappointment/acceptappointment.page';
import { MessageboxPage } from './Modal/messagebox/messagebox.page';
import { CancelappointmentPage } from './Modal/cancelappointment/cancelappointment.page';
import { AddcustomerPage } from './Modal/addcustomer/addcustomer.page';
import { CheckoutpopPage } from './Modal/checkoutpop/checkoutpop.page';
import { AddcustpopPage } from './Modal/addcustpop/addcustpop.page';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentModule } from './Components/component/component.module';
import { ModalModule } from './Modal/modal/modal.module';
import { PipeModule } from './Pipes/pipe/pipe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OtpPage } from './Modal/otp/otp.page';
import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { NgOtpInputModule } from 'ng-otp-input';
import { SMS } from '@ionic-native/sms/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CheckoutreceiptPage } from './Modal/checkoutreceipt/checkoutreceipt.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import {BussinessSettingsPage} from './Modal/bussiness-settings/bussiness-settings.page';
import {PremiumPage} from './Modal/premium/premium.page';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { CouponDetailsPage } from './Extra/coupon-details/coupon-details.page';
import { Screenshot } from '@ionic-native/screenshot/ngx';

@NgModule({
  declarations: [AppComponent, CouponDetailsPage, OtpPage, BussinessSettingsPage, PremiumPage, AddcustpopPage, CheckoutpopPage, AddcustomerPage, CancelappointmentPage, MessageboxPage, AcceptappointmentPage, SuccesscheckoutPage, CheckoutreceiptPage, CuponsPage, AddexpensePage, PasswordresetPage, SharingpopPage, AddtemplatesPage, ContactlistPage, JobskeerinfoPage, AppointmenttimestatusPage, CustomdatePage],
  entryComponents: [CouponDetailsPage, BussinessSettingsPage, PremiumPage, OtpPage, AddcustpopPage, CheckoutpopPage, AddcustomerPage, CancelappointmentPage, MessageboxPage, AcceptappointmentPage, SuccesscheckoutPage, CheckoutreceiptPage, CuponsPage, AddexpensePage, PasswordresetPage, SharingpopPage, AddtemplatesPage, ContactlistPage, JobskeerinfoPage, AppointmenttimestatusPage, CustomdatePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, MaterialModule, HttpClientModule,
    ComponentModule,
    ModalModule,
    PipeModule,
    FormsModule,
    NgOtpInputModule,
    ReactiveFormsModule,
    Ionic4DatepickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    Camera,
    File,
    SMS,
    SocialSharing,
    Diagnostic,
    FileOpener,
    Geolocation,
    FirebaseMessaging,
    Contacts,
    Deeplinks,
    InAppBrowser,
    FileTransfer,
    Screenshot,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
