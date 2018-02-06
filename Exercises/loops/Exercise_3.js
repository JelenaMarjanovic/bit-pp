var sum = 0;
var product = 1;
var array = [1, 2, 3, 4, 5, 6, 7];

for(var i = 0; i < array.length; i++) {
    sum += array[i];
    product *= array[i];
}

console.log("Sum of this array is " + sum);
console.log("Product of this array is " + product);