var a = 10; // 10, 7
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