import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerhistoryPage } from './customerhistory.page';

describe('CustomerhistoryPage', () => {
  let component: CustomerhistoryPage;
  let fixture: ComponentFixture<CustomerhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerhistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
