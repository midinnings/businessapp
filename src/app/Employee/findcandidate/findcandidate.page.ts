import { JobskeerinfoPage } from './../../Modal/jobskeerinfo/jobskeerinfo.page';
import { ModalController } from '@ionic/angular';
import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-findcandidate',
  templateUrl: './findcandidate.page.html',
  styleUrls: ['./findcandidate.page.scss'],
})
export class FindcandidatePage implements OnInit {

  constructor(public common: CommonService, public modal: ModalController) { }
  lists: any = {};
  ngOnInit() {
    this.GetApplyUser();
  }

  GetApplyUser() {
    this.common.PostMethod("GetAppliedUser", {}).then((res: any) => {
      console.log(res);
      res.Data.forEach(element => {
        if (element.Otherinfo.skill) {
          element.Otherinfo.skill = String(JSON.parse(element.Otherinfo.skill));
        }
      });
      this.lists.ApplyUser = res.Data;
    });
  }

  async OpenJob(ev) {
    const modal = await this.modal.create({
      component: JobskeerinfoPage,
      componentProps: ev
    });
    return await modal.present();
  }

}
