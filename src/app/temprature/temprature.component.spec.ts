/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TempratureComponent } from './temprature.component';

describe('TempratureComponent', () => {
  let component: TempratureComponent;
  let fixture: ComponentFixture<TempratureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempratureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
