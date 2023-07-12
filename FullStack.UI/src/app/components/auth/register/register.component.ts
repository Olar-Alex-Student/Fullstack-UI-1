import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addUserRequest: User= {

      // Definirea parametrior stadard pentru un utilzator
      id: "",
      name: "",
      email: "",
      password: "",
  };

  // Creat de rute + utilizatori
  constructor(private userService: UsersService, private router: Router) {
    
  }

  //
  ngOnInit(): void {
    
  }

  // Adaugare Utilizator
  addUser() {
    // Post catre API la noul utilizator
    this.userService.addNewUser(this.addUserRequest)
    .subscribe({
      next: (user) => {

        //Redirectionare catre pagina cu toti utilizatoriis
        this.router.navigate(["users"])
      },
      error: (response) => {

        // Afisarea de modal cu eroarea

        // Afisarea Erorii in consola
        console.log(response)
      }
    });
  }
}
