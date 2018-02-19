
function emailProtector(email){
    
    var arr = email.split("@")
    arr[0] = arr[0].slice(0, 3) + "...";
    arr = arr.join("@");
    return arr;
}


console.log(emailProtector("matija_misic@hotmail.com"));
