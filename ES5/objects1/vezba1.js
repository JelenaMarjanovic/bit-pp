

function convertBase(number, startBase, targetBase){
    return (parseInt(number, targetBase).toString());
}

var num = convertBase(168);
console.log(num);

console.log(typeof num);

