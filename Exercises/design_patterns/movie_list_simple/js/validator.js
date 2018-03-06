'use strict';

// Check if Array has given element, type: Object
Array.prototype.hasElement = function (arrayElement) {
    var newObjToString = JSON.stringify(arrayElement);

    for (var i = 0; i < this.length; i++) {
        var element = this[i];
        var existedObjToString = JSON.stringify(element);

        if (newObjToString === existedObjToString) {
            return true;
        }

        return false;
    }
}

// Validate if all fields are valid to continue
function validator(isValid, errorElement) {
    if (!isValid) {
        errorElement.textContent = 'All fields are required!';

        return -1;
    } else {
        errorElement.textContent = '';
    }
}