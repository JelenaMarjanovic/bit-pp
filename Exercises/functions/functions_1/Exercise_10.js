"use strict"

function letterAppears(string) {
    var counter = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A') {
            counter++;
        }
    }

    return counter;
}

var str = 'Academic Awards';

console.log("Letters 'a' and 'A' appear " + letterAppears(str) + " times.");