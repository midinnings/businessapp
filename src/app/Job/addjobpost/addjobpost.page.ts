import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';
import * as moment from 'moment';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';
@Component({
  selector: 'app-addjobpost',
  templateUrl: './addjobpost.page.html',
  styleUrls: ['./addjobpost.page.scss'],
})
export class AddjobpostPage implements OnInit {

  constructor(public common: CommonService, public fb: FormBuilder) {
    this.GetMasterListData();
  }
  lists: any = {};
  jobform: FormGroup;
  ngOnInit() {
    let today = new Date();
    this.lists.today = new Date();
    let futureDate: any = moment(today).add(15, 'days')
    let jobend = new Date(futureDate);
    this.jobform = this.fb.group({
      title: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      description: new FormControl(),
      experience: new FormControl(),
      skills: new FormControl(),
      lastdate: new FormControl(jobend, Validators.required),
      postdate: new FormControl(),
      incentive: new FormControl(),
      accommodation: new FormControl(),
    });
  }
  submit() {
    let Data: any = {}
    Data = this.jobform.value;
    Data.position_type = this.lists.Category;
    Data.positon = this.lists.Type;
    Data.experience = this.lists.Experience;
    Data.salary = this.lists.salary;
    Data.userid = localStorage.getItem("UserId");
    Data.b_id = new UserPipe().transform("b_id");
    if (!Data.b_id) {
      Data.b_id = Data.userid;
    }
    Data.postdate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
    Data.lastdate = moment(Data.lastdate).format("YYYY-MM-DD HH:mm:ss");
    Data.company_name = new UserPipe().transform('companyname');
    this.common.PageGoto('Forward', 'reviewjob', Data);
  }
  GetMasterListData() {
    this.common.PostMethod("GetFilterData", { file: "master", name: "id", value: "1" }).then((res: any) => {
      if (localStorage.getItem('language') == 'Hindi') {
        this.lists.Jobtype = res.Data[0].ValueHi.split(',');
      } else {
        this.lists.Jobtype = res.Data[0].Value.split(',');
      }
      this.common.PostMethod("GetFilterData", { file: "master", name: "id", value: "9" }).then((res: any) => {
        if (localStorage.getItem('language') == 'Hindi') {
          this.lists.JobCat = res.Data[0].ValueHi.split(',');
        } else {
          this.lists.JobCat = res.Data[0].Value.split(',');
        }

        this.common.PostMethod("GetFilterData", { file: "master", name: "id", value: "6" }).then((res: any) => {
          if (localStorage.getItem('language') == 'Hindi') {
            this.lists.exp = res.Data[0].ValueHi.split(',');
          } else {
            this.lists.exp = res.Data[0].Value.split(',');
          }
          this.common.PostMethod("GetFilterData", { file: "master", name: "id", value: "10" }).then((res: any) => {
            if (localStorage.getItem('language') == 'Hindi') {
              this.lists.sal = res.Data[0].ValueHi.split(',');
            } else {
              this.lists.sal = res.Data[0].Value.split(',');
            }
          });
        });
      });
    });

  }

  Check(Type, ev, Data) {
    if (!this.lists[Type]) {
      this.lists[Type] = "";
    }
    if (ev.detail.checked) {
      this.lists[Type] += Data + ",";
    } else {
      let str = this.lists[Type];
      this.lists[Type] = str.replace(Data + ",", '')
    }
  }

}
