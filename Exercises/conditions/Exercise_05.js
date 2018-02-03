/* 
 * Write a conditional statement to find the sign of product of three numbers.
 * Display the result in the console with the specified sign.
 */

var a = 3;
var b = -7;
var c = 2;
var result = '';

var product = a * b * c;

if(product > 0) {
    result = 'The sign is +';
} else if(product < 0) {
    result = 'The sign is -';
} else {
    result = 'The product is equal to zero';
}

console.log(result);