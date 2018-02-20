// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	    Output: [’Programming’, ‘product’]
"use strict";

function allElementsStartsWithSubstring(arr) {
    var output = [];

    for (var i = 0, j = 0; i < arr.length; i++) {
        if (arr[i].substring(0, 3).toLowerCase() === 'pro') {
            output[j] = arr[i];
            j++;
        }
    }

    return output;
}

var a = ['JavaScript', 'Programming', 'fun', 'product'];
console.log(allElementsStartsWithSubstring(a));