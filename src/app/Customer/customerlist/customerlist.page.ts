import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';
import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { AddcustomerPage } from 'src/app/Modal/addcustomer/addcustomer.page';
import { ModalController } from '@ionic/angular';
import { ContactlistPage } from 'src/app/Extra/contactlist/contactlist.page';
import { MessageboxPage } from 'src/app/Modal/messagebox/messagebox.page';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.page.html',
  styleUrls: ['./customerlist.page.scss'],
})
export class CustomerlistPage implements OnInit {

  constructor(public camera: Camera, public common: CommonService, public modal: ModalController) { }
  lists: any = {};
  ngOnInit() {
    this.GetCustomerList();
  }

  GetCustomerList() {
    this.common.presentLoader();
    this.common.PostMethod("GetCustomerList", { b_id: new UserPipe().transform('b_id') }).then((res: any) => {
      this.lists.Customerlist = res.Data;
      this.common.dismissLoader();
    },err=>{
      this.common.dismissLoader();
    });
  }

  SearchCustomer(ev) {
    this.common.PostMethod("SearchCustomer", { b_id: new UserPipe().transform('b_id'), Search: ev }).then((res: any) => {
      this.lists.Customerlist = res.Data;
    });
  }

  async AddCustomer(ev?) {
    const custmodal = await this.modal.create({
      component: AddcustomerPage,
      cssClass: 'addcustomer',
      showBackdrop: true,
      componentProps: ev || {}
    });
    await custmodal.present();
    let { data } = await custmodal.onWillDismiss();
    if (data.contactbook) {
      const contactmodal = await this.modal.create({
        component: ContactlistPage,
        showBackdrop: true
      });
      await contactmodal.present();
      let { data } = await contactmodal.onWillDismiss();
      if (data.status) {
        const custmodal = await this.modal.create({
          component: AddcustomerPage,
          cssClass: 'addcustomer',
          showBackdrop: true,
          componentProps: data.Data
        });
        await custmodal.present();
      }
    } else {
      this.GetCustomerList();
      this.lists.search = "";
    }
  }

  editcustomer(ev) {
    ev.edit = true;
    console.log(ev);
    this.AddCustomer(ev);
  }



  async selectImage(id) {
    const actionSheet = await this.common.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, id);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA, id);
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

  pickImage(sourceType, id) {
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
        // this.Businessform1.controls['logo'].setValue(res.file);
        this.UpdateProfileImage({ logo: res.file, id: id });
      });
    }, (err) => {
      // Handle error
    });
  }

  UpdateProfileImage(ev) {
    this.common.PostMethod("UpdateCustomerlogo", { logo: ev.logo, id: ev.id }).then((res: any) => {
      if (res.Status == 1) {
        this.GetCustomerList();
      }
      this.common.presentToast(res.Message, 4000);
    });
  }

  async mailcustomer(ev) {
    const modal = await this.modal.create({
      component: MessageboxPage,
      cssClass: 'addcustomer',
      showBackdrop: true,
      componentProps: { customer_name: ev.name, contactno: ev.mobile }
    });
    await modal.present();
  }

}
