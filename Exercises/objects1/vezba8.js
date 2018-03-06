"use strict";

function capitalizeFirstLetter(str, word) {
    var strArr = str.split(" ");
    strArr[word - 1] = strArr[word - 1].split("");
    strArr[word - 1][0] = strArr[word - 1][0].toUpperCase();
    strArr[word - 1] = strArr[word - 1].join("");

    return strArr.join(" ");
}

console.log(capitalizeFirstLetter("js string exercises", 2));
