import { ActivatedRoute } from '@angular/router';
import { CommonService } from './../../Service/common.service';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import domtoimage from 'dom-to-image-chrome-fix';
import { File } from '@ionic-native/file/ngx';
import { IonSlides, NavController } from '@ionic/angular';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


@Component({
  selector: 'app-shaping-wishes',
  templateUrl: './shaping-wishes.page.html',
  styleUrls: ['./shaping-wishes.page.scss'],
})
export class ShapingWishesPage implements OnInit {
  @ViewChild('testSlider', null) slider: IonSlides;
  constructor(private transfer: FileTransfer, private sanitizer: DomSanitizer, public navCtrl: NavController, public common: CommonService, public camera: Camera, public file: File, public routes: ActivatedRoute) {
    this.lists.mytemplate = {};

    this.lists.class = "sparallelogram";

    
  }
  public fileTransfer: FileTransferObject = this.transfer.create();
  lists: any = {};
  templatedata: any = {};
  BackgroundTemplateSelected: any = '';
  ngOnInit() {
  
    this.routes.queryParams.subscribe((res: any) => {
      for (const property in res) {
        this.templatedata[property] = res[property];
      }
      this.GetTemplates();
    });

    this.getBase64ImageFromUrl('https://cdn.hasselblad.com/hasselblad-com/6cb604081ef3086569319ddb5adcae66298a28c5_x1d-ii-sample-01-web.jpg?auto=format&q=97')
    .then(result => {console.log('image console.log(result)',result)})
    .catch(err => console.error(err)) 

    setTimeout(() => {
      this.downloadFile();
    }, 2000);

  }

  sanitizeFun(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  SelectImage() {
    const options: CameraOptions = {
      quality: 50,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true,
      targetHeight: 300,
      targetWidth: 800
    }
    this.camera.getPicture(options).then((imageData) => {
      this.lists.BackgroundImage = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  ChangeClass(ev) {
    this.lists.class = ev;
  }

  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  GetTemplates() {
    this.common.PostMethod("GetDefaultTemplate", {'occassion':this.templatedata.SelectedOccasion}).then((res: any) => {
      this.lists.defaulttemplates = res.Data;
      this.lists.defaulttemplates.forEach(element => {
        element.textsetting = JSON.parse(element.textsetting);
      });

      if(res.Data.length==0){
          this.common.presentToast('No template found for '+this.templatedata.SelectedOccasion+'', 3000);
          this.GetTemplates_All();
      }
      // this.lists.mytemplate = res.Data[res.Data.length - 1];
      // this.lists.mytemplate.textsetting = JSON.parse(this.lists.mytemplate.textsetting);
    });
  }


  GetTemplates_All() {
    this.common.PostMethod("GetDefaultTemplate", {}).then((res: any) => {
      this.lists.defaulttemplates = res.Data;
      this.lists.defaulttemplates.forEach(element => {
        element.textsetting = JSON.parse(element.textsetting);
      });

      // this.lists.mytemplate = res.Data[res.Data.length - 1];
      // this.lists.mytemplate.textsetting = JSON.parse(this.lists.mytemplate.textsetting);
    });
  }

  exportImage() {
    let env = this;
    // this.common.presentLoader();
    this.slider.getActiveIndex().then((res: any) => {
      env.BackgroundTemplateSelected = env.lists.defaulttemplates[res].backgroundimageurl;
      domtoimage.toPng(document.getElementById(res))
        .then((blob) => {
          env.SaveNow(blob);
        });
    });
  }


  async SaveNow(blob) {
    const alert = await this.common.alertController.create({
      header: 'Please Confirm',
      message: 'Are you sure? do you want to share this wish to your Salon Customers!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save & Share',
          handler: () => {
            console.log('save clicked');
            this.common.PostMethod( "FileUpload", { file: blob }).then((result: any) => {
              this.common.dismissLoader();
              console.log(this.templatedata);
              this.templatedata['imageurl'] = result.file;
              //this.common.PageGoto('Forward', 'offers/offerreview', this.templatedata);

              // Save Template Now ----------------------------------

              this.templatedata.type = 'Wishes';
              this.templatedata.backgroundImage = this.BackgroundTemplateSelected;
              this.common.PostMethod("CreateOffer", this.templatedata).then((res: any) => {
                this.common.dismissLoader();
                if (res.Status == 1) {
                  this.common.presentToast('Festival Wish Created Successfully', 4000);
                } else {
                  this.common.presentToast(res.Message, 4000);
                }
              }, err => {
              });
              //----------End------------------------------------------
            }, err => {
            });
          }
        }
      ]
    });
    await alert.present();
  }


  async getBase64ImageFromUrl(imageUrl) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();
  
    return new Promise((resolve, reject) => {
      var reader  = new FileReader();
      reader.addEventListener("load", function () {
          resolve(reader.result);
      }, false);
  
      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }


  downloadFile() {
    const url = 'https://cdn.hasselblad.com/hasselblad-com/6cb604081ef3086569319ddb5adcae66298a28c5_x1d-ii-sample-01-web.jpg';
    this.fileTransfer.download(url, this.file.dataDirectory + 'webpngsampl.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  }



}

