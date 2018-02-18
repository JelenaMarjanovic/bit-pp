"use strict"

function isSymmetricArray(array) {
    var result = "";

    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[array.length - 1 - i]) {
            result = "This array is symmetric.";
        } else {
            result = "This array is not symmetric.";
            break;
        }
    }

    return result;
}

var a1 = [2, 4, -2, 7, -2, 4, 2];
console.log(isSymmetricArray(a1));
var a2 = [3, 4, 12, 8];
console.log(isSymmetricArray(a2));