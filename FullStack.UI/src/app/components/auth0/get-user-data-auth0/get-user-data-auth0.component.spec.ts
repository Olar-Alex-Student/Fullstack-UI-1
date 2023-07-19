import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserDataAuth0Component } from './get-user-data-auth0.component';

describe('GetUserDataAuth0Component', () => {
  let component: GetUserDataAuth0Component;
  let fixture: ComponentFixture<GetUserDataAuth0Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetUserDataAuth0Component]
    });
    fixture = TestBed.createComponent(GetUserDataAuth0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
