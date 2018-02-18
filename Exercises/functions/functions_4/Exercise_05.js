"use strict"

function sumOfPositiveElements(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }

    return sum;
}

var a = [3, 11, -5, -3, 2];
console.log(sumOfPositiveElements(a));