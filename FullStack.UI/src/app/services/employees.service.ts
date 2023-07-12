import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiURL: string = 'https://localhost:7090'
  //baseApiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // GET toti Angajatii din baza de date
  getAllEmployees(): Observable<Employee[]> {

    // 
    return this.http.get<Employee[]>(this.baseApiURL + "/api/employees");
  }

  // POST un nou angajat in baza de date
  addNewEmployee(addEmployeeRequest: Employee): Observable<Employee>{

    // Initializare Guid Empty pentru fiecare angajat nou
    addEmployeeRequest.id = "00000000-0000-0000-0000-000000000000"

    // 
    return this.http.post<Employee>(this.baseApiURL + "/api/employees", addEmployeeRequest);
  }

  // GET un singur agajat
  getEmployee(id: string): Observable<Employee>{

    // 
    return this.http.get<Employee>(this.baseApiURL + "/api/employees/" + id)
  }

  // PUT edit angajat
  updateEmployee(id: string, updateEmployeeRequest: Employee ): Observable<Employee> {

    // 
    return this.http.put<Employee>(this.baseApiURL + "/api/employees/" + id, updateEmployeeRequest)
  }

  // DELTE angajat
  deleteEmployee(id: string): Observable<Employee> {

    // 
    return this.http.delete<Employee>(this.baseApiURL + "/api/employees/" + id)
  }
}
