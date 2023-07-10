import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: Employee[] = [
    
    {
      id: "1qaz",
      name: "Alex",
      email: "alex.olar@ecap.ro",
      phone: "0712345689",
      salary: 0,
      department: "Back-End"
    },
    {
      id: "1qaz",
      name: "Alex",
      email: "alex.olar@ecap.ro",
      phone: "0712345689",
      salary: 0,
      department: "Back-End"
    },
    {
      id: "1qaz",
      name: "Alex",
      email: "alex.olar@ecap.ro",
      phone: "0712345689",
      salary: 0,
      department: "Back-End"
    }
    
  ]
  consturctor() {}
  
  ngOnInit(): void{
    this.employees.push();
  }
}
