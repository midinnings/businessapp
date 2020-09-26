import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusniessregisterPage } from './busniessregister.page';

describe('BusniessregisterPage', () => {
  let component: BusniessregisterPage;
  let fixture: ComponentFixture<BusniessregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusniessregisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusniessregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
