import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { NgModel, NgForm } from '@angular/forms';
import { Role } from 'src/app/models/role.model';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

  // Variabila locala
  rolesList: Role[]= [];

  // Variabila locala
  updateRoleRequest: Role = {
    roleId: "",
    name: ""
  }

  // Variabila locala
  updateUserRequest: User = {
    userId: "",
    email: "",
    name: "",
    username: "",
    nickname: "",
    picture: "",
    roleId: this.updateRoleRequest.roleId,
    role: this.updateRoleRequest
  }

  // costructor cu variaile de rute
  constructor(private roleService: RolesService ,private route: ActivatedRoute, private userService: UsersService, private router: Router) {
    
  }

  // Asignare de valori
  updateUserRole() {

    // 
    this.updateUserRequest.roleId = this.updateRoleRequest.roleId;

    // 
    this.updateUserRequest.role = this.updateRoleRequest;
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
              this.updateUserRequest = response;
            },
            error: (response) => {

              // Afisarea erorii in consola
              console.log(response)
            }
          })
        }
      }
    })

    // 
    this.roleService.getAllRoles()
      .subscribe({
        next: (roles: any) => {
          this.rolesList = roles
          console.log(this.rolesList);
        },
        error: (response: any) => {
          console.log(response);
        }
      })
  }

  // Modifica Angajat
  updateUser() {
    this.userService.updateUser(this.updateUserRequest.userId , this.updateUserRequest)
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
    this.userService.deleteUser(this.updateUserRequest.userId)
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
