var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;

var max;

if(a > b && a > c && a > d && a > e) {
    max = a;
} else if(b > c && b > d && b > e) {
    max = b;
} else if(c > d && c > e) {
    max = c;
} else if(d > e) {
    max = d;
} else {
    max = e;
}

console.log(max);