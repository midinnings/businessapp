import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeermanagment',
  templateUrl: './employeermanagment.page.html',
  styleUrls: ['./employeermanagment.page.scss'],
})
export class EmployeermanagmentPage implements OnInit {

  UserType:any='';

  constructor(public common: CommonService) { }

  ngOnInit() {
    this.UserType = localStorage.getItem('UserType');
  }

}
