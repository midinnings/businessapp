import { NewsPage } from './Extra/news/news.page';
import { EventPage } from './Extra/event/event.page';
import { BlogPage } from './Extra/blog/blog.page';
import { FcmmessageService } from './Service/fcmmessage.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar, } from '@ionic-native/status-bar/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx/index';
import { File } from '@ionic-native/file/ngx';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { CommonService } from './Service/common.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private diagno: Diagnostic,
    public fcmmessage: FcmmessageService,
    public file: File,
    private deeplinks: Deeplinks,
    public common:CommonService
  ) {
    this.initializeApp();
  }

  HideSplash() {
    let env = this;
    setTimeout(() => {
      env.splashScreen.hide();
    }, 2000);
  }

  initializeApp() {
    let env=this;
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#c73130');
      this.HideSplash();
      this.diagno.requestRuntimePermissions([this.diagno.permission.CAMERA, this.diagno.permission.WRITE_EXTERNAL_STORAGE, this.diagno.permission.READ_EXTERNAL_STORAGE]).then((res: any) => {
        console.log(res);
      }).catch(y => {
        console.log(y);
      });
      this.fcmmessage.GetToken();
      this.fcmmessage.GetForgroundMessage();
      this.fcmmessage.GetBackgroundMessage();
      this.file.checkDir(this.file.externalRootDirectory, "MSZApp").catch((res: any) => {
        this.file.createDir(this.file.externalRootDirectory, "MSZApp", false);
      });
      env.deeplinks.route({
        '/': {},
        '/news': NewsPage,
        '/event': EventPage,
        '/blog': BlogPage,
        //New Routes ----------------------
        '/news/latest/:title': NewsPage,
        '/event/latest/:title': EventPage,
        '/blog/latest/:title': BlogPage,
      }).subscribe(match => {
        env.NavigateDeepLink(match)
        console.log('Successfully matched route', match);
      }, nomatch => {
        console.error('Got a deeplink that didn\'t match', nomatch);
      });
     
    });

  }

  NavigateDeepLink(Match) {
    debugger
    let Path = Match.$link.url;
    if (Path) {
      if (Path.includes('blog/')) {
        let Title = Path.split('blog/latest/')[1];
        this.GetDatabyTitle(Title, 'blog', 'title', 'blogdetail');
      }
      else if (Path.includes('news/')) {
        let Title = Path.split('news/latest/')[1];
        this.GetDatabyTitle(Title, 'news', 'title', 'newsdetails');
        //  this.common.PageGoto('Forward', 'newsdetails', { Data: DataPass, Type: Event });
      }
      else if (Path.includes('event/')) {
        let Title = Path.split('event/latest/')[1];
        this.GetDatabyTitle(Title, 'event', 'eventname', 'enddetails');
        //  this.common.PageGoto('Forward', 'enddetails', { Data: DataPass, Type: Event });
      }
    }
  }

  GetDatabyTitle(Title, File, Col, Page) {
    let env = this;
    Title = Title.replace(/-/g, " ");
    Title = Title.replace(/_/g, "-");
    let data = { file: File, name: Col, value: Title || 0 };
    this.common.PostMethod("GetFilterData", data).then((res: any) => {
      console.log(res);
      if (res.Status == 1) {
        env.common.PageGoto('Forward', Page, { Data: res.Data[0], Type: Event });
      } else {
        return {}
      }
    });
  }

  ngAfterViewInit() {
    this.common.presentLoader();
  }
}
