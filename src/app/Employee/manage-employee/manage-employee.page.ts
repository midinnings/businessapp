import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.page.html',
  styleUrls: ['./manage-employee.page.scss'],
})
export class ManageEmployeePage implements OnInit {

  constructor(public common: CommonService) { }

  ngOnInit() {
  }

  GotoPage(ev) {
    this.common.PageGoto('Forward', ev, {});
  }

}
