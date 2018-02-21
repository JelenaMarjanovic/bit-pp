/*  Write a function that for a given departure and arrival time calculates the time the trip takes.
	Input: 8:22:13 11:43:22
    Output: 3 hours 21 minutes 9 seconds */

"use strict";

function calculatesTripTime(departure, arrival) {
    var today = new Date();

    if (departure.length < 8) {
        departure = "0" + departure;
    }

    if (arrival.length < 8) {
        arrival = "0" + arrival;
    }

    var month = today.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }

    var departureDate = new Date(today.getFullYear().toString() + "-" + month + "-" + today.getDate().toString() + "T" + departure);
    var arrivalDate = new Date(today.getFullYear().toString() + "-" + month + "-" + today.getDate().toString() + "T" + arrival);

    var tripTime = (arrivalDate.getTime() - departureDate.getTime()) / 1000;

    var seconds = Math.floor(tripTime % 60);
    var minutes = Math.floor(Math.floor(tripTime / 60) % 60);
    var hours = Math.floor(Math.floor(tripTime / 3600) % 24);

    return hours + " hours, " + minutes + " minutes, " + seconds + " seconds";
}

var time1 = "8:22:13";
var time2 = "11:43:22";
console.log(calculatesTripTime(time1, time2));