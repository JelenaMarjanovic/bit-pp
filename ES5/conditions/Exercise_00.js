var bankBalance = 302.64; // 302.64, 0, NaN
var phonePrice = 99; // 99, 999, NaN
var isBankBalanceValid = (typeof bankBalance === 'number') && !!bankBalance;
var isPhonePriceValid = (typeof phonePrice === 'number') && !!phonePrice;
result = '';

if(bankBalance <= 0) {
    result = "You're broke!";
} else {
    if(isBankBalanceValid && isPhonePriceValid) {
        if(bankBalance >= phonePrice) {
            result = 'Yay, I can buy this phone!';
        } else {
            result = 'Sorry, you can\'t afford this phone.';
        }
    } else {
        result = 'Please, enter valid data.';
    }
}

console.log(result);