


function trim() {
    let str = "        Functionup      ";
    let st = str.trim();
   console.log(st);
}


function changetoLowerCase(){
    let str = "How can you print out the lowercase version of Hello, World ! "
    let ar = str.toLowerCase()
    console.log(ar)
}

function changeToUpperCase(){
    let str = "How can you print out the uppercase version of Hello, World !"
    let ar = str.toUpperCase()
    console.log(ar)
}

module.exports.trim = trim
module.exports.changetoLowerCase =changetoLowerCase
module.exports.changeToUpperCase=changeToUpperCase