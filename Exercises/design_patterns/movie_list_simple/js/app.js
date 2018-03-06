'use strict';

// Data Module - Model
var dataModule = (function () {
    // list of all movies
    var data = {
        listOfMovies: []
    }

    // constructor
    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    // methods
    Movie.prototype.getData = function () {
        return this.title + ', ' + this.length + 'min, ' + this.genre;
    }

    function addMovie(movieData) {
        var movie = new Movie(movieData.title, movieData.length, movieData.genre);

        // Push created movie to list of movies
        data.listOfMovies.push(movie);

        return movie;
    }

    return {
        addMovie: addMovie
    }
})();

// UI Module - View
var uiModule = (function () {
    // DOM selectors
    var DOMSelectors = {
        movieDivOutput: '.movie-list',
        movieForm: '#movie-form',
        movieTitleInput: '#movie-title',
        movieLengthInput: '#movie-length',
        movieGentreInput: '#movie-genre',
        createMovieBtn: '#create-movie'
    }

    // Get and create DOM nodes
    var movieDiv = document.querySelector(DOMSelectors.movieDivOutput);
    var movieUlList = document.createElement("ul");
    movieDiv.appendChild(movieUlList);

    // Get movie data from form
    function getMovieData() {
        var title = document.querySelector(DOMSelectors.movieTitleInput).value.trim();
        var length = parseInt(document.querySelector(DOMSelectors.movieLengthInput).value);
        var genreSelect = document.querySelector(DOMSelectors.movieGentreInput);
        var genre = genreSelect.options[genreSelect.selectedIndex].value;

        var collectedMovieData = {
            title: title,
            length: length,
            genre: genre
        }

        return collectedMovieData;
    }

    function showMovieData(movie) {
        var movieItem = document.createElement("li");
        var movieText = document.createTextNode(movie.getData());

        movieItem.appendChild(movieText);
        movieUlList.appendChild(movieItem);
    }

    return {
        DOMSelectors: DOMSelectors,
        getMovieData: getMovieData,
        showMovieData: showMovieData
    }
})();

// Action Module - Controller
var ctrlModule = (function (dataCtrl, uiCtrl) {
    // Create movie on-click, add it to list of movies and show its data
    document.querySelector(uiCtrl.DOMSelectors.createMovieBtn).addEventListener('click', function () {
        var movieData = uiCtrl.getMovieData();
        var movieObj = dataCtrl.addMovie(movieData);
        uiCtrl.showMovieData(movieObj);

        // Reset form
        document.querySelector(uiCtrl.DOMSelectors.movieForm).reset();
    });
})(dataModule, uiModule);