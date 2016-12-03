import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]

})

export class EmployeeComponent implements OnInit {

  constructor() { }
  editFlag = false;
  employee = new Employee();
  msg: string;
  employees = EMPLOYEES;
  ngOnInit() {
  }
  
  addEmployee(employee: Employee): void {
    if (this.editFlag == true) {
      console.log("edit");
      console.log(employee.name);
      var existEmployee: Employee;
      existEmployee = EMPLOYEES.filter(x => x.id == employee.id)[0];
      console.log(existEmployee.name);
      var index = EMPLOYEES.indexOf(existEmployee);
      console.log(index);
      EMPLOYEES.splice(index, 1);
      EMPLOYEES.push(employee);
      this.editFlag=false;
      EMPLOYEES.sort();
      //   existEmployee=employee;
      //  EMPLOYEES.filter(x => x.id ==employee.id)[0]=existEmployee;
    }
    else
      EMPLOYEES.push(employee);
    this.employee = new Employee();
    // this.employee=null;
    this.msg = "Record Saved";
  }

  editEmployee(id: number) {
    console.log("Edit");
    var employee: Employee;
    employee = EMPLOYEES.filter(x => x.id == id)[0];
    this.editFlag = true;
    //this.employee=employee;
    this.employee.id = employee.id;
    this.employee.name = employee.name;
    this.employee.email = employee.email;
  }
  deleteEmployee(id: number) {
    console.log("Edit");
    var employee: Employee;
    employee = EMPLOYEES.filter(x => x.id == id)[0];
    var index = EMPLOYEES.indexOf(employee);
    EMPLOYEES.splice(index, 1);
  

// add(id:number, name: string, email:string): void {
  //     //name = name.trim();
  //     //if (!name) { return; }
  //     this.employee.id=id;
  //     this.employee.name=name;
  //     this.employee.email=email;
  //     EMPLOYEES.push(this.employee);
  //    // this.employee=null;
  //    this.msg="Record Saved";
  //   }
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








// export class EmployeeComponent implements OnInit {

//   constructor(private employeeService: EmployeeService) { }
//   employee=new Employee();
//   employees: Employee[];
//   msg:String;
//   ngOnInit() {
//     console.log("init"); 
//   this.employees = this.employeeService.getEmployees();
//     // this.getAsyncEmployees();
//     //console.log(this.employees[0]);
//   }
//   getAsyncEmployees(): void {
//     this.employeeService.getAsyncEmployees().then(emps => this.employees = emps);
//   }
//    addEmployee(employee:Employee) :void{
//      this.employeeService.addEmp(employee);
//      this.msg="Record Saved";
//    }
//    editEmployee(id:number){

//      this.employeeService.editEmp(id,this.employee);
//      this.employees=this.employeeService.getEmployees();

//      this.msg="Edited Successfully";
//    }
//    deleteEmployee(id:number){
//       this.employeeService.removeEmp(id);
//      this.employees=this.employeeService.getEmployees();
//      this.msg="Deleted Successfully";
//    }


// }


