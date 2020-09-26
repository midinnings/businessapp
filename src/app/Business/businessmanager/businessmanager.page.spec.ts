import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessmanagerPage } from './businessmanager.page';

describe('BusinessmanagerPage', () => {
  let component: BusinessmanagerPage;
  let fixture: ComponentFixture<BusinessmanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessmanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessmanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
