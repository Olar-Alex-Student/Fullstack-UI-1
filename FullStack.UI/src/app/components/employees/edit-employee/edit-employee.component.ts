import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee.model';
import { NgModel, NgForm } from '@angular/forms';
import { Validator } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit {

  // Variabila locala
  departmentsList: Department[] = [];

  updateDepartmentRequest: Department = {
    departmentId: "",
    name: ""
  }
  
  updateEmployeeRequest: Employee = {

    // Definirea parametrior stadard pentru un angajat
    employeeId: "",
    name: "",
    email: "",
    phone: "",
    salary: 0,
    departmentId: this.updateDepartmentRequest.departmentId,
    department: this.updateDepartmentRequest
  };
  

  // costructor cu variaile de rute
  constructor(private departmentService: DepartmentsService, private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) {

  }

  // Asignare de valori
  updateEmployeeDepartment() {

    // 
    this.updateEmployeeRequest.departmentId = this.updateDepartmentRequest.departmentId;

    // 
    this.updateEmployeeRequest.department = this.updateDepartmentRequest;
  }

  // 
  ngOnInit(): void {

    // 
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        // Verificarea daca exista un ID si atribuirile aferente
        if (id) {
          this.employeeService.getEmployee(id)
            .subscribe({
              next: (employee: any) => {

                // Afisarea de mesaj in consola
                console.log(employee)

                // Atribuirea raspunsului in consola
                this.updateEmployeeRequest = employee;

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
    this.departmentService.getAllDepartments()
      .subscribe({
        next: (departments: any) => {
          this.departmentsList = departments
          console.log(this.departmentsList);
        },
        error: (response: any) => {
          console.log(response);
        }
      })

  }

  // Modifica Angajat
  updateEmployee() {
    this.employeeService.updateEmployee(this.updateEmployeeRequest.employeeId, this.updateEmployeeRequest)
      .subscribe({
        next: (response) => {

          // Afisarea in consola a Raspunsului
          console.log(response)

          //Redirectionare catre pagina cu toti angajatii
          this.router.navigate(["employees"])
        },
        error: (response) => {

          // Afisarea in consola a Erorii
          console.log(response)
        }
      })
  }

  // Stergerea Angajat
  deleteEmployee(id: string) {
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
