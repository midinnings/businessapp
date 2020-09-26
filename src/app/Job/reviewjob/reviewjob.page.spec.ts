import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewjobPage } from './reviewjob.page';

describe('ReviewjobPage', () => {
  let component: ReviewjobPage;
  let fixture: ComponentFixture<ReviewjobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewjobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
