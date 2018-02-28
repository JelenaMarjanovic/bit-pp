/* Employees and Managers */

"use strict";

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

// Person.prototype.getFullName = function () {
//     return this.name + " " + this.surname;
// }

Person.prototype.getData = function () {
    return this.name + " " + this.surname;
}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = ParseInt(salary);
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Method overriding
Employee.prototype.getData = function () {
    // var fullName = Object.getPrototypeOf(Person.prototype).getFullName(this);
    var fullName = Object.getPrototypeOf(Person.prototype).getData(this);
    return "Name: " + fullName + ", job: " + this.job + ", salary: " + this.salary + "e";
}

Employee.prototype.getSalary = function () {
    return ParseInt(this.salary);
}

Employee.prototype.increaseSalary = function () {
    return ParseInt(this.salary *= 1.1);
}

function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    return this.specialization;
}

function Manager(name, surname, job, salary, department) {
    Worker.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
    return this.department;
}

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
}