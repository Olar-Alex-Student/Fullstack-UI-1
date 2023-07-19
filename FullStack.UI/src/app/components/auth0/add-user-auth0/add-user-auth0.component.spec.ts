import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserAuth0Component } from './add-user-auth0.component';

describe('AddUserAuth0Component', () => {
  let component: AddUserAuth0Component;
  let fixture: ComponentFixture<AddUserAuth0Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserAuth0Component]
    });
    fixture = TestBed.createComponent(AddUserAuth0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
