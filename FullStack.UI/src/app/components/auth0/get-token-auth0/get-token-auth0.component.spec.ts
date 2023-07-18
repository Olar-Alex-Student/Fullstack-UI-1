import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTokenAuth0Component } from './get-token-auth0.component';

describe('GetTokenAuth0Component', () => {
  let component: GetTokenAuth0Component;
  let fixture: ComponentFixture<GetTokenAuth0Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTokenAuth0Component]
    });
    fixture = TestBed.createComponent(GetTokenAuth0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
