import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppliedjobPage } from './appliedjob.page';

describe('AppliedjobPage', () => {
  let component: AppliedjobPage;
  let fixture: ComponentFixture<AppliedjobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedjobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppliedjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
