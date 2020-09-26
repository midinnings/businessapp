import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { CommonService } from 'src/app/Service/common.service';
import { Subscription } from 'rxjs';
import { InmessageService } from 'src/app/Service/inmessage.service';
import { CalendarComponent } from 'ionic2-calendar/calendar';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {

  eventSource = [];
  calendar = {
    locale: 'en-GB',
    mode: 'month',
    currentDate: new Date(),
  };
  subscription: Subscription;
  @ViewChild(CalendarComponent, null) myCal: CalendarComponent;

  lists: any = {};
  constructor(public router: ActivatedRoute, public common: CommonService, public modal: ModalController, public inmessage: InmessageService) {
    this.lists.from = new Date();
    this.lists.to = new Date();
    this.subscription = this.inmessage.getMessage().subscribe((res: any) => {
      if (res.Page == "Dashboard") {
        this.GetConfirmlist();
        this.GetConfirmEventList();
      }
    });
  }

  ngOnInit() {
    this.router.queryParams.subscribe((res: any) => {
      if (res.Page == "MyWork") {
        this.lists.Title = "My Work";
      } else if (res.Page == "Total") {
        this.lists.Title = "Total Work"
      } else {
        this.lists.Title = "Confirmed Bookings";
      }
    });
    this.GetConfirmlist();
    this.GetConfirmEventList();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onEventSelected(ev) {
    console.log(ev);
  }
  onViewTitleChanged(ev) {
    this.lists.title = ev;
  }
  onTimeSelected(ev) {
    this.lists.from = new Date(ev.selectedTime);
    this.lists.to = new Date(ev.selectedTime);
    this.GetConfirmlist();
  }


  GetConfirmlist() {
    this.lists.Confrimlists = [];
    let from = moment(this.lists.from).format('YYYY-MM-DD');
    let to = moment(this.lists.to).format('YYYY-MM-DD');
    let userid: any = 0;
    if (localStorage.getItem("UserType") != "2" && localStorage.getItem("UserType") != "6") {
      userid = localStorage.getItem("UserId")
    }
    if (localStorage.getItem("UserType") == "1") {
      this.common.PostMethod("EmployeeTotalWork", { userid: userid, from: from, to: to, b_id: new UserPipe().transform('b_id'), type: 'Confirm' }).then((res: any) => {
        this.lists.Confrimlists = res.Data;
      });
    } else {
      this.common.PostMethod("GetAppointment", { userid: userid, from: from, to: to, b_id: new UserPipe().transform('b_id'), type: 'Confirm' }).then((res: any) => {
        this.lists.Confrimlists = res.Data;
      });
    }
  }


  GetConfirmEventList() {
    let userid: any = 0;
    if (localStorage.getItem("UserType") != '2' && localStorage.getItem("UserType") != '6') {
      userid = localStorage.getItem("UserId");
    }
    this.common.PostMethod("AppointmentEvent", { usertype: new UserPipe().transform('usertype'), userid: userid, b_id: new UserPipe().transform('b_id') }).then((res: any) => {
      res.Data.forEach(element => {
        this.eventSource.push(
          {
            startTime: new Date(element.prefeerddate),
            endTime: new Date(element.prefeerddate),
            allDay: false
          }
        )
      });
      this.myCal.loadEvents();
    });
  }




}
