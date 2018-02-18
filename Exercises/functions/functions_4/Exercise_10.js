"use strict"

function insertAnElement(element, position, array) {
    if (position > array.length) {
        return "The value of the position is greater than the array length!";
    }

    var result = [];

    for (var i = 0, j = 0; i < array.length; i++, j++) {
        if (i === position) {
            result[j] = element;
            j++;
        }

        result[j] = array[i];
    }

    return result;
}

var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];

console.log(insertAnElement(e, p, a));
// console.log(insertAnElement(e, 11, a));