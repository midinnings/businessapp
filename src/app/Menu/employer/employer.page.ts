import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FcmmessageService } from './../../Service/fcmmessage.service';
import { CommonService } from './../../Service/common.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect, Events } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { BussinessSettingsPage } from 'src/app/Modal/bussiness-settings/bussiness-settings.page';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.page.html',
  styleUrls: ['./employer.page.scss'],
})
export class EmployerPage implements OnInit {
  lists: any = {}
  @ViewChild('stylistselect', { static: false }) stylistselect: IonSelect;

  constructor(public events:Events, public Modal:ModalController,public social: SocialSharing, public fcmmessage: FcmmessageService, public router: Router, public common: CommonService) { }

  ngOnInit() {
    this.lists.language = localStorage.getItem("language")||"English";
    this.lists.UserType = localStorage.getItem("UserType");
  }

  logout() {
    localStorage.clear();
    setTimeout(() => {
      this.fcmmessage.GetToken();
    //  window.location.reload();
      this.router.navigate(['/login']);
    }, 1000);
  }

  ShareApp() {
    let message = "Hello, I have started using My Salon Zone App to manage appointments, billing and much more. Check out the App Now. For Android.";
    let subject = "Download My Salon Zone App";
    let file = "";
    let url: "https://play.google.com/store/apps/details?id=com.mysalonzone";
    this.social.share(message, subject, file, url);
  }

  Openpopup() {
    this.stylistselect.open();
  }

  ChangeLanguage() {
    let Profile = JSON.parse(localStorage.getItem("UserProfile"));
    Profile.language = this.lists.language;
    localStorage.setItem("UserProfile", JSON.stringify(Profile));
    localStorage.setItem("language", this.lists.language);
    this.common.PostMethod("UpdateData", { file: "userlogin", name: "id", value: Profile.id, updatename: "language", updatevalue: this.lists.language }).then((res: any) => {
      this.common.presentToast("Language Change Successfully", 4000);
    })
    this.events.publish('ReloadDashboard');
  }

 async OpenSettings(){
    const modal = await this.Modal.create({
      component: BussinessSettingsPage,
      componentProps: {
       
      }
    });
    await modal.present();
    modal.onWillDismiss().then((result: any) => {

    });
  }

}
