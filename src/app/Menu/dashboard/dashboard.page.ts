import { InmessageService } from './../../Service/inmessage.service';
import { UserPipe } from './../../Pipes/pipe/user.pipe';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/Service/common.service';
import { IonSlides, Events } from '@ionic/angular';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import { FcmmessageService } from 'src/app/Service/fcmmessage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  lists: any = {};
  subscription: Subscription;

  @ViewChild('slides1', { static: false }) slides1: IonSlides;
  @ViewChild('slides2', { static: true }) slides2: IonSlides;
  @ViewChild('slides3', { static: false }) slides3: IonSlides;

  slideOpts1 = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };
  slideOpts2 = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slideOpts3 = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  constructor(events: Events, public common: CommonService, public inmessage: InmessageService, public fcmmessage: FcmmessageService, public router: Router) {
    this.lists.dashboardwid = {};
    this.lists.dashboardwid.notifications = 0;
    this.subscription = this.inmessage.getMessage().subscribe((res: any) => {
      if (res.Page == "Dashboard") {
        this.lists.dashboardwid = {};
        setTimeout(() => {
          this.lists.usertype = localStorage.getItem("UserType");
        }, 500);
        this.GetDashboardInfo();
        this.GetBlogs();
      }
    });

    let env = this;
    events.subscribe('ReloadDashboard', (user) => {
      env.GetBlogs();
      console.log('reloading dash now firing event....');
    });
  }

  ionViewWillLeave() {
    this.slides1.stopAutoplay();
    this.slides2.stopAutoplay();
    this.slides3.stopAutoplay();
  }
  slidesDidLoad(slides) {
    slides.startAutoplay();
  }

  ngOnInit() {
    this.GetBlogs();
    this.GetSlider();

    setInterval(() => {
      this.GetDashboardInfo();
    }, 10000);
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  ionViewWillEnter() {

    this.lists.dashboardwid = {};

    setTimeout(() => {
      this.lists.usertype = localStorage.getItem("UserType");
      this.lists.logo = new UserPipe().transform('logo');
    }, 500);
    this.GetDashboardInfo();


    this.GetUserProfile();
  }
  GetUserProfile() {
    this.common.PostMethod("GetProfile", { Id: localStorage.getItem("UserId") }).then((res: any) => {
      res.Data.status = parseInt(res.Data.status);
      if (res.Data.status == 0) {
        localStorage.clear();
        setTimeout(() => {
          this.fcmmessage.GetToken();
          window.location.reload();
          this.router.navigate(['/login']);
        }, 1000);
      }
    });
  }

  GotoPage(ev) {

    // call premium member function and pass module name according to saved in DB returned value will be in Boolean
    // By Pass with premium membership------------------
    // if(ev == 'festivalnvishes' || ev == 'offers'){
    //     if(!this.common.PremiumMember()){
    //       this.common.PremiumModal();
    //       return;
    //     }
    // }
    if (ev == 'festivalnvishes') {
      this.common.presentToast("Feature Coming Soon", 4000);
    } else {
      this.common.PageGoto('Forward', ev, {});
    }
  }


  Gotoenpage(ev) {
    this.common.PageGoto('Forward', ev, {});
  }
  GetBlogs() {
    this.common.PostMethod("DashboardBlog", { userid: localStorage.getItem("UserId"), usertype: localStorage.getItem("UserType"), b_id: new UserPipe().transform('b_id'), language: new UserPipe().transform('language') }).then((res: any) => {
      this.lists.bloglist = res.Data.Blog;
      this.lists.newslist = res.Data.News;
      this.lists.eventlist = res.Data.Event;
    });
  }

  GetDashboardInfo() {
    this.common.PostMethod("Dashboard", { userid: localStorage.getItem("UserId"), usertype: localStorage.getItem("UserType"), b_id: new UserPipe().transform('b_id'), from: moment().format('YYYY-MM-DD'), to: moment().format('YYYY-MM-DD') }).then((res: any) => {
      this.lists.dashboardwid = res.Data;
    });
  }
  next(ev) {
    if (ev == 1) {
      this.slides1.slideNext();
    }
    if (ev == 2) {
      this.slides2.slideNext();
    }
    if (ev == 3) {
      this.slides3.slideNext();
    }
  }
  pre(ev) {
    if (ev == 1) {
      this.slides1.slidePrev();
    }
    if (ev == 2) {
      this.slides2.slideNext();
    }
    if (ev == 3) {
      this.slides3.slideNext();
    }
  }

  GetSlider() {
    // let id = 0;
    // if (localStorage.getItem("UserType") == "2" || localStorage.getItem("UserType") == "6") {
    //   id = 1;
    // } else {
    //   id = 2;
    // }
    this.common.PostMethod("GetBanners", { id: 2 }).then((res: any) => {
      this.lists.sliders = res.Data;
    });
  }
}
