import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ThankyouusmsPage } from './thankyouusms.page';

describe('ThankyouusmsPage', () => {
  let component: ThankyouusmsPage;
  let fixture: ComponentFixture<ThankyouusmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankyouusmsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ThankyouusmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
