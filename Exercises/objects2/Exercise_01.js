/*  Write a functional expression that duplicates each element of a given array.
    Input: [2, 4, 7, 11, -2, 1]
    Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1] */

"use strict";

function duplicateEachElement(arr) {
    var output = [];

    for (var i = 0, j = 0; i < arr.length; i++, j++) {
        output[j] = arr[i];
        j++;
        output[j] = arr[i];
    }

    return output;
}

var a = [2, 4, 7, 11, -2, 1];
console.log(duplicateEachElement(a));