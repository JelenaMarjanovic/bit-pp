"use strict";

(function App() {

    function Product(name, price, expirationDate) {
        this.product_id = Math.floor(Math.random() * 100000);
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date(expirationDate);
    }

    Product.prototype.getInfo = function () {
        return (this.name[0] + this.name[name.length - 1]).toUpperCase() + this.product_id + ",  " + this.name + ", " + this.price;
    }

    function ShoppingBag() {
        this.productList = [];
    }

    ShoppingBag.prototype.addProduct = function (product) {
        var currentDate = new Date();

        if (product.expirationDate.getTime() > currentDate.getTime()) {
            this.productList.push(product);
        }
    }

    ShoppingBag.prototype.calculateTotalPrice = function () {
        var sum = 0;

        this.productList.forEach(function (element) {
            sum += element.price;
        });

        return sum;
    }

    ShoppingBag.prototype.averageProductPrice = function () {
        return (this.calculateTotalPrice() / this.productList.length).toFixed(3);
    }

    ShoppingBag.prototype.getMostExpensive = function (arr) {
        var sortedProductList = this.productList.slice().sort(function (o1, o2) {
            return o1.price - o2.price;
        });
        var lastElement = this.productList.length - 1;

        return sortedProductList[lastElement].getInfo();
    }

    function PaymentCard(accountBalance, status, expireDate) {
        this.accountBalance = parseFloat(accountBalance.toFixed(2));
        this.status = status;
        this.expireDate = new Date(expireDate);
    }


    function checkoutAndBuy(shoppingBag, paymentCard) {
        if (paymentCard.accountBalance >= shoppingBag.calculateTotalPrice()) {
            return "The purchase is successful!";
        }

        return "You don't have enough money!\nThe amount that is missing to complete purchase: " +
            Math.abs(paymentCard.accountBalance - shoppingBag.calculateTotalPrice()).toFixed(2);
    }

    var banana = new Product('Banana', 12.536, "2019-05-11");
    var apple = new Product('Apple', 7.7894, "2018-09-20");
    var cheese = new Product('Cheese', 231.7894, "2017-12-23");
    var milk = new Product('Milk', 101.4568, "2018-04-08");

    var bag = new ShoppingBag();

    bag.addProduct(banana);
    bag.addProduct(apple);
    bag.addProduct(cheese);
    bag.addProduct(milk);

    var card1 = new PaymentCard(150.25, 'active', '2020-05-11')
    var card2 = new PaymentCard(50.25, 'active', '2020-05-11')

    console.log(checkoutAndBuy(bag, card1));
    console.log();    
    console.log(checkoutAndBuy(bag, card2));

})();