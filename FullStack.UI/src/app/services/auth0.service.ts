import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {

  constructor(public auth: AuthService ,private http: HttpClient) {}

  getUserRoles$(userID: string): void {
    this.http.get<any>(
      `<MY_DOMAIN>.auth0.com/api/v2/users/${userID}/roles`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.getToken}`)
    });
  }

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
