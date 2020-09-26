import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindcandidatePage } from './findcandidate.page';

describe('FindcandidatePage', () => {
  let component: FindcandidatePage;
  let fixture: ComponentFixture<FindcandidatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindcandidatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindcandidatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
