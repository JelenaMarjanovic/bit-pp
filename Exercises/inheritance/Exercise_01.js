/* Employees and Managers */

"use strict";

function Worker(name, surname, salary) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
}

Worker.prototype.getData = function () {
    return this.name + " " + this.surname;
}

Worker.prototype.getSalary = function () {
    return this.salary;
}

Worker.prototype.increaseSalary = function () {
    return this.salary *= 1.1;
}

function Employee(name, surname, specialization, salary) {
    Worker.call(this, name, surname, salary);
    this.specialization = specialization;
}

Employee.prototype = Object.create(Worker.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getSpecialization = function () {
    return this.specialization;
}

function Manager(name, surname, department, salary) {
    Worker.call(this, name, surname, salary);
    this.department = department;
}

Manager.prototype = Object.create(Worker.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
    return this.department;
}

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
}

var employee = new Employee("Devil", "May Cry", "gamer", 1200);
var manager = new Manager("Never-winter", "Nights", "GameDev", 10000);

console.log(employee.getData());
console.log(manager.getData());

console.log("Employee's specialization is: " + employee.getSpecialization());

manager.changeDepartment("GameQA");
console.log("Manager's new department is: " + manager.getDepartment());

employee.increaseSalary();
console.log("Employee's salary after increasing is: " + employee.getSalary());