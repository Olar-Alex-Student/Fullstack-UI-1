import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { RolesService } from 'src/app/services/roles.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-details-role',
  templateUrl: './details-role.component.html',
  styleUrls: ['./details-role.component.css']
})
export class DetailsRoleComponent implements OnInit {

  users: User[] = [];

  // ctor
  constructor(private userService: UsersService, private roleService: RolesService, private route: ActivatedRoute, private router: Router) {

  }

  // 
  ngOnInit(): void {

    // 
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        // Verificarea daca exista un ID si atribuirile aferente
        this.userService.getAllUsers()
          .subscribe({
            next: (users: any) => {

              // Afisarea de mesaj in consola
              console.log(users)

              // Atribuirea raspunsului
              this.users = users.filter((user: User) => user.roleId === id);

            },
            error: (response) => {

              // Afisarea erorii in consola
              console.log(response)
            }
          })
      }
    })
  }
}