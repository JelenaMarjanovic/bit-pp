"use strict"

function insertString(string1, string2, position) {
    var result = '';

    if (typeof position === "undefined") {
        result = string2 + string1;
    } else {
        for (var i = 0; i < string1.length; i++) {
            if (i === position) {
                result += string2;
            }
            result += string1[i];
        }
    }

    return result;
}

var str1 = "My random string";
var str2 = "JS ";

console.log(insertString(str1, str2));
console.log(insertString(str1, str2, 10));