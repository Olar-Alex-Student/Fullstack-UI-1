import { Department } from "./department.model"

export interface Employee {
employeeId: string,
    name: string,
    email: string,
    phone: string,
    salary: number,
    department: Department
}