function retirement(currentYear, birthYear, gender) {
    var age = currentYear - birthYear;
    var result = '';

    if (gender === "female") {
        if (age >= 60) {
            result = 'Person is already retired.';
        } else {
            result = 'There is/are left ' + (60 - age) + ' year(s) until retirement.';
        }
    } else if (gender === "male") {
        if (age >= 65) {
            result = 'Person is already retired.';
        } else {
            result = 'There is/are left ' + (65 - age) + ' year(s) until retirement.';
        }
    }

    return result;
}

console.log(retirement(2017, 1943, "male"));
console.log(retirement(2017, 1962, "female"));
console.log(retirement(2017, 1955, "female"));
console.log(retirement(2017, 1981, "male"));