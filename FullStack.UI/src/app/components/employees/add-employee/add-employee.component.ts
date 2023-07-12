import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  
  addEmployeeRequest: Employee = {

    // Definirea parametrior stadard pentru un angajat
    id: "",
    name: "",
    email: "",
    phone: "",
    salary: 0,
    department: ""
  };
  
  // Creara de rute + angajati
  constructor(private employeeService: EmployeesService, private router: Router) {
    
  }

  //
  ngOnInit(): void {
    
  }

  // Adaugare Angajat
  addEmployee() {

    // Post catre API la noul angajat
    this.employeeService.addNewEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (employee) => {

        //Redirectionare catre pagina cu toti angajatii
        this.router.navigate(["employees"])

        // Afisarea Rezulatului in consola
        // console.log(employee)
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
