import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeermanagmentPage } from './employeermanagment.page';

describe('EmployeermanagmentPage', () => {
  let component: EmployeermanagmentPage;
  let fixture: ComponentFixture<EmployeermanagmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeermanagmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeermanagmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
