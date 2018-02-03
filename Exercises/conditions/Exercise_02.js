/* 
 * Write a program to check if the number is divisible by 3 and  5.
 * If it is, print that number.
 */

var a = 15;     // 15, 12
result = '';

if(a % 3 == 0 && a % 5 == 0) {
    result = a;
} else {
    result = a + ' isn\'t divisible by 3 and 5.'
}

console.log(result);