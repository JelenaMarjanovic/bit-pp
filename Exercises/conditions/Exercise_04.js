/* 
 * Write a program that compares two numbers and display the larger.
 * Result should be displayed in the console.
 */

var a;      // 3, 11, 7
var b;      // 5, 1, 7
var result = '';

if(a > b) {
    result = a;
} else if(b > a) {
    result = b;
} else {
    result = a + ' and ' + b + ' are equal.'
}

console.log(result);