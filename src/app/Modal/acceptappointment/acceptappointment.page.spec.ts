import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcceptappointmentPage } from './acceptappointment.page';

describe('AcceptappointmentPage', () => {
  let component: AcceptappointmentPage;
  let fixture: ComponentFixture<AcceptappointmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptappointmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcceptappointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
