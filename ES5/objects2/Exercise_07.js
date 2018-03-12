"use strict";

/*  Write a function that checks if a given string is written in all capitals. */

function isAllCapitals(str) {
    var arr = str.split("");
    var output = true;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i].toUpperCase()) {
            output = false;
            break;
        }
    }

    return output;
}

// console.log(isAllCapitals("AAADFSGFSG"));
// console.log(isAllCapitals("AdfaDFFdSG"));


/*  Write a function that checks if a given string contains any digits. */

function isAnyDigits(str) {
    var arr = str.split("");
    var output = false;

    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) >= 0 && parseInt(arr[i]) <= 9) {
            output = true;
            break;
        }
    }

    return output;
}

// console.log(isAnyDigits("AAADFSGFSG"));
// console.log(isAnyDigits("A2AD3F4SG6"));


/*  Write a function that checks if a given string is a valid hexadecimal color. */

function isValidHexColor(str) {
    // return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(str);

    if (str.charAt(0) === "#") {
        if (str.length === 7) {
            return parseInt(str.substring(1), 16) >= 0 && parseInt(str.substring(1), 16) < Math.pow(256, 3);
        } else if (str.length === 4) {
            return parseInt(str.substring(1), 16) >= 0 && parseInt(str.substring(1), 16) < Math.pow(16, 3);
        }
    }

    return false;
}

// console.log(isValidHexColor("#Zd8877"));
// console.log(isValidHexColor("#ad8c77"));
// console.log(isValidHexColor("ad8c77"));
// console.log(isValidHexColor("#fff"));
// console.log(isValidHexColor("#000000"));
// console.log(isValidHexColor("#1D887"));
// console.log(isValidHexColor("#7f9"));


/*  Write a function that checks if a given number belongs to the interval from 1900 to 2018. */

function belongsFrom1900To2018(num) {
    return num >= 1900 && num <= 2018;
}

// console.log(belongsFrom1900To2018(1897));
// console.log(belongsFrom1900To2018(1989));
// console.log(belongsFrom1900To2018(2036));


/*  Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d). */

function validator() {
    return {
        stringValidator: isAllCapitals,
        passwordValidator: isAnyDigits,
        colorValidator: isValidHexColor,
        yearValidator: belongsFrom1900To2018
    };
}

console.log(validator());