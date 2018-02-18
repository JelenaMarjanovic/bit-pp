function findFirstOccurence(string, char) {
    var firstPosition = -1;

    for (var i = 0; i < string.length; i++) {
        if (string[i] === char) {
            firstPosition = i;
            break;
        }
    }

    return firstPosition;
}

var str = "My random string.";
var char1 = "r";
var char2 = "e";

console.log("Character '" + char1 + "' first occure in a given string at index " + findFirstOccurence(str, char1));
console.log("Character '" + char2 + "' first occure in a given string at index " + findFirstOccurence(str, char2));