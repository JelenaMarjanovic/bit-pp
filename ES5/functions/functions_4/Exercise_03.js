"use strict"

function minimumOfArray(array) {
    var minimum = array[0];
    var index = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < minimum) {
            minimum = array[i];
            index = i;
        }
    }

    return minimum + ", " + index;
}

var a = [4, 2, 2, -1, 6];

console.log(minimumOfArray(a));