"use strict"

function getLastElements(array, num) {
    if (typeof num === "undefined") {
        return array[array.length - 1];
    } else {
        var result = [];
        for (var i = array.length - 1, j = num - 1; i >= num; i--) {
            result[j] = array[i];
            j--;
        }

        return result;
    }
}

var arr = [7, 9, 0, -2];

console.log(getLastElements(arr));
console.log(getLastElements(arr, 2));