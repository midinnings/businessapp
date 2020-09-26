import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateselector',
  templateUrl: './templateselector.page.html',
  styleUrls: ['./templateselector.page.scss'],
})
export class TemplateselectorPage implements OnInit {
  lists: any = {};
  constructor(public common: CommonService) {
    this.lists.mytemplate = {}; 
  }

  ngOnInit() {
    this.common.PostMethod("GetDefaultTemplate", {}).then((res: any) => {
      console.log(res);
      this.lists.mytemplate = res.Data[res.Data.length - 1];
      this.lists.mytemplate.textsetting = JSON.parse(this.lists.mytemplate.textsetting);
      console.log(this.lists.mytemplate);

    });
  }

}
