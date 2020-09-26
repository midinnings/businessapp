import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemplateselectorPage } from './templateselector.page';

describe('TemplateselectorPage', () => {
  let component: TemplateselectorPage;
  let fixture: ComponentFixture<TemplateselectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateselectorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateselectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
