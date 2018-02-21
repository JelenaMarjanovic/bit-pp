"use strict";

/*  Write a function that generates a random integer value between 5 and 20. */

function randomIntBetween5And20() {
    return Math.round(((20 - 5) * Math.random()) + 5);
}

// console.log(randomIntBetween5And20());


/*  Write a function that generates a random integer value between 50 and 100. */

function randomIntBetween50And100() {
    return Math.round(((100 - 50) * Math.random()) + 50);
}

// console.log(randomIntBetween50And100());


/*  Write a function which expects a number and a callback generator function and returns an array of numbers produced by the generator function. */

function arrayOfRandomNumbers(num, callback) {
    var output = [];

    for (var i = 0; i < num; i++) {
        output[i] = callback();
    }

    return output;
}

console.log(arrayOfRandomNumbers(7, function () {
    return Math.round(((100 - 1) * Math.random()) + 1);
}));