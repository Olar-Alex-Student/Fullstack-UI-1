import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../models/role.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  baseApiURL: string = 'https://localhost:7090'

  constructor(private http: HttpClient) { }

  // GET toate Departamentele din baza de date
  getAllRoles(): Observable<Role[]> {

    // 
    return this.http.get<Role[]>(this.baseApiURL + "/api/Roles");
  }

  // POST un nou departament in baza de date
  addNewRole(addRoleRequest: Role): Observable<Role>{

    // Initializare Guid Empty pentru fiecare angajat nou
    addRoleRequest.roleId = "00000000-0000-0000-0000-000000000000"

    // 
    return this.http.post<Role>(this.baseApiURL + "/api/Roles", addRoleRequest);
  }

  // GET un singur departament
  getRole(id: string): Observable<Role>{

    // 
    return this.http.get<Role>(this.baseApiURL + "/api/Roles/" + id)
  }

  // PUT edit departament
  updateRole(id: string, updateRoleRequest: Role ): Observable<Role> {

    // 
    return this.http.put<Role>(this.baseApiURL + "/api/Roles/" + id, updateRoleRequest)
  }

  // DELTE departament
  deleteRole(id: string): Observable<Role> {

    // 
    return this.http.delete<Role>(this.baseApiURL + "/api/Roles/" + id)
  }
}
