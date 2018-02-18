function isPrime(num) {

    if (num === 1) {
        return 'Not a prime number.';
    } else if (num === 2) {
        return 'Prime number.';
    } else {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return 'Not a prime number.'
            }
        }

        return 'Prime number.'
    }
}

var num1 = 1;
var num2 = 2;
var num3 = 13;
var num4 = 27;

console.log(num1 + " - " + isPrime(num1));
console.log(num2 + " - " + isPrime(num2));
console.log(num3 + " - " + isPrime(num3));
console.log(num4 + " - " + isPrime(num4));