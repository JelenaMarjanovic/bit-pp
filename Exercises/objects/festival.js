"use strict";

(function App() {

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
        }
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function () {
            return this.title + ", " + this.length + "min, " + this.genre.getData();
        }
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.getNumOfMovies = function () {
            return this.listOfMovies.length;
        }
        this.getData = function () {
            var programDuration = 0;
            var movieList = "";

            for (var i = 0; i < this.listOfMovies.length; i++) {
                programDuration += this.listOfMovies[i].length;
                movieList += "\n\t\t" + this.listOfMovies[i].getData();

            }

            return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", program duration " + programDuration + "min" + movieList;
        }

        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
        }
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numOfMoviesAllProgram = 0;
        this.getData = function () {
            var festivalProgram = "";

            for (var i = 0; i < this.listOfPrograms.length; i++) {

                festivalProgram += "\n\t" + this.listOfPrograms[i].getData();
                this.numOfMoviesAllProgram += this.listOfPrograms[i].getNumOfMovies();
            }

            return this.name + " festival has " + this.numOfMoviesAllProgram + " movie titles" + festivalProgram;
        }

        this.addProgram = function (program) {
            this.listOfPrograms.push(program);
        }
    }



    var action = new Genre("action");
    var drama = new Genre("drama");
    var comedy = new Genre("comedy");

    function createMovie(movieTitle, movieLength, genre) {
        return new Movie(movieTitle, genre, movieLength);

    }

    function createProgram(date) {
        return new Program(date);
    }

    var p1 = createProgram("28 Oct 2017");
    var p2 = createProgram("29 Oct 2017");

    var m1 = createMovie("Spider-Man: Homecoming", 133, action);
    var m2 = createMovie("War for the Planet of the Apes", 140, drama);
    var m3 = createMovie("The Dark Tower", 95, comedy);
    var m4 = createMovie("Deadpool", 108, comedy);

    var festival = new Festival("Weekend");

    p1.addMovie(m1);
    p1.addMovie(m2);
    p1.addMovie(m3);
    p2.addMovie(m4);

    festival.addProgram(p1);
    festival.addProgram(p2);

    console.log(festival.getData());
})();