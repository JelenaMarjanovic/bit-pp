"use strict";

function Worker(name, surname, salary ) {
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

Worker.prototype.increaseSalary = function() {
    return this.salary + (this.salary / 10);
}

function Employee(name, surname, specialization, salary) {
    Worker.call(this, name, surname, salary);
    this.specialization = specialization;
}

Employee.prototype.getSpecialization = function () {
    console.log(this.specialization);
}

Employee.prototype = Object.create(Worker.prototype);
Employee.prototype.constructor = Employee;

function Manager(name, surname, department, salary) {
    Worker.call(this, name, surname, salary);    
    this.department = department;
}

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}

Manager.prototype = Object.create(Worker.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
}

var employee = new Employee("Devil", "May Cry", "gamer", 1200);
var manager = new Manager("Never-winter", "Nights", "GameDev", 10000);
console.log(employee.getData());


