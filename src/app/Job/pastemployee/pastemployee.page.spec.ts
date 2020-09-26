import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PastemployeePage } from './pastemployee.page';

describe('PastemployeePage', () => {
  let component: PastemployeePage;
  let fixture: ComponentFixture<PastemployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastemployeePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PastemployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
