import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';

@Component({
  selector: 'app-pastemployee',
  templateUrl: './pastemployee.page.html',
  styleUrls: ['./pastemployee.page.scss'],
})
export class PastemployeePage implements OnInit {
  constructor(public common: CommonService) { }
  lists: any = {};
  ngOnInit() {
    this.GetEmployeeelist();
  }

  GetEmployeeelist() {
    this.common.PostMethod("GetPastEmployeeList", { b_id: new UserPipe().transform("b_id") }).then((res: any) => {
      res.Data.forEach(element => {
        element.type.skill = String(JSON.parse(element.type.skill));
      });
      this.lists.Employeelist = res.Data;

    });
  }


}
