import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { LogoutOptions } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-auth0',
  templateUrl: './logout-auth0.component.html',
  styleUrls: ['./logout-auth0.component.css']
})
export class LogoutAuth0Component {

  // 
  constructor(public auth: AuthService, private router: Router) {}

  // 
  onInit(): void {

  }

  // 
  logout(): void {
    this.auth.logout()

    this.router.navigate([""])
  }
}
