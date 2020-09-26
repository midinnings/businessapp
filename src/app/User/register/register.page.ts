import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';
import { ValidmessageService } from 'src/app/Service/validmessage.service';
import { OtpPage } from 'src/app/Modal/otp/otp.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerform: FormGroup;
  lists: any = {};
  constructor(public Modal: ModalController, public valid: ValidmessageService, public common: CommonService, public menu: MenuController, public Fb: FormBuilder) {
    this.lists.Timer = 60;
  }

  ngOnInit() {
    this.registerform = this.Fb.group({
      mobile: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
      name: new FormControl('', Validators.required)
    })
  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewWillLeave() {
    this.menu.swipeEnable(true);
  }
  Proceed() {
    this.OtpValidator(this.registerform.value.mobile);

  }

  CheckUserAvalability() {
    this.common.GetMethod("CheckUser?mobile=" + this.registerform.value.mobile).then((res: any) => {
      if (res.Status == 0) {
        this.lists.Avalabile = false;
        this.common.presentToast(res.Message, 4000);
        
      }
      else {
        this.lists.Avalabile = true;
      }
    });
  }


  async OtpValidator(mobile) {
    this.lists.Timer = 60;
    this.lists.RandomNumber = Math.floor(100000 + Math.random() * 900000);
    const modal = await this.Modal.create({
      component: OtpPage,
      componentProps: {
        OTP: this.lists.RandomNumber,
        Mobile: mobile
      }
    });
    await modal.present();

    modal.onWillDismiss().then((result: any) => {
      if (result.data.Verified) {
          this.common.PageGoto('Forward', 'detail', this.registerform.value);
      }
    });
  }

}
