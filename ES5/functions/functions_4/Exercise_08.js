"use strict"

function concatenateArrays(array1, array2) {
    var result = [];

    for (var i = 0, j = 0; i < array1.length; i++, j++) {
        result[j] = array1[i];
    }

    for (i = 0; i < array2.length; i++, j++) {
        result[j] = array2[i];
    }

    return result;
}

var a1 = [4, 5, 6, 2];
var a2 = [3, 8, 11, 9];

console.log(concatenateArrays(a1, a2));