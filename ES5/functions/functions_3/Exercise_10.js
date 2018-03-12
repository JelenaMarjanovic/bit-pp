"use strict"

function mostFrequentItem(array) {
    var occurrancy = 0;
    var item;

    for (var i = 0; i < array.length; i++) {
        var counter = 0;

        for (var j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                counter++;
            }

            if (counter > occurrancy) {
                occurrancy = counter;
                item = array[i];
            }
        }
    }

    return item + " occurres " + occurrancy + " times.";
}

var a = [3, 'a', 'a', 'a', 2, 3, 'a', 'a', 'a', 2, 4, 9, 3];

console.log(mostFrequentItem(a));