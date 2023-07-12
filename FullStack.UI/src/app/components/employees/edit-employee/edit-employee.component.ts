import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee.model';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})   

export class EditEmployeeComponent implements OnInit {

  // Variabila locala
  employeeDetails: Employee = {

    // Definirea parametrior stadard pentru un angajat
    id: "",
    name: "",
    email: "",
    phone: "",
    salary: 0,
    department: ""
  };

  // costructor cu variaile de rute
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) {
    
  }

  // 
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        // Verificarea daca exista un ID si atribuirile aferente
        if(id) {
          this.employeeService.getEmployee(id)
          .subscribe({
            next: (response) => {

              // Afisarea de mesaj in consola
              console.log(response)

              // Atribuirea raspunsului in consola
              this.employeeDetails = response;
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
  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeDetails.id , this.employeeDetails)
    .subscribe({
      next: (response) => {

        //Redirectionare catre pagina cu toti angajatii
        this.router.navigate(["employees"])

        // Afisarea in consola a Raspunsului
        // console.log(response)
      },
      error: (response) => {

        // Afisarea in consola a Erorii
        console.log(response)
      }
    })
  }

  // Stergerea Angajat
  deleteEmployee(id: string ) {
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next: (response) => {

        //Redirectionare catre pagina cu toti angajatii
        this.router.navigate(["employees"])
        
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
