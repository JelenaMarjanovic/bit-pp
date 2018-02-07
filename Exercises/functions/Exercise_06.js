function chart(first, second, third) {
    var result = '';

    for (var i = 0; i < first; i++) {
        result += '*';
    }

    result += '\n';

    for (var i = 0; i < second; i++) {
        result += '*';
    }

    result += '\n';

    for (var i = 0; i < third; i++) {
        result += '*';
    }

    return result;
}

console.log(chart(5, 3, 7));