/* 
 * Write a program to check if the variable is a number.
 * If it's a number, check if it is divisible by 2.
 * If it is, print the result, if not, show "X".
 */

var a = 10;     // 10, 7
var result = '';

if(typeof a === "number") {
    if(a % 2 == 0) {
        result = a + ' / 2 = ' + (a / 2);
    } else {
        result = 'X';
    }
} else {
    result = 'Invalid entry!'
}

console.log(result);