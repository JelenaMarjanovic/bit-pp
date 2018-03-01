"use strict";

// Global variable: list of all movies
var listOfMovies = [];
var listOfPrograms = [];

// Get and create DOM nodes
var movieDiv = document.querySelector(".movie-list");
var movieUlList = document.createElement("ul");
movieDiv.appendChild(movieUlList);

var programDiv = document.querySelector(".program-list");
var programList = document.createElement("ul");
programDiv.appendChild(programList);

// Get drop-down menu from DOM for each: movie and program
var movieSelector = document.querySelector("#select-movie");
var programSelector = document.querySelector("#select-program");

function Movie(title, length, genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min, " + this.genre;
}

function Program(date) {
    this.date = new Date(date);
    this.movieList = [];
}

Program.prototype.getData = function () {
    var programDuration = 0;

    this.movieList.forEach(function (movie) {
        programDuration += movie.length;
    });

    return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + this.movieList.length + " movies, duration: " + programDuration + "min";
}

// Create movie and put in select > option
function createMovie() {
    var title = document.querySelector("#movie-title").value.trim();
    var length = document.querySelector("#movie-length").value;
    var formSelect = document.querySelector("#movie-genre");
    var genre = formSelect.options[formSelect.selectedIndex].value;

    var movie = new Movie(title, length, genre);

    // Check if movie already exists
    if (listOfMovies.hasElem(movie)) {
        alert("movie already exist");
        return;
    }

    var movieItem = document.createElement("li");
    var movieText = document.createTextNode(movie.getData());

    movieItem.appendChild(movieText);
    movieUlList.appendChild(movieItem);

    // Push created movie to global list of movies and get it's index
    var movieIndex = listOfMovies.push(movie) - 1;

    // Put created movie to the drop-down menu
    var option = document.createElement("option");
    option.value = movieIndex;
    var text = document.createTextNode(movie.title);
    option.appendChild(text);
    movieSelector.appendChild(option);

    // Reset form
    document.querySelector("#movie-form").reset();
}

// Create movie on-click and push it to the drop-down menu
document.querySelector("#create-movie").addEventListener("click", function () {
    createMovie();
});

// Create program and put in select > option
function createProgram() {
    var date = document.querySelector("#program-date").value;

    var program = new Program(date);

    // Check if program already exists
    if (listOfPrograms.hasElem(program)) {
        alert("program already exist");
        return;
    }

    var programItem = document.createElement("li");
    var programText = document.createTextNode(program.getData());

    programItem.appendChild(programText);
    programList.appendChild(programItem);

    // Push created program to global list of programs and get it's index
    var programIndex = listOfPrograms.push(program) - 1;

    // Put created program to the drop-down menu
    var option = document.createElement("option");
    option.value = programIndex;
    var text = document.createTextNode(program.getData());
    option.appendChild(text);
    programSelector.appendChild(option);

    // Reset form
    document.querySelector("#program-form").reset();
}

// Create a program on-click and push it to the drop-down menu
document.querySelector("#create-program").addEventListener("click", function () {
    createProgram();
});

// Add movie to program on-click
function addMovieToProgram() {
    var valueOfSelectedMovie = document.querySelector('#select-movie').value;
    var selectedMovie = listOfMovies[valueOfSelectedMovie];
    var valueOfSelectedProgram = document.querySelector('#select-program').value;
    var selectedProgram = listOfPrograms[valueOfSelectedProgram];

    // Check if movie already exists into selected program
    if (selectedProgram.movieList.hasElem(selectedMovie)) {
        alert("movie already exist");
        return;
    }

    selectedProgram.movieList.push(selectedMovie);

    var programItem = document.createElement("li");
    var programText = document.createTextNode(selectedProgram.getData());


    var oldProgramItem = document.querySelectorAll('.program-list ul li');

    programItem.appendChild(programText);
    programList.replaceChild(programItem, oldProgramItem[valueOfSelectedProgram]);
}

// Check if Array has given element, type: Object
Array.prototype.hasElem = function (elem) {
    var error = 0;
    this.forEach(function (currElem) {
        if (elem.toString() === currElem.toString()) {
            error += 1;
        }
    })
    return (error !== 0) ? true : false;
}

// On-click add selected movie to selected program and update program info
document.querySelector('#add-movie-to-program').addEventListener('click', function () {
    addMovieToProgram();
})