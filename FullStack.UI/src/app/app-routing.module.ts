import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LoginAuth0Component } from './components/auth/login-auth0/login-auth0.component';

// Auth0
import { AuthGuard } from '@auth0/auth0-angular';
import { GuardService } from './services/guard.service';

const routes: Routes = [

  // Rute Autetificare / Coectare
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login-auth0',
    component: LoginAuth0Component
  },

  // Rute Utlizatori
  {
    path: 'users',
    component: UsersListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users/edit/:userId',
    component: EditUserComponent,
    canActivate: [AuthGuard]
  },

  // Rute Angajati
  {
    path: 'employees',
    component: EmployeesListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
