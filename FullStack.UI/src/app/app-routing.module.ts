import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { EditUserComponent } from './components/users/edit-user/edit-user.component';
import { LoginComponent } from './components/auth/login/login.component';

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

  // Rute Utlizatori
  {
    path: 'users',
    component: UsersListComponent
  },
  {
    path: 'users/edit/:id',
    component: EditUserComponent
  },

  // Rute Angajati
  {
    path: 'employees',
    component: EmployeesListComponent
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
