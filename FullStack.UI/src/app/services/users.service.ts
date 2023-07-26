import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiURL: string = 'https://localhost:7090'
  //baseApiURL: string = environment.apiUrl;

  constructor(private http: HttpClient, private auth: AuthService) { }

  // GET toti Angajatii din baza de date
  getAllUsers(): Observable<User[]> {

    // 
    return this.http.get<User[]>(this.baseApiURL + "/api/users");
  }

  // POST un nou angajat in baza de date
  addNewUser(user: any): Observable<any>{

    // Initializare Guid Empty pentru fiecare angajat nou
    // addUserRequest.id = "00000000-0000-0000-0000-000000000000"

    // 
    return this.http.post<User>(this.baseApiURL + "/api/users", user);
  }

  // GET un singur agajat
  getUser(id: string): Observable<User>{

    // 
    return this.http.get<User>(this.baseApiURL + "/api/Users/" + id)
  }

  // PUT edit angajat
  updateUser(id: string, updateUserRequest: User ): Observable<User> {

    // 
    return this.http.put<User>(this.baseApiURL + "/api/Users/" + id, updateUserRequest)
  }

  // DELTE angajat
  deleteUser(id: string): Observable<User> {

    // 
    return this.http.delete<User>(this.baseApiURL + "/api/Users/" + id)
  }

  getUserId(userIdRequest: User): Observable<User> {

    // 
    return this.http.get<User>(this.baseApiURL + "/api/Users/" + "login",
    {params: {
      "email": userIdRequest.email,
      //"password": userIdRequest.password
    }})
  }

  getUserByEmail(userEmail: string): Observable<User> {

    // 
    return this.http.get<User>(this.baseApiURL + "/api/Users/" + "byemail",
    {params: {
      "email": userEmail,
    }})
  }

  // GET date utilizator din sesiunea curenta
  getData(): any {
    this.auth.user$.subscribe((user: any) => {
      if (user) {
        console.log(user);
        return user
      }
    });
  }

  // 
}
