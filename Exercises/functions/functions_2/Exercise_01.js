"use strict"

function isString(string) {
    return typeof string === "string";
}

var str = "My random string";
var num = 12;

console.log('Is str a string?\t' + isString(str));
console.log('Is num a string?\t' + isString(num));