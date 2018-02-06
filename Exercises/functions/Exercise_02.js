/* function odd(num) {
    if(num % 2 !== 0) {
        console.log(num + " is an odd number.");
    } else {
        console.log(num + " is not an odd number.");
    }
} */

function odd(num) {
    if(num % 2 !== 0) {
        return num + " is an odd number.";
    } else {
        return num + " is not an odd number.";
    }
}

console.log(odd(8));