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
  constructor(public auth: AuthService, private userService: UsersService) {}

  // Login Redirect Auth 0
  loginWithRedirect(): void {

    // Prop de la Auth0 login cu redirect
    this.auth.loginWithRedirect();

  }
}
