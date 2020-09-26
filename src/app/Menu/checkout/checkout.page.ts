import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  eventSource = [];
  calendar = {
    locale: 'en-GB',
    mode: 'month',
    currentDate: new Date(),
  };
  lists: any = {};

  constructor() { }

  ngOnInit() {
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

}
