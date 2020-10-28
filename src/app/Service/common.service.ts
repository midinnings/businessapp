import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController, AlertController, LoadingController, NavController, ActionSheetController, ModalController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PremiumPage } from '../Modal/premium/premium.page';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  //public Url: any = "http://192.168.0.120/mysalonzone/api/public/";
  // Url: any = "http://localhost/mysalone/public/";
  // public Url: any = "http://mysalonzone.in/staging/public/";
  Url: any = "http://api.mysalonzone.in/";
  Website: any = "http://mysalonzone.in/";
  isLoading: boolean = false;
  constructor(public modal: ModalController, public inapp: InAppBrowser, public actionSheetController: ActionSheetController, public navCtrl: NavController, public http: HttpClient, public toastController: ToastController, public alertController: AlertController, public loadingController: LoadingController) { }
  GetMethod(MapUrl) {
    return new Promise((resolve, reject) => {
      this.http.get(this.Url + MapUrl).subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject(err);
        }
      );
    });
  }
  PostMethod(MapUrl, Data) {
    console.log(MapUrl, Data);
    return new Promise((resolve, reject) => {
      this.http
        .post(this.Url + MapUrl, Data)
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }
  MeesageSend(MapUrl) {
    return new Promise((resolve, reject) => {
      this.http
        .get(MapUrl)
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            reject(err);
          }
        );
    });
  }

  async presentToast(Message, Timer) {
    const toast = await this.toastController.create({
      message: Message,
      duration: Timer,
      position: "bottom"
    });
    toast.present();
  }
  async BasicAlert(Header, Subtitle, Message, Buttons?) {
    const alert = await this.alertController.create({
      header: Header,
      subHeader: Subtitle,
      message: `${Message}`,
      buttons: Buttons || ["Ok"]
    });
    alert.present();
  }

  async presentLoader() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 5000,
      spinner: "circles",
      message: "Please Wait...",
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async presentRuntime(message_custom) {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 60000,
      spinner: "circles",
      message: message_custom,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  async dismissLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }

  PageGoto(Type, Page, Data?) {
    if (!Data) {
      Data = {};
    }
    let Options: NavigationExtras = {
      queryParams: Data
    }
    if (Type == 'Forward') {
      this.navCtrl.navigateForward("/" + Page, Options)
    } if (Type == 'Root') {
      this.navCtrl.navigateRoot("/" + Page, Options);
    }
  }

  Base64toblob(b64Data) {
    let contentType = 'image/png'; let sliceSize = 512;
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  fileUpload(ev, Callback) {
    console.log(ev);
    let file = new FormData();
    file.append('file', ev);
    this.PostMethod("RawFile", file).then((res: any) => {
      console.log(res);
      if (res.Status == 1) {
        Callback({ Status: true, filename: res.Filename });
      } else {
        Callback({ Status: false });
      }
    })
  }

  async Confirm(Message, callback) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: Message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            callback(true);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            callback(false);
          }
        }
      ]
    });

    await alert.present();
  }

  OpenUrl(url, isinapp) {
    isinapp = parseInt(isinapp);
    if (isinapp) {
      this.navCtrl.navigateForward("/" + url);
    } else {
      this.inapp.create(url, '_self', 'location=no');
    }
  }

  SplitTime(DateTime_V) {
    if (DateTime_V) {
      let TimeOnly = DateTime_V.split(' ')[1];
      let Phase = DateTime_V.split(' ')[2];
      if (TimeOnly) {
        return TimeOnly + ' ' + Phase;
      } else {
        return '00:00:00';
      }

    } else {
      return '00:00:00';
    }
  }

  dateCheck(from, to) {
    var fDate, lDate, cDate;
    fDate = Date.parse(from);
    lDate = Date.parse(to);
    cDate = Date.parse(new Date().toJSON().slice(0, 10));

    if ((cDate <= lDate && cDate >= fDate)) {
      return true;
    }
    return false;
  }

  PremiumMember(Checkby_ModuleName) {
    //----Pass module name according to DB to check if package have this module or not----
    let TempPackage = localStorage.getItem('BusinessPackage');
    if (Checkby_ModuleName && TempPackage) {
      var UserPackage = JSON.parse(TempPackage);
      let BusinessPackage = JSON.parse(UserPackage);
      //----Check if module array includes this module-----
      if (BusinessPackage.includes(Checkby_ModuleName)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  GetUserPackage() {
    // Get and store package modules that are included in subscribed module---------------
      let BusinessPackage_ID = JSON.parse(localStorage.getItem('UserProfile'));
      let PackageID = BusinessPackage_ID.package;
      if(PackageID!=0 || PackageID!='0'){
        let data = { file: 'subscription', name: 'id', value: PackageID };
        this.PostMethod("GetFilterData", data).then((res: any) => {
          if (res.Status == 1) {
            localStorage.setItem('BusinessPackage', data[0].modules);
          }
        });
      }
  }

  async PremiumModal() {
    const custmodal = await this.modal.create({
      component: PremiumPage,
      cssClass: 'checkoutreceipt',
      showBackdrop: true,
      componentProps: {}
    });
    await custmodal.present();
  }

}
