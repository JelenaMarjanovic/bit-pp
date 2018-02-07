function appearance(num, array) {
    var counter = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] === num) {
            counter++;
        }
    }

    return num + ' appears ' + counter + ' times in a given array.';
}

var arr = [57, 23, 11, 13, 7, 15, 7, 77, 6, 7];
console.log(appearance(7, arr));