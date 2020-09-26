import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblistingPage } from './joblisting.page';

describe('JoblistingPage', () => {
  let component: JoblistingPage;
  let fixture: ComponentFixture<JoblistingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoblistingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoblistingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
