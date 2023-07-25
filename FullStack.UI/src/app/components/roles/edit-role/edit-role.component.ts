import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { Validator } from '@angular/forms';
import { Role } from 'src/app/models/role.model';
import { RolesService } from 'src/app/services/roles.service';


@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {
  
  // Variabila locala
  roleDetails: Role = {
    roleId: "",
    name: ""
  };

  // costructor cu variaile de rute
  constructor(private route: ActivatedRoute, private roleService: RolesService, private router: Router) {

  }

  // 
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        // Verificarea daca exista un ID si atribuirile aferente
        if (id) {
          this.roleService.getRole(id)
            .subscribe({
              next: (response) => {

                // Afisarea de mesaj in consola
                console.log(response)

                // Atribuirea raspunsului in consola
                this.roleDetails = response;
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
  updateRole() {
    this.roleService.updateRole(this.roleDetails.roleId, this.roleDetails)
      .subscribe({
        next: (response) => {

          // Afisarea in consola a Raspunsului
          console.log(response)

          //Redirectionare catre pagina cu toti angajatii
          this.router.navigate(["roles"])

        },
        error: (response) => {

          // Afisarea in consola a Erorii
          console.log(response)
        }
      })
  }

  // Stergerea Angajat
  deleteRole(id: string) {
    this.roleService.deleteRole(id)
      .subscribe({
        next: (response) => {

          //Redirectionare catre pagina cu toti angajatii
          this.router.navigate(["roles"])

          // Afisarea in consola a Raspunsului
          // console.log(response)
        },
        error: (response) => {

          // Afisarea in consola a Erorii
          console.log(response)
        }
      })
  }

  // Afisarea in consola a ngForm si ngModel pt PUT si DELETE
  console(form: NgForm) {
    console.log(form.value, form.valid);
  }
}

