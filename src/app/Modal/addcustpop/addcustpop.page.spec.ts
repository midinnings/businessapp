import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcustpopPage } from './addcustpop.page';

describe('AddcustpopPage', () => {
  let component: AddcustpopPage;
  let fixture: ComponentFixture<AddcustpopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcustpopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcustpopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
