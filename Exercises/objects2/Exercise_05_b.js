/*  Write a function that finds all the elements in a given array that start with the “pro” substring.
    The function should be case insensitive. 
    Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
    Output: [’Programming’, ‘product’] */

"use strict";

function allElementsContainsSubstring(arr) {
    var output = [];

    for (var i = 0, j = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().indexOf('pro') === 0) {
            output.push(arr[i]);
        }
    }

    return output;
}

var a = ['JavaScript', 'Programming', 'fun', 'product'];
console.log(allElementsContainsSubstring(a));