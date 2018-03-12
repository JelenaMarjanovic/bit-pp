
function sortString(srt){
    var srtArr = srt.toLowerCase().split("").sort().join("");
    return srtArr;
}

console.log(sortString("Matija"));
