function findLastOccurence(string, char) {
    var lastPosition = -1;

    for (var i = string.length - 1; i >= 0; i--) {
        if (string[i] === char) {
            lastPosition = i;
            break;
        }
    }

    return lastPosition;
}

var str = "My random string.";
var char1 = "r";
var char2 = "e";

console.log("Character '" + char1 + "' last occure in a given string at index " + findLastOccurence(str, char1));
console.log("Character '" + char2 + "' last occure in a given string at index " + findLastOccurence(str, char2));