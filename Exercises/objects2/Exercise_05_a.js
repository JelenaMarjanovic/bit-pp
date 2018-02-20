// Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]

"use strict";
function allElementsLessThanGivenElement(arr, element){
    var output = [];
    for (var i = 0, j = 0; i < arr.length; i++){
        if (arr[i] < element) {
            output[j] = arr[i];
            j++;
        }
    }return output;
}
 
console.log(allElementsLessThanGivenElement([2, 3, 8, -2, 11, 4], 6 ));