import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { NgModel, NgForm } from '@angular/forms';
import { AuthService, User } from '@auth0/auth0-angular';
import { AddUserAuth0Component } from '../../auth0/add-user-auth0/add-user-auth0.component';

// import getToken
import { GetTokenAuth0Component } from '../../auth0/get-token-auth0/get-token-auth0.component';
import { Auth0Service } from 'src/app/services/auth0.service';

@Component({
  selector: 'app-login-auth0',
  templateUrl: './login-auth0.component.html',
  styleUrls: ['./login-auth0.component.css']
})
export class LoginAuth0Component {

  // ctor
  constructor(public authService: AuthService, public userService: UsersService, public auth0Service: Auth0Service) {

    // 
    this.auth0Service.getUserData().subscribe(user => {
      this.user = user
      console.log(user)
    })
  }

  // Definire user care preia datele di Auth0
  user: any

  // Variabila locala
  userAddRequest: User = {
    userId: "",
    email: "",
    name: "",
    username: "",
    nickname: "",
    picture: ""
  }

  // Login Redirect Auth 0
  login(): any {

    // Prop de la Auth0 login cu redirect
    this.authService.loginWithRedirect().subscribe(() => {
      
    })



  }

  insertUser(userRequest: User) {
    // POST user nou
    this.userService.addNewUser(userRequest)
      .subscribe({
        next: (response: any) => {
          console.log(response)
        },
        error: (response: any) => {
          console.log(response)
        }
      })
  }

}


