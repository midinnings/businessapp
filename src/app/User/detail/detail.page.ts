import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommonService } from 'src/app/Service/common.service';
import { ValidmessageService } from 'src/app/Service/validmessage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  detailform: FormGroup;
  lists: any = {};
  constructor(public route: ActivatedRoute, public valid: ValidmessageService, public common: CommonService, public menu: MenuController, public Fb: FormBuilder) {
    this.lists.passwordtype = "password";
    this.lists.confpasswordtype = "password";

  }

  ngOnInit() {

    this.detailform = this.Fb.group({
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
      usertype: new FormControl('', Validators.required),
      language: new FormControl('', Validators.required),
      mobile: '',
      name: ''
    }, { validators: this.checkPasswords });
    this.route.queryParams.subscribe((res: any) => {
      console.log(res);
      this.detailform.controls['name'].setValue(res.name);
      this.detailform.controls['mobile'].setValue(res.mobile);
    });
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmpassword').value;
    return pass === confirmPass ? null : { notSame: true }
  }

  GotoRegister() {
    if (this.detailform.value.usertype == 1) {
      this.common.PageGoto('Forward', 'stylistregister', this.detailform.value);
    } else {
      this.common.PageGoto('Forward', 'businessregister', this.detailform.value);
    }
  }

}
