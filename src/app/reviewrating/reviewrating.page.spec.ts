import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewratingPage } from './reviewrating.page';

describe('ReviewratingPage', () => {
  let component: ReviewratingPage;
  let fixture: ComponentFixture<ReviewratingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewratingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewratingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
