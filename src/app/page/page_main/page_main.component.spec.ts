/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Page_mainComponent } from './page_main.component';

describe('Page_mainComponent', () => {
  let component: Page_mainComponent;
  let fixture: ComponentFixture<Page_mainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page_mainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page_mainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
