"use strict";

function allElementsStartsWithSubstring(element) {
    return element.substring(0, 3).toLowerCase() === 'pro';
}

function filterArray(arr, callbackFunc) {
    var output = [];

    for (var i = 0, j = 0; i < arr.length; i++) {
        if (callbackFunc(arr[i])) {
            output[j] = arr[i];
            j++;
        }
    }

    return output;
}

var a = ['JavaScript', 'Programming', 'fun', 'product'];
console.log(filterArray(a, allElementsStartsWithSubstring));