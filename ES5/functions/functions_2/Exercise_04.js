"use strict"

function letterOccurences(string, letter) {
    var counter = 0;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            counter++;
        }
    }

    return counter;
}

var str = "My random string";
var lett = "n";

console.log("Letter '" + lett + "' occurres in a given string " + letterOccurences(str, lett) + " times.");