import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenjobPage } from './openjob.page';

describe('OpenjobPage', () => {
  let component: OpenjobPage;
  let fixture: ComponentFixture<OpenjobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenjobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
