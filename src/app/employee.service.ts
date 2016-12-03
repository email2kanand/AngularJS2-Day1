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