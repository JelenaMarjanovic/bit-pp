"use strict";

// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function smallestElementObject(arr) {
    // var smallestEl = arr[0];
    //
    // for (var i = 1; i < arr.length; i++) {
    //     if (arr[i] < smallestEl) {
    //         smallestEl = arr[i];
    //     }
    // }

    // var smallestEl = Math.min(...arr);

    var smallestEl = arr.slice().sort()[0];

    var output = {
        minValue: smallestEl,
        minLastIndex: arr.lastIndexOf(smallestEl)
    };

    return output;
}

var a = [1, 4, -2, 11, 8, 1, -2, 3];
console.log(smallestElementObject(a));
