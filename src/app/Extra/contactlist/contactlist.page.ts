import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.page.html',
  styleUrls: ['./contactlist.page.scss'],
})
export class ContactlistPage implements OnInit {

  constructor(public modal: ModalController, public contacts: Contacts) { }
  lists: any = {};
  mycontact = [];
  ngOnInit() {
    this.lists.Contact = [];
    this.GetContactList();

  }

  SearchCustomer(ev) {
    this.lists.Contact = [];
    this.contacts.find(["displayName", "phoneNumbers"], { multiple: true, filter: ev }).then((contacts) => {
      this.mycontact = contacts;
      for (let i = 0; i < 30; i++) {
        this.lists.Contact.push(this.mycontact[i]);
      }
    });
  }

  GetContactList() {
    this.contacts.find(["displayName", "phoneNumbers"], { multiple: true }).then((contacts) => {
      this.mycontact = contacts;
      console.log(contacts);
      for (let i = 0; i < 30; i++) {
        this.lists.Contact.push(this.mycontact[i]);
      }
    })
  }

  close() {
    this.modal.dismiss({ status: false, Data: {} });
  }

  PickContact(ev) {
    this.modal.dismiss({ status: true, Data: ev });
  }

  loadData(ev) {
    setTimeout(() => {
      ev.target.complete();
      for (let i = 0; i < 30; i++) {
        this.lists.Contact.push(this.mycontact[this.lists.Contact.length]);
      }
    }, 500);
  }

}
