import { InmessageService } from './inmessage.service';
import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';

@Injectable({
  providedIn: 'root'
})
export class FcmmessageService {

  constructor(public platform: Platform, public FcmMessage: FirebaseMessaging, public inmessage: InmessageService) { }

  GetToken() {
    if (this.platform.is("android")) {
      this.FcmMessage.getToken().then((res: any) => {
        if (!localStorage.getItem("FCMToken")) {
          localStorage.setItem("FCMToken", res);
        }
      });
    }
  }


  GetForgroundMessage() {
    if (this.platform.is("android")) {
      this.FcmMessage.onMessage().subscribe((res: any) => {
        console.log(res);
        this.inmessage.sendMessage("Dasboard", "Dashboard");
      }, error => {
        console.log(error);
      })
    }
  }

  GetBackgroundMessage() {
    if (this.platform.is("android")) {
      this.FcmMessage.onBackgroundMessage().subscribe((res: any) => {
        console.log(res);
        this.inmessage.sendMessage("Dasboard", "Dashboard");
      }, error => {
        console.log(error);
      })
    }
  }


}



