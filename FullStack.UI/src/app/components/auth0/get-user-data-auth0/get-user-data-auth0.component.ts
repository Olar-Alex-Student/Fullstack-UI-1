import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModule, AuthService, User } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-get-user-data-auth0',
  templateUrl: './get-user-data-auth0.component.html',
  styleUrls: ['./get-user-data-auth0.component.css']
})
export class GetUserDataAuth0Component {
}
