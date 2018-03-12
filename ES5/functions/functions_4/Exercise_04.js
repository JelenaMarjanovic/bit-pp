"use strict"

function findSecondLargestNumber(array) {
    var maximum = array[0];
    var secondLargest = array[0];

    for (var i = 0; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i];
        }
    }

    for (i = 0; i < array.length; i++) {
        if (array[i] > secondLargest && array[i] < maximum) {
            secondLargest = array[i];
        }
    }

    return secondLargest;
}

var a = [4, 2, 2, -1, 6];

console.log(findSecondLargestNumber(a));