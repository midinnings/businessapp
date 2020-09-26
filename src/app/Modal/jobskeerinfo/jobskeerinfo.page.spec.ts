import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobskeerinfoPage } from './jobskeerinfo.page';

describe('JobskeerinfoPage', () => {
  let component: JobskeerinfoPage;
  let fixture: ComponentFixture<JobskeerinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobskeerinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobskeerinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
