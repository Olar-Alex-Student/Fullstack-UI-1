import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { UsersService } from 'src/app/services/users.service';
import { GetUserDataAuth0Component } from '../get-user-data-auth0/get-user-data-auth0.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user-auth0',
  templateUrl: './add-user-auth0.component.html',
  styleUrls: ['./add-user-auth0.component.css']
})
export class AddUserAuth0Component implements OnInit {

  user: User = {
    userId: "",
    email: "",
    name: "",
    username: "",
    nickname: "",
    picture: ""
  }

  // 
  constructor(public userService: UsersService, public authService: AuthService, private router: Router, private route: ActivatedRoute) {

  }

  // 
  ngOnInit(): void {

  }

  // Adaugare User
  addNewUser(): void {
    this.userService.addNewUser(this.user)
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
