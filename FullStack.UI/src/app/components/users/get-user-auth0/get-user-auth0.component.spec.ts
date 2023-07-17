import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserAuth0Component } from './get-user-auth0.component';

describe('GetUserAuth0Component', () => {
  let component: GetUserAuth0Component;
  let fixture: ComponentFixture<GetUserAuth0Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetUserAuth0Component]
    });
    fixture = TestBed.createComponent(GetUserAuth0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
