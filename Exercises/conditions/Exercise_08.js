/*
 * Check if input is a number and if the answer is no, print 'ERROR!'.
 * The additional condition is if it is a two-digit number.
 * If both conditions are true, print "mirror image" of given number.
 * If it is not two-digit number, return the right information.
 */
var num = 25;   // 25, 31, 'a'
var result;

if(typeof num === 'number') {
    if(num > 9 && num < 100) {
        var digit;
        digit = num % 10;
        result = digit *10;
        result += (num - digit) / 10;
    } else {
        result = num + ' is not two-digit number.';
    }
} else {
    result = 'ERROR!';
}

console.log(result);