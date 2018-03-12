"use strict"

function sumOddElem(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            sum += array[i];
        }
    }

    return sum;
}

var arr = [57, 24, 11, 13, 7, 15, 7, 78, 6, 7];
console.log('Sum of odd elements of a given array is ' + sumOddElem(arr) + '.');