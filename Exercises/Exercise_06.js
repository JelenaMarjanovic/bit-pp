var a = 0;
var b = -1;
var c = 4;
var result = '';

if(a > b && a > c) {
    result += a + ', ';
    if(b > c) {
        result += b + ', ' + c;
    } else {
        result += c + ', ' + b;
    }
} else if (b > a && b > c) {
    result += b + ', ';
    if(a > c) {
        result += a + ', ' + c;
    } else {
        result += c + ', ' + a;
    }
} else {
    result += c + ', ';
    if(a > b) {
        result += a + ', ' + b;
    } else {
        result += b + ', ' + a;
    }
}

console.log(result);