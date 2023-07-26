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
import { DepartmentsListComponent } from './components/departments/departments-list/departments-list.component';
import { AddDepartmentComponent } from './components/departments/add-department/add-department.component';
import { EditDepartmentComponent } from './components/departments/edit-department/edit-department.component';
import { DetailsDepartmentComponent } from './components/departments/details-department/details-department.component';
import { RolesListComponent } from './components/roles/roles-list/roles-list.component';
import { AddRoleComponent } from './components/roles/add-role/add-role.component';
import { EditRoleComponent } from './components/roles/edit-role/edit-role.component';
import { DetailsRoleComponent } from './components/roles/details-role/details-role.component';
import { MyGuard } from './guard/roles.guard';

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
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },
  {
    path: 'users/edit/:userId',
    component: EditUserComponent,
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },

  // Rute Angajati
  {
    path: 'employees',
    component: EmployeesListComponent,
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },
  {
    path: 'employees/add',
    component: AddEmployeeComponent,
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent,
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },

  // Rute Departamente
  {
    path: 'departments',
    component: DepartmentsListComponent,
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },
  {
    path: 'departments/add',
    component: AddDepartmentComponent,
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },
  {
    path: 'departments/edit/:id',
    component: EditDepartmentComponent,
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },
  {
    path: 'departments/view/:id',
    component: DetailsDepartmentComponent,
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },

  // Rute Roluri
  {
    path: 'roles',
    component: RolesListComponent,
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },
  {
    path: 'roles/add',
    component: AddRoleComponent,
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },
  {
    path: 'roles/edit/:id',
    component: EditRoleComponent,
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },
  {
    path: 'roles/view/:id',
    component: DetailsRoleComponent,
    canActivate: [AuthGuard, MyGuard],
    data: {
      expectedRole: ['Alex Olar']
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
