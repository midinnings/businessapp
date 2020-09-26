import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-businessprofile',
  templateUrl: './businessprofile.page.html',
  styleUrls: ['./businessprofile.page.scss'],
})
export class BusinessprofilePage implements OnInit {

  constructor(public common: CommonService, public fb: FormBuilder) { }
  lists: any = {};
  ngOnInit() {
    this.lists.edit = false;
    this.lists.About = new UserPipe().transform('Businessinfo')['about'];
    let b_id = new UserPipe().transform('b_id');
    if (localStorage.getItem("UserId") == b_id) {
      this.lists.sameuser = true;
    }
  }
  EditProfile() {
    this.common.PageGoto('Forward', 'businessregister', { edit: true })
  }

  SaveAbout() {
    this.common.PostMethod("UpdateData", { file: "userlogin", name: "id", value: new UserPipe().transform('id'), updatename: "about", updatevalue: this.lists.About }).then((res: any) => {
      if (res.Status == 1) {
        this.common.presentToast("About Saved Successfully!", 4000);
        this.lists.edit = false;
        let profile = JSON.parse(localStorage.getItem("UserProfile"));
        console.log(profile);
        profile.about = this.lists.About;
        profile.Businessinfo.about = this.lists.About;
        localStorage.setItem("UserProfile", JSON.stringify(profile));
      }
    });
  }
}
