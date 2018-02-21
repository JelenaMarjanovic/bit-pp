"use strict";

/*  Write a list (array) of products you usually buy in the supermarket.
    Write a price and name for each product. For example,
    [
        {name: ‘apples’, price: 100}, 
        {name: ‘milk’, price: 80}, 
        {name: ’bananas’, price: 150}
    ] */

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

// console.log(productsArr);


/*  Write a function that calculates the total price of your shopping list. */

function totalPrice(arr) {
    var total = 0;

    for (var i = 0; i < arr.length; i++) {
        total += arr[i].price;
    }

    return total;
}

// console.log("The total price of the shopping list: " + totalPrice(productsArr));


/*  Write a function that calculates the average product price of your shopping list.
    Print this value with the precision of three decimals. */

function averageProductPrice(arr, callback) {
    return "The average product price: " + (totalPrice(arr) / arr.length).toFixed(3);
}

// console.log(averageProductPrice(productsArr, totalPrice));


/*  Write a function that prints out the name of the most expensive product on your shopping list.
    Write the name in uppercase.*/

function mostExpensiveProduct(arr, callbackFunc) {
    return arr.slice().sort(function (o1, o2) {
        return o1.price - o2.price;
    })[arr.length - 1].name.toUpperCase();
}

console.log("The most expensive product on the shopping list: " + mostExpensiveProduct(productsArr));