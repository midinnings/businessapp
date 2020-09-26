import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuccesscheckoutPage } from './successcheckout.page';

describe('SuccesscheckoutPage', () => {
  let component: SuccesscheckoutPage;
  let fixture: ComponentFixture<SuccesscheckoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesscheckoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccesscheckoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
