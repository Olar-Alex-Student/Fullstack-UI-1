import { Component } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { UsersService } from './services/users.service';
import { Auth0Service } from './services/auth0.service';
import { Role } from './models/role.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GlocalSoft';

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

  constructor(public authService: AuthService, public userService: UsersService, public auth0Service: Auth0Service) {

    // Atribuirea datelor utilizatorului sesiunii
    this.auth0Service.getUserData().subscribe(user => {
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

      this.insertUser(this.userAddRequest)
    })
  }

  insertUser(userRequest: User) {
    // POST user nou
    this.userService.addNewUser(userRequest)
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
