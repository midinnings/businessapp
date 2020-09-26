import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.page.html',
  styleUrls: ['./employeelist.page.scss'],
})
export class EmployeelistPage implements OnInit {

  constructor(public common: CommonService) { }
  lists: any = {};
  ngOnInit() {
    this.GetEmployeeelist();
  }

  GetEmployeeelist() {
    this.common.PostMethod("GetEmployeeList", { b_id: new UserPipe().transform("b_id") }).then((res: any) => {
      res.Data.forEach(element => {
        element.type.skill = String(JSON.parse(element.type.skill));
        element.status = parseInt(element.status);
        if (element.status == 1) {
          element.status == true;
        } else {
          element.status == false;
        }
      });
      this.lists.Employeelist = res.Data;
      console.log(this.lists.Employeelist);
    });
  }

  UserStatusChange(ev, data) {
    this.common.PostMethod("UserStatusChange", { status: data.status ? 0 : 1, id: data.id, b_id: new UserPipe().transform("b_id") }).then((res: any) => {
      if (res.Status == 1) {
        this.GetEmployeeelist();
      }
      this.common.presentToast(res.Message, 4000);
    });
  }
}
