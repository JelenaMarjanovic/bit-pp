"use strict";

function swapCharCase(str) {
    var strArr = str.split("");

    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] === strArr[i].toUpperCase()) {
            strArr[i] = strArr[i].toLowerCase();
        } else if (strArr[i] === strArr[i].toLowerCase()) {
            strArr[i] = strArr[i].toUpperCase();
        }
    }

    return strArr.join("");
}

console.log(swapCharCase("The Quick Brown Fox"));
