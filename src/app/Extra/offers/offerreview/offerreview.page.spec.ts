import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferreviewPage } from './offerreview.page';

describe('OfferreviewPage', () => {
  let component: OfferreviewPage;
  let fixture: ComponentFixture<OfferreviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferreviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferreviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
