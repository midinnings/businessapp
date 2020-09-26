import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BussinessSettingsPage } from './bussiness-settings.page';

describe('BussinessSettingsPage', () => {
  let component: BussinessSettingsPage;
  let fixture: ComponentFixture<BussinessSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinessSettingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BussinessSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
