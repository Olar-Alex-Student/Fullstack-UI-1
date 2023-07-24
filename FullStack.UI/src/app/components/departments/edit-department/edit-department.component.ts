import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { Validator } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  // Variabila locala
  departmentDetails: Department = {
    departmentId: "",
    name: ""
  };

  // costructor cu variaile de rute
  constructor(private route: ActivatedRoute, private departmentService: DepartmentsService, private router: Router) {

  }

  // 
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        // Verificarea daca exista un ID si atribuirile aferente
        if (id) {
          this.departmentService.getDepartment(id)
            .subscribe({
              next: (response) => {

                // Afisarea de mesaj in consola
                console.log(response)

                // Atribuirea raspunsului in consola
                this.departmentDetails = response;
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
  updateDepartment() {
    this.departmentService.updateDepartment(this.departmentDetails.departmentId, this.departmentDetails)
      .subscribe({
        next: (response) => {

          // Afisarea in consola a Raspunsului
          console.log(response)

          //Redirectionare catre pagina cu toti angajatii
          this.router.navigate(["departments"])

        },
        error: (response) => {

          // Afisarea in consola a Erorii
          console.log(response)
        }
      })
  }

  // Stergerea Angajat
  deleteDepartment(id: string) {
    this.departmentService.deleteDepartment(id)
      .subscribe({
        next: (response) => {

          //Redirectionare catre pagina cu toti angajatii
          this.router.navigate(["departments"])

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
