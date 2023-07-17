import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUsersAuth0Component } from './get-users-auth0.component';

describe('GetUsersAuth0Component', () => {
  let component: GetUsersAuth0Component;
  let fixture: ComponentFixture<GetUsersAuth0Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetUsersAuth0Component]
    });
    fixture = TestBed.createComponent(GetUsersAuth0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
