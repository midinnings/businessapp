import { ActivatedRoute } from '@angular/router';
import { CommonService } from './../../Service/common.service';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import domtoimage from 'dom-to-image-chrome-fix';
import { File } from '@ionic-native/file/ngx';
import { IonSlides, NavController } from '@ionic/angular';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-shaping',
  templateUrl: './shaping.page.html',
  styleUrls: ['./shaping.page.scss'],
})
export class ShapingPage implements OnInit {
  @ViewChild('testSlider', null) slider: IonSlides;
  constructor(private sanitizer: DomSanitizer, public navCtrl: NavController, public common: CommonService, public camera: Camera, public file: File, public routes: ActivatedRoute) {
    this.lists.mytemplate = {};

    this.lists.class = "sparallelogram";
  }
  lists: any = {};
  templatedata: any = {};

  ngOnInit() {

    this.routes.queryParams.subscribe((res: any) => {
      this.lists.occassion = res.occassion;
      for (const property in res) {
        this.templatedata[property] = res[property];

      }
    });

    this.GetTemplates();
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
    var data = {};
    debugger
    if (this.lists.occassion) {
      data = { occassion: this.lists.occassion }
    }
    this.common.PostMethod("GetDefaultTemplate", data).then((res: any) => {
      if(res.Data.length==0){
        this.common.presentToast('No template found for '+this.lists.occassion+'', 3000);
        this.GetTemplates_All();
    }else{
      this.lists.defaulttemplates = res.Data;
      this.lists.defaulttemplates.forEach(element => {
        element.textsetting = JSON.parse(element.textsetting);
      });
    }
     
    });
  }
  exportImage() {
    let env = this;
    this.common.presentLoader();
    this.slider.getActiveIndex().then((res: any) => {
      localStorage.setItem('TempBackgroundPath', env.lists.defaulttemplates[res].backgroundimageurl);
      domtoimage.toPng(document.getElementById(res))
        .then((blob) => {
          this.common.PostMethod("FileUpload", { file: blob }).then((result: any) => {
            this.common.dismissLoader();
            console.log(this.templatedata);
            this.templatedata['imageurl'] = result.file;
            this.common.PageGoto('Forward', 'offers/offerreview', this.templatedata);
          });
        });
    });
  }


  GetTemplates_All() {
    this.common.PostMethod("GetDefaultTemplate", {}).then((res: any) => {
      this.lists.defaulttemplates = res.Data;
      this.lists.defaulttemplates.forEach(element => {
        element.textsetting = JSON.parse(element.textsetting);
      });
    });
  }

}
