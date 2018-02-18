function replaceSpaceWithSeparator(string, separator) {
    var result = '';

    if (typeof separator === "undefined") {
        var separator = '-';
    }

    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            result += separator;
        } else {
            result += string[i];
        }
    }

    return result;
}

var str = "My random string";

console.log(replaceSpaceWithSeparator(str, "_"));
console.log(replaceSpaceWithSeparator(str, "+"));
console.log(replaceSpaceWithSeparator(str));
