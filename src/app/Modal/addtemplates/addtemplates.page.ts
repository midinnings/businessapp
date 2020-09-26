import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { CommonService } from 'src/app/Service/common.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-addtemplates',
  templateUrl: './addtemplates.page.html',
  styleUrls: ['./addtemplates.page.scss'],
})
export class AddtemplatesPage implements OnInit {
  template: FormGroup;
  lists: any = {};
  constructor(public camera: Camera, public navPrms: NavParams, public common: CommonService, public modal: ModalController, public fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.navPrms);
    this.template = this.fb.group({
      tcid: new FormControl(),
      messagehindi: new FormControl(),
      messageenglish: new FormControl('', Validators.required),
      coverimage: new FormControl()
    });
    this.lists = this.navPrms.data;
    this.template.controls["coverimage"].setValue(this.lists.templatecategory.ccoverimage);
    this.template.controls["tcid"].setValue(this.lists.templatecategory.id);
  }

  close() {
    this.modal.dismiss();
  }

  SaveTemplate() {
    this.common.presentLoader();
    this.common.PostMethod("CreateTemplate", this.template.value).then((res: any) => {
      this.common.dismissLoader();
      this.common.presentToast(res.Message, 4000);
      if (res.Status == 1) {
        this.close();
      }
    });
  }
  ChooseImage() {
    this.selectImage();
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 50,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.lists.Image = 'data:image/jpeg;base64,' + imageData;
      this.common.PostMethod("FileUpload", { file: this.lists.Image }).then((res: any) => {
        console.log(res);
        this.template.controls['coverimage'].setValue(res.file);
      }).catch(y => {
        console.log(y);
      });
    }, (err) => {
      console.log(err);
    });
  }
  async selectImage() {
    const actionSheet = await this.common.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

}
