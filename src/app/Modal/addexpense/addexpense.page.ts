import { CommonService } from './../../Service/common.service';
import { UserPipe } from 'src/app/Pipes/pipe/user.pipe';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.page.html',
  styleUrls: ['./addexpense.page.scss'],
})
export class AddexpensePage implements OnInit {

  constructor(public modal: ModalController, public fb: FormBuilder, public common: CommonService) { }
  expenseform: FormGroup;
  ngOnInit() {
    this.expenseform = this.fb.group({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      b_id: new FormControl(new UserPipe().transform('b_id')),
      userid: new FormControl(localStorage.getItem("UserId"))
    });
  }

  close() {
    this.modal.dismiss();
  }
  SaveExpense() {
    this.common.presentLoader();
    this.common.PostMethod("AddExpensen", this.expenseform.value).then((res: any) => {
      this.common.dismissLoader();
      if (res.Status == 1) {
        this.common.presentToast(res.Message, 4000);
        this.modal.dismiss({ Status: true });
      } else {
        this.common.presentToast(res.Message, 4000);
      }
    })
  }
}
