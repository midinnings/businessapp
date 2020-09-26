import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddexpensePage } from './addexpense.page';

describe('AddexpensePage', () => {
  let component: AddexpensePage;
  let fixture: ComponentFixture<AddexpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexpensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddexpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
