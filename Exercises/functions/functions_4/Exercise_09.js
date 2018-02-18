"use strict"

function deleteElement(element, array) {
    var result = [];

    for (var i = 0, j = 0; i < array.length; i++) {
        if (array[i] !== element) {
            result[j] = array[i];
            j++;
        }
    }

    return result;
}

var e = 2;
var a = [4, 6, 2, 8, 2, 2];

console.log(deleteElement(e, a));