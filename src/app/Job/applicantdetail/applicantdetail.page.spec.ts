import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplicantdetailPage } from './applicantdetail.page';

describe('ApplicantdetailPage', () => {
  let component: ApplicantdetailPage;
  let fixture: ComponentFixture<ApplicantdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantdetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicantdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
