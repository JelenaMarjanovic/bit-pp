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