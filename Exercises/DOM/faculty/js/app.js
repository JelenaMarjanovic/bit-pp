'use strict';

// Global variable - object Faculty
var faculty = new Faculty();

// Get global DOM elements
var facultySection = document.querySelector('#faculty-header');
var professorsList = document.querySelector('#professors-list');
var studentsList = document.querySelector('#students-list');
var successParagraf = document.querySelector('#num-of-10');

var professorSelector = document.querySelector('#professor-select');
var studentSelector = document.querySelector('#student-select');

// Define event listeners
document.querySelector('#create-faculty').addEventListener('click', createFaculty);
document.querySelector('#create-professor').addEventListener('click', createProfessor);
document.querySelector('#create-student').addEventListener('click', createStudent);
document.querySelector('#add-exam').addEventListener('click', addPassedExam);

// Create Faculty
function createFaculty() {
    var nameInput = document.querySelector('#faculty-name');
    var errorElement = document.querySelector('.faculty-error');

    var name = nameInput.value.trim();

    var isValid = name;

    // Validate if the field is valid to continue
    if (validator(isValid, errorElement) !== -1) {

        // Create object Faculty using constructor
        faculty.name = name;

        // Put the faculty name to DOM h1 element and if faculty name already exists, replace with the new one
        var facultyName = document.createElement('h1');
        facultyName.textContent = faculty.name;

        if (facultySection.hasChildNodes()) {
            var oldFacultyName = facultySection.firstElementChild;
            facultySection.replaceChild(facultyName, oldFacultyName);
        } else {
            facultySection.appendChild(facultyName);
        }

        successParagraf.textContent = "Number of 10: " + faculty.numOf10;
    }

    // Reset form field
    nameInput.value = '';
}

// Create Professor
function createProfessor() {
    var nameInput = document.querySelector('#professor-name');
    var surnameInput = document.querySelector('#professor-surname');
    var salaryInput = document.querySelector('#professor-salary');
    var officeNumberInput = document.querySelector('#office-number');
    var employeeIdInput = document.querySelector('#employee-id');
    var errorElement = document.querySelector('.professor-error');

    var name = nameInput.value.trim();
    var surname = surnameInput.value.trim();
    var salary = salaryInput.value;
    var officeNumber = officeNumberInput.value.trim();
    var employeeId = employeeIdInput.value;

    var isValid = name && surname && salary && officeNumber && employeeId;

    // Validate if all fields are valid to continue
    if (validator(isValid, errorElement) !== -1) {
        // Create object Professor using constructor and add it to faculty list of professors
        var professor = new Professor(name, surname, salary, officeNumber, employeeId);

        // Check if given professor already exists in faculty list of professors
        if (faculty.listOfProfessors.hasElement(professor)) {
            errorElement.textContent = "Professor already exists in a professor list!";
            return;
        }

        var professorIndex = faculty.addProfessor(professor) - 1;

        // Put the professor to DOM ul element if professor doesn't already exists
        var professorItem = document.createElement('li');
        professorItem.textContent = professor.getData();
        professorsList.appendChild(professorItem);

        // Put the professor full name to dropdown select option at exam fieldset
        var professorFullName = professor.basicData();

        var professorOption = document.createElement('option');
        professorOption.value = professorIndex;
        professorOption.textContent = professorFullName;
        professorSelector.appendChild(professorOption);
    }

    // Reset form fields
    nameInput.value = '';
    surnameInput.value = '';
    salaryInput.value = '';
    officeNumberInput.value = '';
    employeeIdInput.value = '';
}

// Create Student
function createStudent() {
    var nameInput = document.querySelector('#student-name');
    var surnameInput = document.querySelector('#student-surname');
    var indexNumberInput = document.querySelector('#index-number');
    var statusSelector = document.querySelector('#status-select');
    var errorElement = document.querySelector('.student-error');

    var name = nameInput.value.trim();
    var surname = surnameInput.value.trim();
    var indexNumber = indexNumberInput.value;
    var status = statusSelector.options[statusSelector.selectedIndex].value;

    var isValid = name && surname && indexNumber && status;

    // Validate if all fields are valid to continue
    if (validator(isValid, errorElement) !== -1) {
        // Create object Student using constructor and add it to faculty list of students
        var student = new Student(indexNumber, name, surname, status);

        // Check if given professor already exists in faculty list of professors
        if (faculty.listOfStudents.hasElement(student)) {
            errorElement.textContent = "Student already exists in a student list!";
            return;
        }

        var studentIndex = faculty.addStudent(student) - 1;

        // Put the student to DOM ul element if student doesn't already exists
        var studentItem = document.createElement('li');
        studentItem.textContent = student.getData();
        studentsList.appendChild(studentItem);

        // Put the student full name to dropdown select option at exam fieldset
        var studentFullName = student.basicData();

        var studentOption = document.createElement('option');
        studentOption.value = studentIndex;
        studentOption.textContent = studentFullName;
        studentSelector.appendChild(studentOption);
    }

    // Reset form fields
    nameInput.value = '';
    surnameInput.value = '';
    indexNumberInput.value = '';
    statusSelector.selectedIndex = 0;
}

// Add Exam to student's passed exams or update existing exam's data
function addPassedExam() {
    var subjectSelector = document.querySelector('#exam-subject');
    var gradeSelector = document.querySelector('#grade-select');
    var dateInput = document.querySelector('#exam-date');
    var errorElement = document.querySelector('.exam-error');

    var subject = subjectSelector.options[subjectSelector.selectedIndex].text;
    var date = dateInput.value;
    var grade = gradeSelector.options[gradeSelector.selectedIndex].value;

    var professorIndex = professorSelector.options[professorSelector.selectedIndex].value;
    var professor = faculty.listOfProfessors[professorIndex];
    var studentIndex = studentSelector.options[studentSelector.selectedIndex].value;
    var student = faculty.listOfStudents[studentIndex];

    var isValid = subject && professorIndex && date && studentIndex;

    // Validate if all fields are valid to continue
    if (validator(isValid, errorElement) !== -1) {
        // Create object Exam using constructor and add it to student list of passed exams
        var exam = new Exam(subject, professor, date, grade);

        // Check if given exam already exists in student list of passed exams
        if (student.listOfPassedExams.hasElement(exam)) {
            errorElement.textContent = "Exam already exists in an exam list!";
            return;
        }

        student.addExam(exam);

        // Update student data
        var studentItem = document.createElement("li");
        studentItem.textContent = student.getData();

        var oldStudentItem = document.querySelectorAll('#students-list li');

        studentsList.replaceChild(studentItem, oldStudentItem[studentIndex]);

        // Put info about number of tens
        successParagraf.textContent = "Number of 10: " + faculty.numOf10;
    }

    // Reset form fields
    subjectSelector.selectedIndex = 0;
    professorSelector.selectedIndex = 0;
    studentSelector.selectedIndex = 0;
    gradeSelector.selectedIndex = 0;
    dateInput.value = '';
}