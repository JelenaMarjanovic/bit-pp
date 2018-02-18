function fillArray(len, element) {
    if (typeof element === "undefined") {
        element = null;
    }

    var result = [];

    for (var i = 0; i < len; i++) {
        result[i] = element;
    }

    return result;
}

console.log(fillArray(6, 0));
console.log(fillArray(2, "none"));
console.log(fillArray(2));