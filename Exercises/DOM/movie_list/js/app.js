"use strict";

// Gloval variable: list of all movies
var listOfMovies = [];

// Get and create DOM nodes
var movieDiv = document.querySelector(".movie-list");
var movieList = document.createElement("ul");
movieDiv.appendChild(movieList);

var programDiv = document.querySelector(".program-list");
var programList = document.createElement("ul");
programDiv.appendChild(programList);

// Get dropdown menu from DOM for each: movie and program
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
}

Program.prototype.getData = function () {
    var programDuration = 0;
    var numOfMovies = listOfMovies.length;

    listOfMovies.forEach(function (movie) {
        programDuration += movie.length;
    });

    return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + numOfMovies + " movies, duration: " + programDuration + "min";
}

// Create movie and put in select > option
function createMovie() {
    var title = document.querySelector("#movie-title").value.trim();
    var length = document.querySelector("#movie-length").value;
    var formSelect = document.querySelector("#movie-genre");
    var genre = formSelect.options[formSelect.selectedIndex].value;

    var movie = new Movie(title, length, genre);

    var movieItem = document.createElement("li");
    var movieText = document.createTextNode(movie.getData());

    movieItem.appendChild(movieText);
    movieList.appendChild(movieItem);

    var option = document.createElement("option");
    var value = title.split(" ").join("-");
    option.value = value.toLowerCase();
    var text = document.createTextNode(movie.getData());
    option.appendChild(text);
    movieSelector.appendChild(option);

    document.querySelector("#movie-form").reset();

    listOfMovies.push(movie);
}

// Create movie on-click and push it to the dropdown menu
document.querySelector("#create-movie").addEventListener("click", function () {
    createMovie();
});

// Create program and put in select > option
function createProgram() {
    var date = document.querySelector("#program-date").value;

    var program = new Program(date);

    var programItem = document.createElement("li");
    var programText = document.createTextNode(program.getData());

    programItem.appendChild(programText);
    programList.appendChild(programItem);

    var option = document.createElement("option");
    option.value = date.split("/").join("-");
    var text = document.createTextNode(program.getData());
    option.appendChild(text);
    programSelector.appendChild(option);

    document.querySelector("#program-form").reset();
}

// Create a program on-click and push it to the dropdown menu
document.querySelector("#create-program").addEventListener("click", function () {
    createProgram();
});

// Add movie to program on-click
function addMovieToProgram() {

}