"use strict"

function concatenate(string, num) {
    var result = '';

    for (var i = 0; i < num; i++) {
        result += string;
    }

    return result;
}

console.log(concatenate("bla", 5));