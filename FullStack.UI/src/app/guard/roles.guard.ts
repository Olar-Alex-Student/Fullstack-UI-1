import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';
import { AuthService } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})

export class MyGuard implements CanActivate {
  userProfile: any;

  constructor(private userService: UsersService, private authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    return this.isAuthenticated(route);
  }

  private isAuthenticated(route: ActivatedRouteSnapshot): boolean {

    this.authService.user$.subscribe((user) => {
      this.userProfile = user;
    });
    const role = [this.userProfile.name];
    const expectedRole = route.data['expectedRole'];
    const roleMatch = role.findIndex(role => expectedRole.indexOf(role) !== -1)
    return roleMatch < 0 ? false : true;
  }
}

