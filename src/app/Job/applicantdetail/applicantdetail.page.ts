import { JobskeerinfoPage } from './../../Modal/jobskeerinfo/jobskeerinfo.page';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicantdetail',
  templateUrl: './applicantdetail.page.html',
  styleUrls: ['./applicantdetail.page.scss'],
})
export class ApplicantdetailPage implements OnInit {

  constructor(public modal: ModalController, public common: CommonService, public router: ActivatedRoute) { }
  lists: any = {};
  ngOnInit() {
    this.router.queryParams.subscribe((res: any) => {
      this.lists.jobid = res.id;
      this.GetApplicantDetails();
    });
  }

  GetApplicantDetails() {
    this.common.PostMethod("GetAppliedJobUser", { jobid: this.lists.jobid }).then((res: any) => {
      console.log(res);
      res.Data.forEach(element => {
        console.log(element);
        if (element.Otherinfo.skill != null || element.Otherinfo.skill) {
          element.Otherinfo.skill = String(JSON.parse(element.Otherinfo.skill));
        }
      });
      this.lists.joblist = res.Data;
    });
  }

  async OpenJobInfo(ev) {
    const modal = await this.modal.create({
      component: JobskeerinfoPage,
      componentProps: ev
    });
    return await modal.present();
  }

}
