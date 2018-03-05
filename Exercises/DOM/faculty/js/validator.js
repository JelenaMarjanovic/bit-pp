'use strict';

/**
 * Check if given array of objects has given element
 * @param {Array<Object>} arrayElement 
 * @returns {boolean}
 */
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

/**
 * Validate if all fields are valid to continue
 * @param {boolean} isValid - The boolean value of content of all required fields
 * @param {DOM Node} errorElement - The DOM node that represents div
 * @return {undefined}
 */
function validator(isValid, errorElement) {
    if (!isValid) {
        errorElement.textContent = 'All fields are required!';

        return -1;
    } else {
        errorElement.textContent = '';
    }
}