import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { AuthService, User } from '@auth0/auth0-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth0Service } from '../services/auth0.service';
import { Role } from '../models/role.model';


@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {

  // Definire user care preia datele di Auth0
  user: any

  // Variabila locala
  roleAddRequest: Role = {
    roleId: "4a4eb9df-217c-4d62-bc71-64ccb6e629d8",
    name: "Cititor"
  }

  // Variabila locala
  userAddRequest: User = {
    userId: "",
    email: "",
    name: "",
    username: "",
    nickname: "",
    picture: "",
    roleId: this.roleAddRequest.roleId,
    role: this.roleAddRequest
  }
  role: any;

  constructor(public authService: AuthService, public userService: UsersService, public auth0Service: Auth0Service , private route: Router) {

    // Atribuirea datelor utilizatorului sesiunii
    this.auth0Service.getUserData().subscribe((user: any) => {
      this.user = user
      console.log(user)

      // 
      this.userAddRequest['roleId'] = this.roleAddRequest.roleId;

      // 
      this.userAddRequest['role'] = this.roleAddRequest;

      // Atribire de valori

      this.userAddRequest['userId'] = this.user.sub
      this.userAddRequest['email'] = this.user.email
      this.userAddRequest['name'] = this.user.name
      this.userAddRequest['username'] = this.user.name
      this.userAddRequest['nickname'] = this.user.nickname
      this.userAddRequest['picture'] = this.user.picture

      // 
      console.log(this.userAddRequest)

      // 
      this.insertUser(this.userAddRequest)
    })
  }

  insertUser(userRequest: User) {
    // POST user nou
    this.userService.addNewUser(userRequest)
      .subscribe({
        next: (response: any) => {
          this.userAddRequest['roleId'] = response['roleId']
          console.log(response)
        },
        error: (response: any) => {
          console.log(response)
        }
      })
  }

  //
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthenticated(route)
  }

  //
  private isAuthenticated(route: ActivatedRouteSnapshot): boolean {

    // Role
    const role = this.userAddRequest['roleId']
    console.log("Role ",role)

    // Expected Role
    const expectedRole = route.data['expectedRole'];
    console.log("Expected Role: ",expectedRole)
    
    // Verificare
    if(role === expectedRole){
      return true;
    }
    return false;
  }

}