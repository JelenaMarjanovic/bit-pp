function concatenateNTimes(string, num) {
    var result = '';
    console.log(num);
    if (typeof num === "undefined") {
        return string;
    } else {
        for (var i = 0; i < num; i++) {
            result += string;
        }
        return result;
    }
}

console.log("Ha");
console.log("Ha", 3);