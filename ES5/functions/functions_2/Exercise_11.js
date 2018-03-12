"use strict"

function arrayStringsToNumbers(array) {
    var result = [];

    for (var i = 0, j = 0; i < array.length; i++) {
        var currentElement = parseFloat(array[i]);

        if (!isNaN(currentElement) && isFinite(currentElement)) {
            result[j] = currentElement;
            j++;
        }
    }

    console.log(result);
}

var arr = ["1", "21", undefined, "42", "1e+3", Infinity, NaN, "abc"];
arrayStringsToNumbers(arr);

// Doesn't work properly with undefined!