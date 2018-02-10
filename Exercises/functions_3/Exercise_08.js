function findWord(str, word) {
    var counter = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === word[0]) {
            var wordLen = 0;

            for (var j = i; j < word.length + i; j++) {
                if (str[j] === word[j - i]) {
                    wordLen++;
                }

                if (wordLen === word.length) {
                    counter++;
                }
            }
        }
    }

    return "'" + word + "' was found " + counter + " times."
}

console.log(findWord('The quick brown fox', 'fox'));
console.log(findWord('aa, bb, cc, dd, aa', 'aa'));
