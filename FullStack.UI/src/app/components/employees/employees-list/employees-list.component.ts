import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  departmanets: Department[] = [];

  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) {}
  
  ngOnInit(): void{
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees: any) => {
        
        // Atribuire 
        this.employees = employees
        
        // Afisare
        console.log(employees);
      },
      error: (response: any) => {

        // Afisare
        console.log(response);
      }
    })
  }
}
