"use strict"

function threeDots(string, num) {
    var result = '';

    for (var i = 0; i < num; i++) {
        result += string[i];
    }
    result += "...";

    return result;
}

var str = "My random string";
console.log(threeDots(str, 9));