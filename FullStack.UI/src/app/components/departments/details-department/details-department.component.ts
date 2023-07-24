import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { DepartmentsService } from 'src/app/services/departments.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-details-department',
  templateUrl: './details-department.component.html',
  styleUrls: ['./details-department.component.css']
})
export class DetailsDepartmentComponent implements OnInit {

  employees: Employee[] = [];

  // ctor
  constructor(private employeeService: EmployeesService, private departmentService: DepartmentsService, private route: ActivatedRoute, private router: Router) {

  }

  // 
  ngOnInit(): void {

    // 
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id')

        // Verificarea daca exista un ID si atribuirile aferente
        this.employeeService.getAllEmployees()
          .subscribe({
            next: (employees: any) => {

              // Afisarea de mesaj in consola
              console.log(employees)

              // Atribuirea raspunsului
              this.employees = employees.filter((employee: Employee) => employee.departmentId === id);

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
