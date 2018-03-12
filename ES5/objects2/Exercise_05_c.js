/*  Write a function that expects an array and a callback function that filters out some of the elements.
    Use functions defined in a) or b) to test it. */

"use strict";

// Using function similar one defined in b)
function allElementsContainsSubstring(element) {
    return element.toLowerCase().indexOf('pro') !== -1;
}

function filterArray(arr, testFunc) {
    var output = [];

    for (var i = 0; i < arr.length; i++) {
        if (testFunc(arr[i])) {
            output.push(arr[i]);
        }
    }

    return output;
}

var a = ['JavaScript', 'Programming', 'fun', 'product', 'javaPro'];
console.log(filterArray(a, allElementsContainsSubstring));