"use strict";
// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function countElementsLessThanMiddle(arr) {

    if (arr.length % 2 === 0) {
        return "Error";
    } else {
        var j = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < arr[(arr.length - 1) / 2]) {
                j++;
            }
        }
        return j;
    }
}
console.log(countElementsLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));