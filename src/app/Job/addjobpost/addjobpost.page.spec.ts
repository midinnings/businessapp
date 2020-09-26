import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobpostPage } from './addjobpost.page';

describe('AddjobpostPage', () => {
  let component: AddjobpostPage;
  let fixture: ComponentFixture<AddjobpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddjobpostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddjobpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
