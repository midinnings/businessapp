import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmployeelistPage } from './employeelist.page';

describe('EmployeelistPage', () => {
  let component: EmployeelistPage;
  let fixture: ComponentFixture<EmployeelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeelistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
