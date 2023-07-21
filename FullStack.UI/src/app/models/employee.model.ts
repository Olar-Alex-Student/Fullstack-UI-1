export interface  Department {
    id?: string,
    name: string
}

export interface Employee {
employeeId: string,
    name: string,
    email: string,
    phone: string,
    salary: number,
    department: Department
}