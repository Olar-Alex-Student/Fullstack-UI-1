import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // GET toti Angajatii din baza de date
  getAllEmployees(): Observable<Employee[]> {

    // 
    return this.http.get<Employee[]>(this.baseApiURL + "/api/employees");
  }

  // POST un nou angajat in baza d date
  addNewEmployee(addEmployeeRequest: Employee): Observable<Employee>{

    // Initializare Guid Empty pentru fiecare angajat nou
    addEmployeeRequest.id = "00000000-0000-0000-0000-000000000000"

    // 
    return this.http.post<Employee>(this.baseApiURL + "/api/employees", addEmployeeRequest);
  }
}
