import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { NgModel, NgForm } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-auth0',
  templateUrl: './login-auth0.component.html',
  styleUrls: ['./login-auth0.component.css']
})
export class LoginAuth0Component {
  
  // 
  constructor(public auth: AuthService) {}

  // Login Redirect Auth 0
  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

}
