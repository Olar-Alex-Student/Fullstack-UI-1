import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { UsersService } from 'src/app/services/users.service';
import { GetUserDataAuth0Component } from '../get-user-data-auth0/get-user-data-auth0.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth0Service } from 'src/app/services/auth0.service';

@Component({
  selector: 'app-add-user-auth0',
  templateUrl: './add-user-auth0.component.html',
  styleUrls: ['./add-user-auth0.component.css']
})
export class AddUserAuth0Component {

  constructor(public authService: AuthService, public auth0Service: Auth0Service, public userService: UsersService) {
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

  // POSt user in baza de date cu datele li din Auth0
  addNewUser(): any {

    // Atribire de valori
    this.userAddRequest['userId'] = this.user.sub
    this.userAddRequest['email'] = this.user.email
    this.userAddRequest['name'] = this.user.name
    this.userAddRequest['username'] = this.user.name
    this.userAddRequest['nickname'] = this.user.nickname
    this.userAddRequest['picture'] = this.user.picture

    this.userService.addNewUser(this.userAddRequest)
    .subscribe({
      next: (response: any) => {
        console.log(response)
      },
      error: (response: any) => {
        console.log(response)
      }
    })

  }

  // 
}
