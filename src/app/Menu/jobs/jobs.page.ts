import { ArraytostringPipe } from './../../Pipes/arraytostring.pipe';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { CommonService } from 'src/app/Service/common.service';
import { Component, OnInit } from '@angular/core';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { File } from '@ionic-native/file/ngx';
import * as moment from 'moment';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {

  constructor(public fileopen: FileOpener, public common: CommonService, public file: File, public social: SocialSharing) { }
  lists: any = {};
  image: any;
  ngOnInit() {
    let profile = JSON.parse(localStorage.getItem("UserProfile"));
    this.lists.logo = profile.logo;
    this.GetSlider();
    this.common.presentLoader();
    this.common.GetMethod("GetProfileBase64?id=" + profile.id).then((res: any) => {
      this.common.dismissLoader();
      this.image = res.Data;
    });
  }
  ionViewWillEnter() {
    let profile = JSON.parse(localStorage.getItem("UserProfile"));
    this.lists.logo = profile.logo;
  }

  GenerateResume() {
    this.common.presentLoader();
    let today = new Date();
    let Profile = JSON.parse(localStorage.getItem("UserProfile"));
    if (Profile.OtherInfo.skill) {
      Profile.OtherInfo.skill = new ArraytostringPipe().transform(String(JSON.parse(Profile.OtherInfo.skill)));
    }
    pdfmake.vfs = pdfFonts.pdfMake.vfs;

    var docDefinition = {
      content: [
        {
          columns: [
            [
              { text: new UpperCasePipe().transform(Profile.name), style: 'name' },
              { text: Profile.OtherInfo.skill || 'N/A', style: 'sub_header', margin: [0, 10, 0, 10], width: '*' },
              {
                canvas: [
                  { type: 'line', x1: 0, y1: 0, x2: 350, y2: 0, lineWidth: 2 }, //Bottom line
                ]
              },

            ],
            {
              image: this.image,
              height: 160,
              width: 140,
              margin: [0, 10, 0, 10]
            },

          ],

        },
        {
          columns: [
            {
              image: 'data:image/png;base64,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',
              height: 16,
              width: 16,
              margin: [0, 10, 0, 10]

            },
            {
              width: 'auto',
              text: 'ABOUT : ',
              style: 'head',
              margin: [0, 10, 0, 10]
            },
            {
              width: '*',
              text: Profile.about ? Profile.about : 'Possess strong commitment to team environment dynamics with the ability to contribute expertise and follow leadership directives at appropriate times.Keen learner and ready to take new challenges.',
              style: 'info',
              margin: [0, 10, 0, 10]
            },
          ],
          columnGap: 10
        },
        {
          columns: [
            {
              image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAASCAYAAACjMAXnAAAB5klEQVRIib3V24uNYRQG8J89E+NMapzKqLliUIpEcig5N5Ligmtq7v0TLkhy4VYSNyJnyWFITnFBXImEKElO5TS0au3asb89e28znnr73m/v9a1nve96nvcd0tXVpUFMxTKsxSTcxyVcx4dGUtVLPhersRQLMaZKzJss4ixu4Emz5OMxHyuwBrPqqbACn3APp3Eej/C9FnkHFqM7n1MaJCxCHx7gGk7iZrk9Qb4TGzC7YDsHGq+zLQdKucpF/4lYinQlOltz1dOwCpuykNGDQPoCF3AId/GxmuA60kZldY/9B8KXKbozacVv2IyDIcBaVpuIobkTW7Eco+ogfI5TOIKHoSu8y/9il49jQvxWKkgQVruFvYiY7ZiOLfnx+z/in2JfFjgHe7AgbXYsC5DK/4xf8dJaQB5B47AxR1ijF4fRk8nipJuMZ9nP9mzXrjwjyrhdJsu8+iMP/KiYhxPW5/iCi7iCx9iGJZiHlip5flbM23In+yUvwog8iLqb+DbENjzFfLSo54OBTqzLvDvkFhShbYAKGJbPmRiZ89BKqYg8LoYTA0AcAtud894cgcjd19LeHiL9CyGICAhLzWjyoLmaFi0v4mvO72B/cNRzn4floldxtYaF4myudg+8wlucy3G5Zlb8Bg9UZlBZutRjAAAAAElFTkSuQmCC',
              height: 16,
              width: 16,
              margin: [0, 10, 0, 10]

            },
            {
              width: 'auto',
              text: 'EDUCATION : ',
              style: 'head',
              margin: [0, 10, 0, 10]

            },
            {
              width: '*',
              text: Profile.OtherInfo.qualification || 'N/A',
              style: 'info',
              margin: [0, 10, 0, 10]

            },
          ],
          columnGap: 10
        },
        {
          columns: [
            {
              image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAB0UlEQVQ4jZWVuy9tURDGf+c4hCCuxOOKV0Rxi1NQKCREo1UorsKj01EQOhVB5f9wGw2nURCFRNxbEBKJxiPEsyAh8TgEGZmVjG2vc8/+ksmaPWvNt2fWmrUmlkwmAfKAAuAdmAO6gTcyIw78A/qBGJAGHhPqMgaMAjlA2X+ILLqAQ+AVWAN6HWE5UAncAkcaaTaQyArVt1rWO8JXHYeAxQgRCpqBDceRCEw+yT5EJHywH0HCuI75QL2mdANcq70EqFL9HLjTff9GEEQrsKsya+YGgR2VvjDHYIQO+VpKgh/GXmzsRVEIj4E/mvKqsf9Vu2ArCuG+J6VlFS98hJJmu+7xAbCn9jqgyUR4FnT0HUoLkNKanDD2AWBJ5XeYo4/QlkKu0ROeNaELLKRcJvVQNo09ZYJYiUJ4AUyF2LdVvPARNgDDGo3c04VMJNlE+AsYV73WELYBParP63uYFeGL0e1j0QmMqH4ShVAWduih2Fp7Nno6zNFHeA+se+YywpXAe2D0wc473fWez29H6EZJMRPsvNO/cEjXk2d/BigFTrWvhN0gieQnUKHfl8CVPmONuqfTsoc1eo3kZRZSaVhhqUtEcvqyTiDNScpLfiS2OFD9AZmzV7y+wYoOAAAAAElFTkSuQmCC',
              height: 16,
              width: 16,
              margin: [0, 10, 0, 10]

            },
            {
              width: 'auto',
              text: 'EXPERIENCE : ',
              style: 'head',
              margin: [0, 10, 0, 10]

            },
            {
              width: '*',
              text: Profile.OtherInfo.eperience || 'N/A ' + ' Years',
              style: 'info',
              margin: [0, 10, 0, 10]

            },
          ],
          columnGap: 10
        },
        {
          columns: [
            {
              image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAB0UlEQVQ4jZWVuy9tURDGf+c4hCCuxOOKV0Rxi1NQKCREo1UorsKj01EQOhVB5f9wGw2nURCFRNxbEBKJxiPEsyAh8TgEGZmVjG2vc8/+ksmaPWvNt2fWmrUmlkwmAfKAAuAdmAO6gTcyIw78A/qBGJAGHhPqMgaMAjlA2X+ILLqAQ+AVWAN6HWE5UAncAkcaaTaQyArVt1rWO8JXHYeAxQgRCpqBDceRCEw+yT5EJHywH0HCuI75QL2mdANcq70EqFL9HLjTff9GEEQrsKsya+YGgR2VvjDHYIQO+VpKgh/GXmzsRVEIj4E/mvKqsf9Vu2ArCuG+J6VlFS98hJJmu+7xAbCn9jqgyUR4FnT0HUoLkNKanDD2AWBJ5XeYo4/QlkKu0ROeNaELLKRcJvVQNo09ZYJYiUJ4AUyF2LdVvPARNgDDGo3c04VMJNlE+AsYV73WELYBParP63uYFeGL0e1j0QmMqH4ShVAWduih2Fp7Nno6zNFHeA+se+YywpXAe2D0wc473fWez29H6EZJMRPsvNO/cEjXk2d/BigFTrWvhN0gieQnUKHfl8CVPmONuqfTsoc1eo3kZRZSaVhhqUtEcvqyTiDNScpLfiS2OFD9AZmzV7y+wYoOAAAAAElFTkSuQmCC',
              height: 16,
              width: 16,
              margin: [0, 10, 0, 10]

            },
            {
              width: 'auto',
              text: 'CURRENT EMPLOYER: ',
              style: 'head',
              margin: [0, 10, 0, 10]

            },
            {
              width: '*',
              text: Profile.Businessinfo.name || 'N/A',
              style: 'info',
              margin: [0, 10, 0, 10]

            },
          ],
          columnGap: 10
        },
        {
          columns: [
            {
              image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAABr0lEQVQ4jaXVy6uNYRTH8c85G7lkouzOQLlEqY3CQOpEkSJRRDExIAOJP4CRwx9gQJ1cB6QkDomihFLGJmKkZOKWpNwSWrW2Hm/7lf2e32TvZ633+T7rWZf3Heh0OgrtwkEcxh0NNZjb4ncvTmM5rmDPeKEDWIJJuZ6OUexuAp2Ao1iKfQnfX/hO5cFn+o10EzbiEkZwsvC3cKhJpK38P5y53J7riPhj3qBv6K9ivQpXsQNf8KBJFwT0GRYXtoj4Yqbkc79AmdMxvK/YF2JmE2AXejtzWSpaas54oFGM43hT2KfhBOY1hYae52iWWoQbmPuP/XH4sjpo6CzO9wCP1YADeAH3coD+qNVut8t1tNDKSj6HsA6P8DptMXnXc3AmZytGv9/XA/oNt7ACswt7dMLm3BjRf03Y2jwgtDpv/rD66uuqnUMw3MuJF9iA9VnkUiODNZuiE7bgWo0/cnwzb7U1I+9qfh009A47cQTfe/gX4C6e5HM/sucP1F2/qijeMazp4XuJbZiKp3hbLVSdXuEyHucDM/AzCzsFn3Cu+67430irii/ELEzEh7+mEb8BWrNMcYi8+v8AAAAASUVORK5CYII=',
              height: 16,
              width: 16,
              margin: [0, 10, 0, 10]

            },
            {
              width: 'auto',
              text: 'PHONE : ',
              style: 'head',
              margin: [0, 10, 0, 10]

            },
            {
              width: '*',
              text: Profile.mobileno || 'N/A',
              style: 'info',
              margin: [0, 10, 0, 10]

            },
          ],
          columnGap: 10
        },
        {
          columns: [
            {
              image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAABKUlEQVQ4ja3UPStGYRgH8J+XsigWT8KixPAMFiSljAY838AoYSC7lFgYKCUpI6WspESZWEwSi2/AIpKELt1K8vp0/nXV6XTfv851v5ySfD5fwDgaZJOVQE/QkRH4llJUZgniOdAN3GWIbgc6i0HcZgAeYTjQYVyiC6dFYs9YQD8KgU5iH3XoxDye/gGeoRdzqdYDvUctdrGclqM7Df4pL1hCD0pwjFFp998Tz0OII1aFdix+g16lVqcwjT00f4Q+pwU7qZUZ9OEijYlTsoY2XKeNGfsMfIW+v5/AAW7SV/elVkdSBdj61eTyX9YtJh2m9raQxyaafpr0GxqpwECqP6U07VymCbQsa7Qsl8vFOW1ENR7wWGTFhQlrNX59gdegPl23YhPL+ITzV8QVRb1VO0z0AAAAAElFTkSuQmCC',
              height: 16,
              width: 16,
              margin: [0, 10, 0, 10]

            },
            {
              width: 'auto',
              text: 'EMAIL : ',
              style: 'head',
              margin: [0, 10, 0, 10]

            },
            {
              width: '*',
              text: Profile.email || 'N/A',
              style: 'info',
              margin: [0, 10, 0, 10]

            },
          ],
          columnGap: 10
        },
        {
          columns: [
            {
              image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAYCAYAAAAYl8YPAAAB0klEQVQ4jZXVP6jNYRzH8ZdzSVK33FsnhcEiOv4tKIOJgel2ymAwWPyJUsImmUhM6o4mBgxiMCDJn4kBWZBBikL+FK7/9NT3p+c+nt+9edcZzvf7PJ/z/fN8v2dKr9fTQhdrsQiz8BWvcSs+/zC1YhvCLmzFnIr/M+7hIK7mjoFut5t/X4gL2ITBloinYV6cSdHeronNDqHlbXkXDGAdxhrBTuY/iqWVS19wH89aRA9jTS62IsLO+YVRLMbKaEQfT4tzSWNvSr8R61eacRw74/K3SOc8NlSiTF2f3wnlJYXzeYRf4zGOFPYZWNCJNzS3cD7BuxaxxN3oZM5wJ4xjlV+aiOlF8/4W72OkldOLgrfRj/c2LptG/U7hGIwGDFXERrCtsL1MTWnELkaEOetxDVviaazGMZzBzOLsZbxonsOjmLOR4tAynJykfj9xGr/zIp7A90ku1riJK4qO3IjZ/B/SYz7UnM/FfuBApXYTcRbXG3+5gt6k3GM8JuNVzPOHWmR57aqbtGBfOaM1sU/YgfcTCJ2KDo6jJpZ4iD2xhkoeYHc8iXGUNctJe34YqzLjW2ys7LTWNHP241IYUmO2x8aoUvt3ykkbZXOMUJqQc60n8QdMjl4LGzHG0gAAAABJRU5ErkJggg==',
              height: 16,
              width: 16,
              margin: [0, 10, 0, 10]

            },
            {
              width: 'auto',
              text: 'CURRENT ADDRESS : ',
              style: 'head',
              margin: [0, 10, 0, 10]

            },
            {
              width: '*',
              text: Profile.addressinfo.address + ', ' + Profile.addressinfo.landmark + ', ' + Profile.addressinfo.cityname + ', ' + Profile.addressinfo.statename + ' - ' + Profile.addressinfo.pincode,
              style: 'info',
              margin: [0, 10, 0, 20]

            },
          ],
          columnGap: 10
        },
        {
          columns: [
            {
              image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAYCAYAAAAYl8YPAAAB0klEQVQ4jZXVP6jNYRzH8ZdzSVK33FsnhcEiOv4tKIOJgel2ymAwWPyJUsImmUhM6o4mBgxiMCDJn4kBWZBBikL+FK7/9NT3p+c+nt+9edcZzvf7PJ/z/fN8v2dKr9fTQhdrsQiz8BWvcSs+/zC1YhvCLmzFnIr/M+7hIK7mjoFut5t/X4gL2ITBloinYV6cSdHeronNDqHlbXkXDGAdxhrBTuY/iqWVS19wH89aRA9jTS62IsLO+YVRLMbKaEQfT4tzSWNvSr8R61eacRw74/K3SOc8NlSiTF2f3wnlJYXzeYRf4zGOFPYZWNCJNzS3cD7BuxaxxN3oZM5wJ4xjlV+aiOlF8/4W72OkldOLgrfRj/c2LptG/U7hGIwGDFXERrCtsL1MTWnELkaEOetxDVviaazGMZzBzOLsZbxonsOjmLOR4tAynJykfj9xGr/zIp7A90ku1riJK4qO3IjZ/B/SYz7UnM/FfuBApXYTcRbXG3+5gt6k3GM8JuNVzPOHWmR57aqbtGBfOaM1sU/YgfcTCJ2KDo6jJpZ4iD2xhkoeYHc8iXGUNctJe34YqzLjW2ys7LTWNHP241IYUmO2x8aoUvt3ykkbZXOMUJqQc60n8QdMjl4LGzHG0gAAAABJRU5ErkJggg==',
              height: 16,
              width: 16,
              margin: [0, 10, 0, 10]

            },
            {
              width: 'auto',
              text: 'PRESENT ADDRESS : ',
              style: 'head',
              margin: [0, 10, 0, 20]

            },
            {
              width: '*',
              text: Profile.addressinfo.address1 + ', ' + Profile.addressinfo.landmark1 + ', ' + Profile.addressinfo.cityname + ', ' + Profile.addressinfo.statename + ' - ' + Profile.addressinfo.pincode1,
              style: 'info',
              margin: [0, 10, 0, 10]

            },
          ],
          columnGap: 10
        },
      ],
      footer: {
        columns: [
          { text: 'Resume Genrated by - My Salon Zone App', style: 'date', margin: [30, 0, 0, 0] }
        ]
      },
      styles: {
        name: {
          bold: true,
          fontSize: 30,
          alignment: 'left',
          uppercase: true
        },
        header: {
          bold: true,
          fontSize: 18,
          alignment: 'left'
        },
        sub_header: {
          fontSize: 14,
          alignment: 'left',
          bold: true
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
        head: {
          fontSize: 14,
          bold: true,
        },
        info: {
          fontSize: 14,
          bold: true
        }
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
      let filename = Profile.name + "-" + moment().format("DD-MM-YYYY") + ".pdf";
      filename = filename.replace(" ", "");
      this.file.writeFile(this.file.externalRootDirectory + "MSZApp/", filename, binaryArray, { replace: true }).then((result: any) => {
        this.common.dismissLoader();
        this.presentAlertConfirm(Profile, this.file.externalRootDirectory + "MSZApp/" + filename);
      }).catch(y => {
        this.common.dismissLoader();
        console.log(y);
      });
    }, 2000);
  }



  async presentAlertConfirm(ev, address) {
    const alert = await this.common.alertController.create({
      header: 'Resume Genrated Successfully',
      message: 'Dear ,' + ev.name + ' Your Resume Downloaded on ' + address,
      buttons: [
        {
          text: 'Open Resume',
          cssClass: 'secondary',
          handler: (blah) => {
            this.fileopen.open(address, 'application/pdf')
              .then(() => console.log('File is opened'))
              .catch(e => console.log('Error opening file', e));
          }
        }, {
          text: 'Share',
          handler: () => {
            this.common.presentLoader();
            this.social.share(ev.name + " Resume generated via-My Salon Zone", ev.name + " Resume", [address], "").then((res: any) => {
              this.common.dismissLoader();
            }).catch(y => {
              this.common.dismissLoader();
            });
          }
        }
      ]
    });
    await alert.present();
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

  GetSlider() {
    let id = 3;
    this.common.PostMethod("GetBanners", { id: id }).then((res: any) => {
      this.lists.sliders = res.Data;
    });
  }

  UserEdit() {
    let profile = JSON.parse(localStorage.getItem("UserProfile"));
    profile.useredit = true;
    this.common.PageGoto('Forward', 'stylistregister', profile);
  }

}
