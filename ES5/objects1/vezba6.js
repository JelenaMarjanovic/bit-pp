function abbreviateString(str) {
    var result = str.split(" ");
    result[1] = result[1].slice(0, 1);
    
    return result.join(" ") + ".";
}

console.log(abbreviateString("John Snow"));
