"use strict";

// Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]


// function Products(name, price){
// this.name = name;
// this.price = price;
// };

var apple = {
    name: 'apples',
    price: 100
};
var milk = {
    name: 'milk',
    price: 80
};
var bananas = {
    name: 'bananas',
    price: 150
};

var productsArr = [apple, milk, bananas];
console.log(productsArr);


// Write a function that calculates the total price of your shopping list. 

function totalPrice(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i].price;
    }
    return total;
}
console.log(totalPrice(productsArr))

//Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 

function avgPrice(arr, callBack) {
    return "Average price: " + (totalPrice(arr) / arr.length).toFixed(3);
}
console.log(avgPrice(productsArr, totalPrice));

function mostExpensive(arr) {

}
console.log(mostExpensive(productsArr));