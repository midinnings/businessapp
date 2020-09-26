import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomdatePage } from './customdate.page';

describe('CustomdatePage', () => {
  let component: CustomdatePage;
  let fixture: ComponentFixture<CustomdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
