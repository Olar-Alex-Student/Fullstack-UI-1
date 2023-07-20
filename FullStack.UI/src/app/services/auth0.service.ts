import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {

  constructor(public auth: AuthService) {}

  // Get la token
  getToken(): any {

    // Retrun la token-ul user-ului di sesiune
    return this.auth.getAccessTokenSilently();
  }

  // Get date despre user curent din sesiune
  getUserData() {
    
    // Return la datele user-ului din sesiune
    return this.auth.user$
  }

  // 
}
