"use strict"

function multiplyPositiveElementsBy2(array) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result[i] = array[i] * 2;
        } else {
            result[i] = array[i];
        }
    }

    return result;
}

var a = [-3, 11, 5, 3.4, -8];

console.log(multiplyPositiveElementsBy2(a));