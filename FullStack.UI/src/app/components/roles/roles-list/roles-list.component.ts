import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role.model';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  roles: Role[] = [];

  // ctor
  constructor(private roleService: RolesService) {
  }

  // ngOnInit
  ngOnInit(): void {
    this.roleService.getAllRoles()
    .subscribe({
      next: (roles: any) => {
        this.roles = roles  
        console.log(this.roles);
      },
      error: (response: any) => {
        console.log(response);
      }
    })
  }
}
