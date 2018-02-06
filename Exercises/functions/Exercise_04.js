/* function arithmetic(a, b, c, d) {
    return (a + b + c+ d) / 4;
} */

function arithmetic() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum / arguments.length;
}

console.log(arithmetic(1, 3, 5, 7, 11));