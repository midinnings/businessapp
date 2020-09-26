import { InmessageService } from './../../Service/inmessage.service';
import { async } from '@angular/core/testing';
import { MessageboxPage } from './../../Modal/messagebox/messagebox.page';
import { ModalController } from '@ionic/angular';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { CommonService } from 'src/app/Service/common.service';
import { CancelappointmentPage } from 'src/app/Modal/cancelappointment/cancelappointment.page';
import { Subscription, from } from 'rxjs';
import { CalendarComponent } from 'ionic2-calendar/calendar';
@Component({
  selector: 'app-pendinglist',
  templateUrl: './pendinglist.page.html',
  styleUrls: ['./pendinglist.page.scss'],
})
export class PendinglistPage implements OnInit {

  eventSource: any = [];
  calendar = {
    locale: 'en-GB',
    mode: 'month',
    currentDate: new Date(),
  };
  subscription: Subscription;
  @ViewChild(CalendarComponent, null) myCal: CalendarComponent;
  lists: any = {};
  constructor(public common: CommonService, public modal: ModalController, public inmessage: InmessageService) {
    this.lists.from = new Date();
    this.lists.to = new Date();
    this.subscription = this.inmessage.getMessage().subscribe((res: any) => {
      if (res.Page == "Dashboard") {
        this.GetPendinglist();
        this.GetPendingEvent();
      }
    });
  }

  ngOnInit() {
    // this.GetPendinglist();
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
  ionViewWillEnter() {
    this.GetPendinglist();
    this.GetPendingEvent();
  }
  onEventSelected(ev) {
    console.log(ev);
  }
  onViewTitleChanged(ev) {
    console.log(ev);
    this.lists.title = ev;
  }
  onTimeSelected(ev) {
    this.lists.from = new Date(ev.selectedTime);
    this.lists.to = new Date(ev.selectedTime);
    this.GetPendinglist();
  }


  GetPendinglist() {
    let from = moment(this.lists.from).format('YYYY-MM-DD');
    let to = moment(this.lists.to).format('YYYY-MM-DD');
    let userid: any = 0;
    if (localStorage.getItem("UserType") != "2" && localStorage.getItem("UserType") != "6") {
      userid = localStorage.getItem("UserId")
    }
    this.common.PostMethod("GetAppointment", { userid: userid, from: from, to: to, b_id: new UserPipe().transform('b_id'), type: 'Confirm' }).then((res: any) => {
      this.lists.pendinglists = res.Data;
    });
  }

  async CancelAppointment(ev) {
    const modal = await this.modal.create({
      component: CancelappointmentPage,
      cssClass: 'addcustomer',
      showBackdrop: true,
      componentProps: ev
    });
    await modal.present();
    let { data } = await modal.onWillDismiss();
    if (data.Status) {
      this.common.presentLoader();
      this.common.PostMethod("UpdateData", { file: 'appointment', name: 'id', value: ev.id, updatename: 'appointmentstatus', updatevalue: 'Cancel' }).then((res: any) => {
        if (res.Status == 1) {
          this.common.GetMethod('StatusNotification?id=' + ev.id);
          this.GetPendinglist();
          this.inmessage.sendMessage("Dashboard", "Dashboard");
        }
        this.common.dismissLoader();
        this.common.presentToast(res.Message, 4000);
      });
    }
  }

  ShowCheckout(ev) {
    let today = moment(new Date()).format("YYYY-MM-DD");
    let mydate = moment(new Date(ev.prefeerddate)).format("YYYY-MM-DD");
    if (mydate > today) {
      return false;
    } else {
      return true;
    }
  }

  CheckoutAppointment(ev) {
    debugger
    this.common.PageGoto("Forward", "manual", ev);
  }

  EditAppointment(ev) {
    this.common.PageGoto('Forward', 'appointments', ev)
  }

  async MessageCust(ev) {
    const modal = await this.modal.create({
      component: MessageboxPage,
      cssClass: 'addcustomer',
      showBackdrop: true,
      componentProps: ev
    });
    await modal.present();
  }

  GetPendingEvent() {
    let userid: any = 0;
    if (localStorage.getItem("UserType") != '2' && localStorage.getItem("UserType") != '6') {
      userid = localStorage.getItem("UserId");
    }
    this.common.PostMethod("AppointmentStatusWise", { appointmentstatus: "Confirm", userid: userid, b_id: new UserPipe().transform('b_id') }).then((res: any) => {
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
