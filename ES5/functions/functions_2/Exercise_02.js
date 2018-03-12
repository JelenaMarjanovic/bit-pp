"use strict"

function isStringBlank(string) {
    return string === ' ';
}

var str = "My random string";
var blankStr = " ";
var num = 12;
var bool = false;

console.log("Is str a blank string?\t" + isStringBlank(str));
console.log("Is blankStr a blank string?\t" + isStringBlank(blankStr));
console.log("Is num a blank string?\t" + isStringBlank(num));
console.log("Is bool a blank string?\t" + isStringBlank(bool));