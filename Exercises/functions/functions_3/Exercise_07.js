"use strict"

function perfectNumber(num) {
    if (num % 2 === 0) {
        var sum = 0;

        for (var i = 0; i <= num / 2; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }

        if (num === sum) {
            return num + " is a perfect number."
        } else {
            return num + " isn't a perfect number."
        }
    } else {
        return num + " isn't a perfect number."
    }
}

console.log(perfectNumber(28));
console.log(perfectNumber(37));
console.log(perfectNumber(6));
console.log(perfectNumber(113));
console.log(perfectNumber(196));
console.log(perfectNumber(496));
console.log(perfectNumber(8128));