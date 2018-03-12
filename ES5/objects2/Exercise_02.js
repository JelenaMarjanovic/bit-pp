/*  Write a functional expression that removes all duplicates in a given array.
    Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
    Output: [1, 4, 8, 9, 12, 13] */

"use strict";

function removeDuplicates(arr) {
    var output = [];
    
    var arrSort = arr.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < arrSort.length; i++) {
        if (arrSort[i] !== arrSort[i + 1]) {
            output.push(arrSort[i]);
        }
    }

    return output;
}

var a = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
console.log(removeDuplicates(a));