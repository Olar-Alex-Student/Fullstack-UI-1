import { Component, OnInit, Inject } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { NgModel, NgForm } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userIdRequest: User= {

    // Definirea parametrior stadard pentru un utilzator
    email: "",
    emailVerified: true,
    name: "",
    nickname: "",
    picture: "",
    userId: "",
    username: ""
    
  };

  // 
  constructor(public auth: AuthService, private userService: UsersService, private router: Router) {
  }

  // 
  ngOnInit(): void {
    
  }

  // 
  login () {
    this.userService.getUserId(this.userIdRequest)
    .subscribe({
      next: (response) => {

        // Afisarea rezultat in consola
        console.log(response)

        // Redirectionare pe pagina principala
        this.router.navigate([""])
      },
      error: (response) => {
        
        // Afisarea eroare in conola
        console.log(response)
        console.log(this.userIdRequest.email)
        //console.log(this.userIdRequest.password)
      }
    })
  }

  // Login Redirect Auth 0
  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }
}
