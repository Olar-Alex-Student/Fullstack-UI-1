import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { NgModel, NgForm } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

// import getToken
import { GetTokenAuth0Component } from '../../auth0/get-token-auth0/get-token-auth0.component';

@Component({
  selector: 'app-login-auth0',
  templateUrl: './login-auth0.component.html',
  styleUrls: ['./login-auth0.component.css']
})
export class LoginAuth0Component {

  // 
  addUserRequest: User = {
    userId: "",
    email: "",
    name: "",
    username: "",
    nickname: "",
    picture: ""
  }

  // 
  constructor(public auth: AuthService, public user: UsersService) { }

  // Login Redirect Auth 0
  loginWithRedirect(): void {

    // Prop de la Auth0 login cu redirect
    this.auth.loginWithRedirect()
    .subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (response) => {
        console.log(response)
      }
    })

  }
  
}
