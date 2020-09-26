import { AddtemplatesPage } from './../../Modal/addtemplates/addtemplates.page';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.page.html',
  styleUrls: ['./templates.page.scss'],
})
export class TemplatesPage implements OnInit {
  lists: any = {}
  constructor(public common: CommonService, public router: ActivatedRoute, public modal: ModalController) { }

  ngOnInit() {
    this.router.queryParams.subscribe((res: any) => {
      this.lists.templatecategory = res;
      this.GetTemplates();
    });
  }

  GetTemplates() {
    this.common.PostMethod("GetTemplate", { categories: [this.lists.templatecategory.id] }).then((res: any) => {
      this.lists.template = res.Data;
    });
  }

  async AddTemplate() {
    const mymodal = await this.modal.create({
      component: AddtemplatesPage,
      componentProps: this.lists
    });
    await mymodal.present();
    const { data } = await mymodal.onWillDismiss();
    if (data) {
      this.GetTemplates();
    }
  }

}
