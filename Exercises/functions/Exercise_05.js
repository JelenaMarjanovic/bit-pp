function square(size) {
    var result = '';
    for (var i = 0; i < size; i++) {
        if (i > 0 && i < size) {
            for (var j = 0; j < size; j++) {
                result += '*';
            }
            result += '\n';
        } else {
            result += "*";
            for (var j = 0; j < size - 2; j++) {
                result += ' ';
            }
            result += '*\n';
        }
    }


    return result;
}

console.log(square(5));