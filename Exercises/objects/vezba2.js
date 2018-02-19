"use strict";

function reverseNumber(number) {
    return parseInt(number.toString().split("").reverse().join(""));
}

console.log(reverseNumber(12345));
console.log(typeof reverseNumber(12345));

