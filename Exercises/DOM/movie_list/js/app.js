"use strict";
var listOfMovies = [];
var movieSelector = document.querySelector("select-movie");
var programDiv = document.querySelector(".program-list");
var programList = document.createElement("ul");

function Movie(title, length, genre) {
    this.title = title;
    this.length = parseInt(length);
    this.genre = genre;

}

function Program(date) {
    this.date = new Date(date);

}

Program.prototype.getData = function () {
    var programDuration = 0;
    var numOfMovies = listOfMovies.length;


    for (var i = 0; i < listOfMovies.length; i++) {
        programDuration += listOfMovies[i].length;
    }

    return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", " + numOfMovies + " movies, duration: " + programDuration + "min";
}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min, " + this.genre;
}

document.querySelector("#create-movie").addEventListener("click", function () {
    createMovie();
})

var movieDiv = document.querySelector(".movie-list");
var movieList = document.createElement("ul");
movieDiv.appendChild(movieList);

function createMovie() {
    var title = document.querySelector("#movie-title").value;
    var length = document.querySelector("#movie-length").value;
    var formSelect = document.querySelector("#movie-genre");
    var genre = formSelect.options[formSelect.selectedIndex].text;

    var movie = new Movie(title, length, genre);


    var movieItem = document.createElement("li");
    var movieText = document.createTextNode(movie.getData());

    movieItem.appendChild(movieText);
    movieList.appendChild(movieItem);


    listOfMovies.push(movie);

}


programDiv.appendChild(programList);

document.querySelector("#create-program").addEventListener("click", function () {
    createProgram();
})

function createProgram() {
    var date = document.querySelector("#program-date").value;

    var program = new Program(date);

    var programItem = document.createElement("li");
    var programText = document.createTextNode(program.getData());

    programItem.appendChild(programText);
    programList.appendChild(programItem);
}

function addMovieToProgram() {

}