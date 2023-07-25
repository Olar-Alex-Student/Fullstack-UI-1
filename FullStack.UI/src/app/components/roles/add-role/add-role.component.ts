import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { Role } from 'src/app/models/role.model';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  //
  addRoleRequest: Role = {
    roleId: "",
    name: ""
  };
  
  // Creara de rute + angajati
  constructor(private roleService: RolesService, private router: Router) {
    
  }

  //
  ngOnInit(): void {
    
  }

  // Adaugare Angajat
  addRole() {

    // Post catre API la noul angajat
    this.roleService.addNewRole(this.addRoleRequest)
    .subscribe({
      next: (role: any) => {

        // Afisarea Rezulatului in consola
        console.log(role)

        //Redirectionare catre pagina cu toti angajatii
        this.router.navigate(["roles"])
      },
      error: (response: any) => {

        // Afisarea de modal cu eroarea

        // Afisarea Erorii in consola
        console.log(response)
      }
    });
  }

  // Afisarea in consola a ngForm si ngModel pt ADD
  console(form: NgForm) {
    console.log(form.value, form.valid);
  }

  // Functie de schimbare a input field nume
  onNameChange($event: any) {
    console.log($event)
  }
}
