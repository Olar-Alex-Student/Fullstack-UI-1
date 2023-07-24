import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  addDepartmentRequest: Department = {
    departmentId: "",
    name: ""
  };
  
  // Creara de rute + angajati
  constructor(private departmentService: DepartmentsService, private router: Router) {
    
  }

  //
  ngOnInit(): void {
    
  }

  // Adaugare Angajat
  addDepartment() {

    // Post catre API la noul angajat
    this.departmentService.addNewDepartment(this.addDepartmentRequest)
    .subscribe({
      next: (department) => {

        // Afisarea Rezulatului in consola
        console.log(department)

        //Redirectionare catre pagina cu toti angajatii
        this.router.navigate(["departments"])
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
