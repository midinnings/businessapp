import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonSelect } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';
import { ValidmessageService } from 'src/app/Service/validmessage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginform: FormGroup;
  lists: any = {};
  @ViewChild('stylistselect', { static: false }) stylistselect: IonSelect;

  constructor(public router: ActivatedRoute, public valid: ValidmessageService, public common: CommonService, public menu: MenuController, public Fb: FormBuilder) {
    this.lists.passwordtype = "password";
  }

  ngOnInit() {
    this.loginform = this.Fb.group({
      mobile: new FormControl('', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])),
      password: new FormControl('', Validators.required)
    });
    this.router.queryParams.subscribe((res: any) => {
      if (res.Message) {
        this.common.BasicAlert("Alert!", "", res.Message);
      }
    });
    this.lists.language = localStorage.getItem("language") || "English";

  }
  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewWillLeave() {
    this.menu.swipeEnable(true);
  }

  Login() {
    this.common.presentLoader();
    this.loginform.value.token = localStorage.getItem("FCMToken");
    this.common.PostMethod("login", this.loginform.value).then((res: any) => {
      if (res.Status == 1 && res.Data.usertype != 3) {
        //this.common.presentToast(res.Message, 4000);
        res.Data.usertype = parseInt(res.Data.usertype);
        localStorage.setItem("UserId", res.Data.id);
        localStorage.setItem("UserProfile", JSON.stringify(res.Data));
        localStorage.setItem("UserType", res.Data.usertype);
        localStorage.setItem("language", res.Data.language);
        this.common.dismissLoader();
        this.common.PageGoto("Root", "/app/tabs/dashboard");
      } else {
        this.common.dismissLoader();
        this.common.presentToast('Please check your Username/Password..', 4000);
      }
    });
  }
  Openpopup() {
    this.stylistselect.open();
  }
  ChangeLanguage() {
    localStorage.setItem("language", this.lists.language);
  }
}
