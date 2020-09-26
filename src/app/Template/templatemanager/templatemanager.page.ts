import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatemanager',
  templateUrl: './templatemanager.page.html',
  styleUrls: ['./templatemanager.page.scss'],
})
export class TemplatemanagerPage implements OnInit {

  constructor(public common: CommonService) { }
  lists: any = {};
  ngOnInit() {
    this.GetTemplateCategory();
  }

  GetTemplateCategory() {
    this.common.PostMethod("GetTemplateCategory", {}).then((res: any) => {
      console.log(res);
      this.lists.template = res.Data;
    });
  }

  Gototemplate(ev) {
    this.common.PageGoto('Forward', 'templates', ev);
  }

}
