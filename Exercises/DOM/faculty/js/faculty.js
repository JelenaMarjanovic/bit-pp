'use strict';

/**
 * Represent a person
 * @constructor
 * @param {string} name - The person's name
 * @param {string} surname - The person's surname
 */
function Person(name, surname) {
    // properties
    this.name = name;
    this.surname = surname;
}

// methods
Person.prototype.getFullName = function () {
    return this.name + ' ' + this.surname;
}

/**
 * Represent an employee
 * @param {string} name - The employee's name
 * @param {string} surname - The employee's surname
 * @param {number} salary - The employee's salary
 */
function Employee(name, surname, salary) {
    // properties
    Person.call(this, name, surname);
    this.salary = parseInt(salary);
}

// inheritance from object Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// methods
Employee.prototype.getEmployeeData = function () {
    return 'Full name: ' + this.name + ' ' + this.surname + ', salary: ' + this.salary;
}

/**
 * Represent a professor
 * @constructor
 * @param {string} name - The professor's name
 * @param {string} surname - The professor's surname
 * @param {number} salary - The professor's salary
 * @param {string} officeNumber - The professor's office number
 * @param {number} employeeId - The professor's employee ID
 */
function Professor(name, surname, salary, officeNumber, employeeId) {
    Employee.call(this, name, surname, salary);
    this.officeNumber = officeNumber;
    this.employeeId = parseInt(employeeId);
}

// inheritance from object Employee
Professor.prototype = Object.create(Employee.prototype);
Professor.prototype.constructor = Professor;

// methods
Professor.prototype.getData = function () {
    return 'Employee ID: ' + this.employeeId + ', full name: ' + this.basicData() + ', office number: ' + this.officeNumber;
}

Professor.prototype.basicData = function () {
    return this.name + ' ' + this.surname;
}

/**
 * Constant object that represents student status
 */
var StudentStatus = {
    REGULAR: 'regular',
    REMOTE: 'remote',
    GRADUATED: 'graduated'
};

Object.freeze(StudentStatus);

/**
 * Represent an exam
 * @constructor
 * @param {string} subject - The exam's name
 * @param {Professor} professor - The Professor object
 * @param {Date} date - Date object
 * @param {number} grade - The grade that student obtained
 */
function Exam(subject, professorObj, date, grade) {
    // properties
    this.subject = subject;
    this.professor = professorObj; // This is object
    this.date = new Date(date);
    this.grade = parseInt(grade);
}

/**
 * Represent a student
 * @constructor
 * @param {num} indexNum - The student's index number
 * @param {string} name - The student's name
 * @param {string} surname - The student's surname
 * @param {string} status - the student's status
 */
function Student(indexNum, name, surname, status) {
    // properties
    Person.call(this, name, surname);
    var today = new Date();
    this.indexNum = indexNum + '/' + today.getFullYear().toString().slice(2);
    this.status = status; // This should be an object
    this.listOfPassedExams = [];
    this.sumOfGrades = 0;
}

// inheritance from object Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// methods

/**
 * Adds passed exam to the list of passed exams
 * @param {Array<Exam>} passedExam
 * @return {number} - The length of list of passed exams after adding
 */
Student.prototype.addExam = function (passedExam) {
    if (passedExam.grade === 10) {
        faculty.numOf10++;
    }

    this.sumOfGrades += passedExam.grade;

    return this.listOfPassedExams.push(passedExam);
}

/**
 * Returns average grade of passed exams
 * @param {Array<Exam>} exams
 * @returns {number} - The average grade of all passed exams
 */
Student.prototype.averageGrade = function () {
    if (this.listOfPassedExams.length === 0) {
        return 0;
    }

    return this.sumOfGrades / this.listOfPassedExams.length;
}

Student.prototype.getData = function () {
    return 'Index number: ' + this.indexNum + ', full name: ' + this.basicData() + ', average grade: ' + this.averageGrade();
}

Student.prototype.basicData = function () {
    return this.name + ' ' + this.surname;
}

/**
 * Represent a faculty
 * @constructor
 * @param {string} name - The faculty's name
 */
function Faculty(name) {
    // properties
    this.name = name;
    this.listOfStudents = [];
    this.listOfProfessors = [];
    this.numOf10 = 0;
}

// methods
Faculty.prototype.getData = function () {
    return this.name;
}

/**
 * Adds student to the list of students
 * @param {Array<Student>} student 
 * @return {number} - The length of list of student after adding
 */
Faculty.prototype.addStudent = function (student) {
    return this.listOfStudents.push(student);
}

/**
 * Adds professor to the list of professors
 * @param {Array<Professor>} professor
 * @return {number} - The length of list of professors after adding
 */
Faculty.prototype.addProfessor = function (professor) {
    return this.listOfProfessors.push(professor);
}