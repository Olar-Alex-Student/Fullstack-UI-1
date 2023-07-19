import { Component, OnInit } from '@angular/core';
import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-get-token-auth0',
  templateUrl: './get-token-auth0.component.html',
  styleUrls: ['./get-token-auth0.component.css']
})
export class GetTokenAuth0Component implements OnInit {
  
  // 
  constructor(public auth: AuthService) {
  }

  // 
  ngOnInit(): void {
    
  }

  // 
  getToken(): void {

    // Prop de la AuthService
    this.auth.getAccessTokenSilently()
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
