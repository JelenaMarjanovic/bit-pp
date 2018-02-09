function reverseNumber(num) {
    var result = 0;

    while (num > 0) {
        result *= 10;
        result += num % 10;
        num = (num - num % 10) / 10;
    }

    return result;
}

var num = 12345;

console.log(reverseNumber(num));
// console.log(typeof reverseNumber(num));