"use strict";

function largestPrimeFactor(num, divisor = 2) {
	var square = divisor * divisor;
	
	if(isPrime(num)) {
		return num;
	} else {
		while (num % divisor !== 0 && square <= num) {
			divisor++;
		}
	}

	return square <= num ? largestPrimeFactor(num / divisor, divisor) : num;
}

function isPrime(num) {

    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }
}
