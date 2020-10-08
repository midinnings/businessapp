import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { InmessageService } from './../../Service/inmessage.service';
import { AcceptappointmentPage } from './../../Modal/acceptappointment/acceptappointment.page';
import { ModalController } from '@ionic/angular';
import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';
import { CancelappointmentPage } from 'src/app/Modal/cancelappointment/cancelappointment.page';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appointmentstatus',
  templateUrl: './appointmentstatus.page.html',
  styleUrls: ['./appointmentstatus.page.scss'],
})
export class AppointmentstatusPage implements OnInit {
  eventSource = [];
  calendar = {
    locale: 'en-GB',
    mode: 'month',
    currentDate: new Date(),
  };
  lists: any = {};
  subscription: Subscription;
  constructor(public common: CommonService, public modal: ModalController, public inmessage: InmessageService) {
    this.subscription = this.inmessage.getMessage().subscribe((res: any) => {
      if (res.Page == "Dashboard") {
        this.GetAppointments();
      }
    });
  }

  ngOnInit() {
    this.common.presentLoader();
    this.GetAppointments();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onEventSelected(ev) {
    console.log(ev);
  }
  onViewTitleChanged(ev) {
    console.log(ev);
    this.lists.title = ev;
  }
  onTimeSelected(ev) {
    console.log(ev);
  }

  GetAppointments() {
    let userid: any = 0;
    if (localStorage.getItem("UserType") != '2' && localStorage.getItem("UserType") != '6') {
      userid = localStorage.getItem("UserId");
    }
    this.common.PostMethod("AppointmentStatusWise", { appointmentstatus: "Waiting", userid: userid, b_id: new UserPipe().transform('b_id') }).then((res: any) => {
      this.lists.appointmentlist = res.Data;
      this.common.dismissLoader();
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
          this.GetAppointments();
          setTimeout(() => {
            this.inmessage.sendMessage("Dasboard", "Dashboard");
          }, 100);
        }
        this.common.dismissLoader();
        this.common.presentToast(res.Message, 4000);
      });
    }
  }
  EditAppointment(ev) {
    this.common.PageGoto('Forward', 'appointments', ev);
  }

  async AcceptAppointment(ev) {
    const modal = await this.modal.create({
      component: AcceptappointmentPage,
      cssClass: 'addcustomer',
      showBackdrop: true,
      componentProps: ev
    });
    await modal.present();
    let { data } = await modal.onWillDismiss();
    if (data.Status) {
      this.common.presentLoader();
      this.common.PostMethod("UpdateData", { file: 'appointment', name: 'id', value: ev.id, updatename: 'appointmentstatus', updatevalue: 'Confirm' }).then((res: any) => {
        if (res.Status == 1) {
          this.common.GetMethod('StatusNotification?id=' + ev.id);
          this.GetAppointments();
          setTimeout(() => {
            this.inmessage.sendMessage("Dashboard", "Dashboard");
          }, 100);
        }
        this.common.dismissLoader();
        this.common.presentToast(res.Message, 4000);
      });
    }
  }





}
