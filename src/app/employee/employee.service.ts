import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

    constructor() { }
    getEmployees(): Employee[] {
        return EMPLOYEES;
    }
    getAsyncEmployees(): Promise<Employee[]> {
        return Promise.resolve(EMPLOYEES);
    }
    getEmployeesSlowly(): Promise<Employee[]> {
        return new Promise<Employee[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getAsyncEmployees());
    }
    addEmp(employee: Employee): Employee {
        var employee: Employee;
        //var maxid=EMPLOYEES.
        EMPLOYEES.push(employee);
        return employee;
    }
    editEmp(id:number,employee:Employee): Employee {
        var existEmployee: Employee;
        existEmployee = EMPLOYEES.filter(x => x.id ==id)[0];
        var index = EMPLOYEES.indexOf(existEmployee);
        EMPLOYEES.splice(index, 1);
        EMPLOYEES.push(employee);
        return employee;
    }
    removeEmp(id: number): void {
        var existEmployee: Employee;
        existEmployee = EMPLOYEES.filter(x => x.id == id)[0];
        var index = EMPLOYEES.indexOf(existEmployee);
        EMPLOYEES.splice(index, 1);
       
    }

}

export const EMPLOYEES: Employee[] = [
    { id: 11, name: 'Mr.', email: "abc@gmail.com" },
    { id: 12, name: 'Anand', email: "abc@gmail.com" },
    { id: 13, name: 'Anand', email: "abc@gmail.com" },
    { id: 14, name: 'Kumar', email: "abc@gmail.com" }

];

export class Employee {
    id: number;
    name: string;
    email: string;
}