import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TemplatemanagerPage } from './templatemanager.page';

describe('TemplatemanagerPage', () => {
  let component: TemplatemanagerPage;
  let fixture: ComponentFixture<TemplatemanagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatemanagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TemplatemanagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
