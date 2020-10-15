import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { File } from '@ionic-native/file/ngx';
import * as moment from 'moment';
@Component({
  selector: 'app-successcheckout',
  templateUrl: './successcheckout.page.html',
  styleUrls: ['./successcheckout.page.scss'],
})
export class SuccesscheckoutPage implements OnInit {

  constructor(public common: CommonService, public modal: ModalController, public navParams: NavParams, public file: File) { }
  image: any;
  lists: any = {}
  ngOnInit() {
    debugger
    this.lists = this.navParams.data;
    this.lists.UserProfile = JSON.parse(localStorage.getItem("UserProfile"));

    this.common.GetMethod("GetProfileBase64?id=" + this.lists.UserProfile.b_id).then((res: any) => {
      console.log("Success");
      this.image = res.Data;
    });
  }

  BackModal() {
    this.modal.dismiss({ Status: true, finish: true });
  }


  close() {
    this.modal.dismiss({ Status: false });

  }

  totalamount() {
    debugger
    let total: any = 0;
    this.lists.serviceinfo.forEach(element => {
      total = parseInt(total) + parseInt(element.serviceprice);
    });
    return parseFloat(total);
  }

  MessageCheckout() {
    this.MakeInvoice();
  }

  externalDataRetrievedFromServer = [];


  MakeInvoice() {
    this.common.presentLoader();
    this.externalDataRetrievedFromServer = [];
    this.lists.serviceinfo.forEach((element, index) => {
      this.externalDataRetrievedFromServer.push({ No: index + 1, Service: element.service, Price: element.serviceprice });
    });
    console.log(this.externalDataRetrievedFromServer);
    let today = new Date();
    let Profile = JSON.parse(localStorage.getItem("UserProfile"));

    let receiptname = this.splitname(Profile.Businessinfo.name);
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
    var docDefinition = {
      content: [
        {
          columns: [
            {
              image: this.image,
              height: 100,
              width: 100
            },
            [
              { text: Profile.Businessinfo.name, style: 'header' },
              { text: Profile.Businessaddressinfo.address + "," + Profile.Businessaddressinfo.statename + "," + Profile.Businessaddressinfo.cityname + "-" + Profile.Businessaddressinfo.pincode, style: 'sub_header' },
              { text: '+91 ' + Profile.Businessinfo.mobileno, style: 'url' },
            ]
          ],

        },
        { text: "Receipt Date : " + moment(today).format("DD.MM.YYYY hh:mm a"), style: 'date' },
        { text: "Receipt No. : " + receiptname + "/" + moment(today).format("DD/MM/YYYY") + "/" + this.lists.billid, style: 'date' },
        { text: "Stylist Name : " + this.lists.employeeinfo.name },
        { text: "Customer Name : " + this.lists.customer_name },
        { text: 'Summary', style: 'statment', margin: [0, 10, 0, 10] },
        this.table(this.externalDataRetrievedFromServer, ['No', 'Service', 'Price']),
        {
          table: {
            widths: ['auto', 100],
            body: [
              ['Discount', this.lists.Discount + this.lists.DiscountType == 'P' ? ' %' : ' ₹'],
              ['Tax', '0%',],
              ['Total Amount', this.totalamount()]
            ],

          },
          alignment: 'right'
        }
      ],
      footer: {
        columns: [
          { text: 'Receipt Genrated by - My Salon Zone App', style: 'date', margin: [30, 0, 0, 0] }
        ]
      },
      styles: {
        header: {
          bold: true,
          fontSize: 16,
          alignment: 'right'
        },
        sub_header: {
          fontSize: 12,
          alignment: 'right'
        },
        url: {
          fontSize: 12,
          alignment: 'right'
        },
        statment: {
          bold: true,
          fontSize: 16,
          alignment: 'center'
        },
        date: {
          fontSize: 12,
          alignment: 'left'
        },
      },
      pageSize: 'A4',
      pageOrientation: 'portrait'
    };
    let binaryArray;
    pdfmake.createPdf(docDefinition).getBuffer(function (buffer) {
      let utf8 = new Uint8Array(buffer);
      binaryArray = utf8.buffer;
    });
    setTimeout(() => {
      this.common.dismissLoader();
      this.modal.dismiss({ Status: true, Data: binaryArray, finish: false, Info: this.lists, filename: receiptname + "-" + moment(today).format("MM-YYYY") + "-" + this.lists.billid });
    }, 2000);
  }


  buildTableBody(data, columns) {
    var body = [];
    body.push(columns);
    data.forEach(function (row) {
      var dataRow = [];
      columns.forEach(function (column) {
        dataRow.push(row[column].toString());
      })
      body.push(dataRow);
    });

    return body;
  }

  table(data, columns) {
    return {
      table: {
        headerRows: 1,
        widths: [100, '*', '*'],
        body: this.buildTableBody(data, columns),

      },
      margin: [0, 10, 0, 10]
    };
  }

  splitname(ev) {
    let character = ev.split(" ");
    let name = "";
    character.forEach(element => {
      name += element.slice(0, 1);
    });
    return name;
  }


}
