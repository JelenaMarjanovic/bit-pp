function concatenateNTimes(string, num) {
    var result = '';
    
    if (typeof num === "undefined") {
        return string;
    } else {
        for (var i = 0; i < num; i++) {
            result += string;
        }
        return result;
    }
}

console.log(concatenateNTimes("Ha"));
console.log(concatenateNTimes("Ha", 3));