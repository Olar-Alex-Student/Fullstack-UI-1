import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { NgModel, NgForm, FormControl } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  // Variabila locala
  departmentsList: Department[] = [];
  
  addEmployeeRequest: Employee = {

    // Definirea parametrior stadard pentru un angajat
    employeeId: "",
    name: "",
    email: "",
    phone: "",
    salary: 0,
    departmentId: "",
    department: {
      departmentId: "",
      name: ""
    }
  };
  
  // Creara de rute + angajati
  constructor(private departmentService: DepartmentsService , private employeeService: EmployeesService, private router: Router) {
    
  }

  //
  ngOnInit(): void {
    
    // peluarea de departamente
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

  // Adaugare Angajat
  addEmployee() {

    // Post catre API la noul angajat
    this.employeeService.addNewEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (employee) => {

        // Afisarea Rezulatului in consola
        console.log(employee)

        //Redirectionare catre pagina cu toti angajatii
        this.router.navigate(["employees"])
      },
      error: (response) => {

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
