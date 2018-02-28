/* Applications */

"use strict";

function App(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

App.prototype.getData = function () {
    return "Name: " + this.name + ", licence: " + this.licence + ", stars: " + this.stars;
}

App.prototype.isCCLicence = function () {
    return this.licence.toUpperCase() === "CC";
}

App.prototype.like = function () {
    this.stars++;
}

App.prototype.showStars = function () {
    return this.stars;
}

function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}

WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
    return App.prototype.getData.call(this) + " technologies: " + this.technologies;
}

WebApp.prototype.reactBased = function () {
    var techArr = this.technologies.split(", ");
    var output = false;

    for (var i = 0; i < techArr.length; i++) {
        if (techArr[i].toLowerCase() === "react") {
            return !output;
        }
    }

    return output;
}

function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}

MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function () {
    return App.prototype.getData.call(this);
}

MobileApp.prototype.forAndroid = function () {
    var platformArr = this.platforms.split(", ");
    var output = false;

    for (var i = 0; i < platformArr.length; i++) {
        if (platformArr[i].toLowerCase() === "android") {
            return !output;
        }
    }

    return output;
}

var wApp = new WebApp("Slack", "https://slack.com/", "Bootstrap, CSS3, HTML5", "paid", 456);
var wApp2 = new WebApp("Bla bla", "https://www.bla-bla.com", "Node, React, MongoDB", "CC", 777);
var mApp = new MobileApp("Viber", "Android, iOS", "free", 1234);

console.log(wApp.getData());
console.log(wApp2.getData());

console.log("wApp is React based? " + wApp.reactBased());
console.log("wApp2 is React based? " + wApp2.reactBased());

console.log(mApp.getData());
console.log("mApp is developed for Android? " + mApp.forAndroid());

console.log("The licence is CC? wApp: " + wApp.isCCLicence());
console.log("The licence is CC? wApp2: " + wApp2.isCCLicence());
console.log("The licence is CC? mApp: " + mApp.isCCLicence());

wApp2.like();
mApp.like();
console.log("Number of stars for wApp2 after increasing: " + wApp2.showStars());
console.log("Number of stars for mApp after increasing: " + mApp.showStars());