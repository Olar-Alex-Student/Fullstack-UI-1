import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';

// Auth0
import { AuthModule } from '@auth0/auth0-angular';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { LoginAuth0Component } from './components/auth/login-auth0/login-auth0.component';
import { LogoutAuth0Component } from './components/auth/logout-auth0/logout-auth0.component';
import { DepartmentsListComponent } from './components/departments/departments-list/departments-list.component';
import { AddDepartmentComponent } from './components/departments/add-department/add-department.component';
import { EditDepartmentComponent } from './components/departments/edit-department/edit-department.component';
import { DetailsDepartmentComponent } from './components/departments/details-department/details-department.component';
import { AddRoleComponent } from './components/roles/add-role/add-role.component';
import { RolesListComponent } from './components/roles/roles-list/roles-list.component';
import { DetailsRoleComponent } from './components/roles/details-role/details-role.component';
import { EditRoleComponent } from './components/roles/edit-role/edit-role.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    LoginComponent,
    RegisterComponent,
    UsersListComponent,
    EditUserComponent,
    LoginAuth0Component,
    LogoutAuth0Component,
    DepartmentsListComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    DetailsDepartmentComponent,
    AddRoleComponent,
    RolesListComponent,
    DetailsRoleComponent,
    EditRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      // The domain and clientId were configured in the previous chapter
      domain: "dev-bidilxy6y6edge7o.us.auth0.com",
      clientId: "5SxDhRJkonYFvJvaVqLcXX7hHTiN2zTk",     
      
         
      authorizationParams: {
        // Request this audience at user authentication time
        audience: 'https://dev-bidilxy6y6edge7o.us.auth0.com/api/v2/',
        redirect_uri: window.location.origin,
    
        
      },    
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-8fjsmm0833klajbt.us.auth0.com/api/v2/' (note the asterisk)
            uri: 'https://dev-bidilxy6y6edge7o.us.auth0.com/api/v2/',
            tokenOptions: {
              authorizationParams: {
                // The attached token should target this audience
                audience: 'https://dev-bidilxy6y6edge7o.us.auth0.com/api/v2/',
    
              }
            }
          }
        ]
      }
      
    }),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
