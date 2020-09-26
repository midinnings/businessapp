import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';

@Component({
  selector: 'app-customerhistory',
  templateUrl: './customerhistory.page.html',
  styleUrls: ['./customerhistory.page.scss'],
})
export class CustomerhistoryPage implements OnInit {
  lists: any = {}
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.GetCustomerHistory();
  }

  GetCustomerHistory() {
    this.common.PostMethod("GetCustomerHistory", { b_id: new UserPipe().transform('b_id') }).then((res: any) => {
      this.lists.customerlist = res.Data;
    });
  }
  SearchCustomer(ev) {
    this.common.PostMethod("GetCustomerHistory", { b_id: new UserPipe().transform('b_id'), search: ev }).then((res: any) => {
      this.lists.customerlist = res.Data;
    });
  }
}
