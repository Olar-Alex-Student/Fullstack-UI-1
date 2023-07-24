import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  baseApiURL: string = 'https://localhost:7090'

  constructor(private http: HttpClient) { }

  // GET toate Departamentele din baza de date
  getAllDepartments(): Observable<Department[]> {

    // 
    return this.http.get<Department[]>(this.baseApiURL + "/api/Departments");
  }

  // POST un nou departament in baza de date
  addNewDepartment(addDepartmentRequest: Department): Observable<Department>{

    // Initializare Guid Empty pentru fiecare angajat nou
    addDepartmentRequest.departmentId = "00000000-0000-0000-0000-000000000000"

    // 
    return this.http.post<Department>(this.baseApiURL + "/api/Departments", addDepartmentRequest);
  }

  // GET un singur departament
  getDepartment(id: string): Observable<Department>{

    // 
    return this.http.get<Department>(this.baseApiURL + "/api/Departments/" + id)
  }

  // PUT edit departament
  updateDepartment(id: string, updateDepartmentRequest: Department ): Observable<Department> {

    // 
    return this.http.put<Department>(this.baseApiURL + "/api/Departments/" + id, updateDepartmentRequest)
  }

  // DELTE departament
  deleteDepartment(id: string): Observable<Department> {

    // 
    return this.http.delete<Department>(this.baseApiURL + "/api/Departments/" + id)
  }
}
