"use strict"

function stringToArray(string) {
    var array = [];

    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            array[i] = null;
        } else {
            array[i] = string[i];
        }
    }

    console.log(array);
}

var str1 = "My random string";
var str2 = "Random";

console.log(str1 + " -> ");
stringToArray(str1);
console.log(str2 + " -> ");
stringToArray(str2);