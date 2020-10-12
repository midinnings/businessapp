import { CustomdatePage } from './../../Modal/customdate/customdate.page';
import { AddexpensePage } from './../../Modal/addexpense/addexpense.page';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';
import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-dailyledger',
  templateUrl: './dailyledger.page.html',
  styleUrls: ['./dailyledger.page.scss'],
})
export class DailyledgerPage implements OnInit {

  constructor(public common: CommonService, public modal: ModalController) { }
  lists: any = {}
  Type: any;
  filterbystaff:any ='';
  StaffList:any=[];
  ngOnInit() {
    this.Type = "Daily";
    this.lists.Sales = [];
    this.lists.Expenses = [];
    this.GetDailyLedger();
    this.GetStylist();
  }

  FilterByStaff(emp_id){
    this.common.PostMethod("DailyLedger", { b_id: new UserPipe().transform('b_id'), bystaff:true, employee_id:emp_id }).then((res: any) => {
      this.lists = res.Data;
    });
  }

  GetStylist() {
    this.common.PostMethod("GetFilterData", { file: "userlogin", name: "b_id", value: new UserPipe().transform('b_id') }).then((res: any) => {
      this.StaffList = res.Data;
    });
  }

  GetDailyLedger() {
    if (this.Type == "Custom") {
      this.Customdateopen();
    } else {
      let fromdate: any = new Date();
      let todate: any = new Date();
      if (this.Type == 'Weekly') {
        fromdate = moment(fromdate).subtract(7, 'days');
      }
      if (this.Type == 'Monthly') {
        fromdate = moment(fromdate).subtract(30, 'days');
      }
      this.common.PostMethod("DailyLedger", { b_id: new UserPipe().transform('b_id'), from: moment(fromdate).format('YYYY-MM-DD'), to: moment(todate).format('YYYY-MM-DD') }).then((res: any) => {
        this.lists = res.Data;
      });
    }
  }

  TotalSales() {
    let Total: any = 0;
    this.lists.Sales.forEach(element => {
      if(element.cost)Total = parseInt(Total) + parseInt(element.cost);
    });
    return Total;
  }

  TotalExpense() {
    let Total: any = 0;
    this.lists.Expenses.forEach(element => {
      Total = parseInt(Total) + parseInt(element.amount);
    });
    return Total;
  }
  async AddExpenses() {
    const modal = await this.modal.create({
      component: AddexpensePage,
      cssClass: 'addcustomer',
      showBackdrop: true
    });

    await modal.present();
    let { data } = await modal.onWillDismiss();
    if (data.Status) {
      this.GetDailyLedger();
    }
  }

  async Customdateopen() {
    const modal = await this.modal.create({
      component: CustomdatePage,
      cssClass: 'addcustomer',
      showBackdrop: true,
    });
    await modal.present();
    let { data } = await modal.onWillDismiss();
    if (data.status) {
      this.common.PostMethod("DailyLedger", { b_id: new UserPipe().transform('b_id'), from: moment(data.fromdate).format('YYYY-MM-DD'), to: moment(data.todate).format('YYYY-MM-DD') }).then((res: any) => {
        this.lists = res.Data;
      });
    }
  }
}
