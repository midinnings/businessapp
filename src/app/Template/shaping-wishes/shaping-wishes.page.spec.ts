import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShapingWishesPage } from './shaping-wishes.page';

describe('ShapingWishesPage', () => {
  let component: ShapingWishesPage;
  let fixture: ComponentFixture<ShapingWishesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapingWishesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShapingWishesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
