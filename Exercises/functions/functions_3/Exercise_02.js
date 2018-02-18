"use strict"

function arrayToString(array) {
    var result = '';

    for (var i = 0; i < array.length; i++) {
        if (!isNaN(array[i]) && array[i] !== null && isFinite(array[i]) && array[i] !== undefined) {
            result += array[i];
        }
    }

    return result;
}

var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(arrayToString(arr));