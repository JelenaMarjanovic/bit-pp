"use strict";
// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

function duplicateElement(arr) {
    var outputArr = [];

    for (var i = 0, j = 0; i < arr.length; i++, j++) {
        outputArr[j] = arr[i];
        j++;
        outputArr[j] = arr[i];
    }

    return outputArr;
}

var a = [2, 4, 7, 11, -2, 1];

console.log(duplicateElement(a));