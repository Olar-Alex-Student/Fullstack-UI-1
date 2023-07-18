import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  constructor(private usersService: UsersService, public auth: AuthService) {
  }

  ngOnInit(): void {
    this.usersService.getAllUsers()
    .subscribe({
      next: (users: any) => {
        this.users = users  
        console.log(users);
      },
      error: (response: any) => {
        console.log(response);
      }
    })
  }
}
