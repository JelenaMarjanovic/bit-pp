"use strict"

function hideEmail(string) {
    var hidden = "";
    var domen = "";

    for (var i = 0; i < string.length; i++) {
        if (i > 6) {
            if (string[i] !== "@") {
                continue;
            } else {
                hidden += "...";
            }

            for (var j = i + 1; j < string.length; j++) {
                domen += string[j];
            }
        }

        hidden += string[i];
    }

    return hidden + domen;
}

console.log(hideEmail("myemailaddress@bgit.rs"));