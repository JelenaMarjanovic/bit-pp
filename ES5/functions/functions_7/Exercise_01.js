"use strict";

function tellFortune(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    return "You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kid(s).";
}

console.log(tellFortune(1, "Natasha", "Canada", "software engineer"));