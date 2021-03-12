import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
//import { SMS } from '@ionic-native/sms/ngx'
import { CommonService } from 'src/app/Service/common.service';
@Component({
  selector: 'app-messagebox',
  templateUrl: './messagebox.page.html',
  styleUrls: ['./messagebox.page.scss'],
})
export class MessageboxPage implements OnInit {

  constructor(public common: CommonService, public modal: ModalController, public navParams: NavParams) { }
  lists: any = {}
  ngOnInit() {
    this.lists = this.navParams.data;
  }

  close() {
    this.modal.dismiss({ Status: false });
  }

  SendSms() {
    // this.sms.send(this.lists.contactno, this.lists.message).then(res => {
    //   this.common.presentToast('SMS Send Successfully', 4000);
    // }).catch(y => {
    //   this.modal.dismiss();
    // });
    this.common.PostMethod("SendCustomerMessage", { b_id: new UserPipe().transform("b_id"), mobile: this.lists.contactno, message: this.lists.message + " -via My Salon Zone App" }).then((res: any) => {
      if (res.Status == 1) {
        this.modal.dismiss();
      }
      this.common.presentToast(res.Message, 4000);
    });


  }


}
