function humanizeNumber(num) {
    if (num % 100 >= 11 && num <= 13) {
        return num + 'th';
    } else {
        switch (num % 10) {
            case 1:
                return num + "st";
                break;
            case 2:
                return num + "nd";
                break;
            case 3:
                return num + "rd";
                break;
            default:
                return num + "th";
                break;
        }
    }
}

console.log(humanizeNumber(1));
console.log(humanizeNumber(7));
console.log(humanizeNumber(11));
console.log(humanizeNumber(32));
console.log(humanizeNumber(103));