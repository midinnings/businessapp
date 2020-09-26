import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FestivalnvishesPage } from './festivalnvishes.page';

describe('FestivalnvishesPage', () => {
  let component: FestivalnvishesPage;
  let fixture: ComponentFixture<FestivalnvishesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivalnvishesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FestivalnvishesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
