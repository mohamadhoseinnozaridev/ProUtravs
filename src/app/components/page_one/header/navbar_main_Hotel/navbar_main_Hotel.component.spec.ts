/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Navbar_main_HotelComponent } from './navbar_main_Hotel.component';

describe('Navbar_main_HotelComponent', () => {
  let component: Navbar_main_HotelComponent;
  let fixture: ComponentFixture<Navbar_main_HotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Navbar_main_HotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Navbar_main_HotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
