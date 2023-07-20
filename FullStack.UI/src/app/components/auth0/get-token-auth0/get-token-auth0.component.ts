import { Component, OnInit } from '@angular/core';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { Auth0Service } from 'src/app/services/auth0.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-get-token-auth0',
  templateUrl: './get-token-auth0.component.html',
  styleUrls: ['./get-token-auth0.component.css']
})
export class GetTokenAuth0Component {

  // ctor
  constructor(public auth0: Auth0Service) {
  }

  // 
  getToken(): void {
    this.auth0.getToken()
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
