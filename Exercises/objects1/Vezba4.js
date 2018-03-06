"use strict";

function alphabetizeWords(str) {
    var strArr = str.toLowerCase().split(" ").sort();
    var result = [];

    for (var i = 0; i < strArr.length; i++) {
        result[i] = strArr[i].split("").sort().join("");
    }

    return result.join(" ");    
}

console.log(alphabetizeWords("We are learning JavaScript"));
