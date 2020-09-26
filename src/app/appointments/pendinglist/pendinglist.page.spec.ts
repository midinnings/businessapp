import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendinglistPage } from './pendinglist.page';

describe('PendinglistPage', () => {
  let component: PendinglistPage;
  let fixture: ComponentFixture<PendinglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendinglistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendinglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
