/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Banner_siteComponent } from './banner_site.component';

describe('Banner_siteComponent', () => {
  let component: Banner_siteComponent;
  let fixture: ComponentFixture<Banner_siteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Banner_siteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Banner_siteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
