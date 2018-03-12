"use strict"

function isInArray(element, array) {
    for (var i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return "Yes";
        }
    }

    return "No";
}

var a1 = [5, -4.2, 3, 7];
var a2 = [5, -4.2, 18, 7];
var e = 3;

console.log(isInArray(e, a1));
console.log(isInArray(e, a2));