/*  Write a function that calculates a number of days to your birthday.
    Input: 25 February
    Output: 5 days */

"use strict";

function daysToBirthday(date) {
    var currentDate = new Date();
    var dateOfBirth = new Date(date + currentDate.getFullYear().toString());

    // The number of milliseconds in one day
    var ONE_DAY = 24 * 60 * 60 * 1000;
    var differenceInMilliseconds = dateOfBirth.getTime() - currentDate.getTime();
    var outputDays = Math.ceil(differenceInMilliseconds / ONE_DAY);

    if (differenceInMilliseconds < 0) {
        return "Your birthday was " + Math.abs(outputDays) + " day(s) ago.";
    }

    return outputDays + " day(s)";
}

var myDate = "13 February";
console.log(daysToBirthday(myDate));