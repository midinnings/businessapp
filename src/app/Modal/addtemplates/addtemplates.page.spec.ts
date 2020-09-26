import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddtemplatesPage } from './addtemplates.page';

describe('AddtemplatesPage', () => {
  let component: AddtemplatesPage;
  let fixture: ComponentFixture<AddtemplatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtemplatesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddtemplatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
