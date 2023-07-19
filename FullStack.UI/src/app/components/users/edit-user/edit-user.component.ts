import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

  // Variabila locala
  userDetails: User = {
    userId: "",
    email: "",
    name: "",
    username: "",
    nickname: "",
    picture: ""
  }

  // costructor cu variaile de rute
  constructor(private route: ActivatedRoute, private userService: UsersService, private router: Router) {
    
  }

  // 
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const userId = params.get('userId')

        // Verificarea daca exista un ID si atribuirile aferente
        if(userId) {
          this.userService.getUser(userId)
          .subscribe({
            next: (response) => {

              // Afisarea de mesaj in consola
              console.log(response)

              // Atribuirea raspunsului in consola
              this.userDetails = response;
            },
            error: (response) => {

              // Afisarea erorii in consola
              console.log(response)
            }
          })
        }
      }
    })
  }

  // Modifica Angajat
  updateUser() {
    this.userService.updateUser(this.userDetails.userId , this.userDetails)
    .subscribe({
      next: (response) => {

        //Redirectionare catre pagina cu toti angajatii
        this.router.navigate(["users"])

        // Afisarea in consola a Raspunsului
        console.log(response)
      },
      error: (response) => {

        // Afisarea in consola a Erorii
        console.log(response)
      }
    })
  }

  // Stergerea Angajat
  deleteUser() {
    this.userService.deleteUser(this.userDetails.userId)
    .subscribe({
      next: (response) => {

        //Redirectionare catre pagina cu toti angajatii
        this.router.navigate(["users"])
        
        // Afisarea in consola a Raspunsului
        console.log(response)
      },
      error: (response) => {

        // Afisarea in consola a Erorii
        console.log(response)
      }
    })
    }
}
