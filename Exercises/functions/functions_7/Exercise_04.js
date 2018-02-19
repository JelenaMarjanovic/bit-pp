"use strict";

function celsiusToFahrenheit(celsiusTemperature) {
    return celsiusTemperature + "°C is " + (celsiusTemperature * 9 / 5 + 32) + "°F.";
}

function fahrenheitToCelsius(fahrenheitTemperature) {
    return fahrenheitTemperature + "°F is " + (fahrenheitTemperature - 32) * 5 / 9 + "°C.";
}

console.log(celsiusToFahrenheit(-2));
console.log(fahrenheitToCelsius(23));