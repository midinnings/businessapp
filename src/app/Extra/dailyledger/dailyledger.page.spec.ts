import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyledgerPage } from './dailyledger.page';

describe('DailyledgerPage', () => {
  let component: DailyledgerPage;
  let fixture: ComponentFixture<DailyledgerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyledgerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyledgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
