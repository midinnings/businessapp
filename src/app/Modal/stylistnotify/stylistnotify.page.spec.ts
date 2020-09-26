import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StylistnotifyPage } from './stylistnotify.page';

describe('StylistnotifyPage', () => {
  let component: StylistnotifyPage;
  let fixture: ComponentFixture<StylistnotifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylistnotifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StylistnotifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
