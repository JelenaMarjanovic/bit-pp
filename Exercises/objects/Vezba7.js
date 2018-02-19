
function padString(str, str2, side){

    if(side === "l"){
        
        var result = str2.slice(0, (str2.length-str.length)) + str;
    } else {
        var result = str + str2.slice(str.length-1);
    }
    return result;
}

console.log(padString("123", "00000000"));


// console.log('abc'.padStart(6, "foo"));

