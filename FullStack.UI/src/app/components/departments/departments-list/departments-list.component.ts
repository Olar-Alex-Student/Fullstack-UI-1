import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department.model';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {

  departments: Department[] = [];

  // ctor
  constructor(private departmentService: DepartmentsService) {
  }

  // ngOnInit
  ngOnInit(): void {
    this.departmentService.getAllDepartments()
    .subscribe({
      next: (departments: any) => {
        this.departments = departments  
        console.log(this.departments);
      },
      error: (response: any) => {
        console.log(response);
      }
    })
  }
}
