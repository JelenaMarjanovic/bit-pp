"use strict"

function numDigits(num) {
    var digits = 0;

    while (num > 0) {
        num -= (num % 10);
        num /= 10;
        digits++;
    }

    return digits;
}

console.log("A number of digits of a given number is: " + numDigits(1234560));
console.log("A number of digits of a given number is: " + numDigits(53));