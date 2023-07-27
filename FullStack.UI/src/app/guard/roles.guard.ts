import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { AuthService, User } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class RolesGuard implements CanActivate {
  token: string = "";
  userID: string = "";
  domain: string = "dev-bidilxy6y6edge7o.us.auth0.com"
  role: string = "";

  constructor(private userService: UsersService, private authService: AuthService, private router: Router, private http: HttpClient) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    return this.isAuthenticated(route)
  }

  private getUserRoles$(userId: string) {
    return this.http.get<string>(
      `http://${this.domain}/api/v2/users/${userId}roles`, {
      headers: new HttpHeaders().set(
        'Authorization', `Bearer ${this.token}`
        )
    });
  }

  private isAuthenticated(route: ActivatedRouteSnapshot): boolean {
    //Token User
    this.authService.getAccessTokenSilently().subscribe(token => {
      this.token = token
      console.log("Token:", token)
    })

    // UserID
    this.authService.user$.subscribe((user: any) => {
      this.userID = user?.sub
      console.log("User ID:", this.userID)
    })

    // Rol
    this.getUserRoles$(this.userID).subscribe(role => {
      this.role = role
    })
    console.log("Role: ",this.role)
    // this.role = "Admin"
    // console.log("Role: ",this.role)

    // Expected Role
    const expectedRole = route.data['expectedRole'];
    console.log("Expected Role: ",expectedRole)

    // Verificare
    if(this.role === expectedRole){
      return true;
    }
    return false;
  }
}

