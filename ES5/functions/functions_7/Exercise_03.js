"use strict";

// function calculateSupply(age, amountPerDay) {
//     var maxAge = 120;

//     return "You will need " + ((maxAge - age) * 365 * amountPerDay) + " to last you until the ripe old age of " + maxAge + ".";
// }

function calculateSupply(age, amountPerDay) {
    var maxAge = 120;

    return "You will need " + ((maxAge - age) * 365 * amountPerDay).toFixed(0) + " to last you until the ripe old age of " + maxAge + ".";
}

console.log(calculateSupply(33, 3.25));