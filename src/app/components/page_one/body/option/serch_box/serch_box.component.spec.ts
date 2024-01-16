/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Serch_boxComponent } from './serch_box.component';

describe('Serch_boxComponent', () => {
  let component: Serch_boxComponent;
  let fixture: ComponentFixture<Serch_boxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Serch_boxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Serch_boxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
