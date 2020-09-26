import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylistregisterPage } from './stylistregister.page';

describe('StylistregisterPage', () => {
  let component: StylistregisterPage;
  let fixture: ComponentFixture<StylistregisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylistregisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylistregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
