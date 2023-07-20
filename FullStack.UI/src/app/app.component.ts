import { Component } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import { UsersService } from './services/users.service';
import { Auth0Service } from './services/auth0.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FullStack.UI';

  // Definire user care preia datele di Auth0
  user: any

  // Variabila locala
  userAddRequest: User = {
    userId: "",
    email: "",
    name: "",
    username: "",
    nickname: "",
    picture: ""
  }

  constructor(public authService: AuthService, public userService: UsersService, public auth0Service: Auth0Service) {

    // Atribuirea datelor utilizatorului sesiunii
    this.auth0Service.getUserData().subscribe(user => {
      this.user = user
      console.log(user)

      // Atribire de valori

      this.userAddRequest['userId'] = this.user.sub
      this.userAddRequest['email'] = this.user.email
      this.userAddRequest['name'] = this.user.name
      this.userAddRequest['username'] = this.user.name
      this.userAddRequest['nickname'] = this.user.nickname
      this.userAddRequest['picture'] = this.user.picture

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
