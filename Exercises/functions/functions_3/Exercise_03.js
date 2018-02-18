function filterArray(array) {
    var filteredArray = [];

    for (var i = 0, j = 0; i < array.length; i++) {
        if (!isNaN(array[i]) && array[i] !== null && array[i] !== 0 && array[i] !== undefined && array[i] !== '' && array[i] !== false) {
            filteredArray[j] = array[i];
            j++;
        }
    }

    return filteredArray;
}

var arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

console.log(filterArray(arr));