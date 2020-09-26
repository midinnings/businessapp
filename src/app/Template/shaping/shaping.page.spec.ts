import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShapingPage } from './shaping.page';

describe('ShapingPage', () => {
  let component: ShapingPage;
  let fixture: ComponentFixture<ShapingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShapingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
