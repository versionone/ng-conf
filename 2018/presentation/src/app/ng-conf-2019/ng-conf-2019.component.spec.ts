import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgConf2019Component } from './ng-conf-2019.component';

describe('NgConf2019Component', () => {
  let component: NgConf2019Component;
  let fixture: ComponentFixture<NgConf2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgConf2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgConf2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
