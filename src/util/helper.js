let i = new Date();

function printDate() {
    let date = (i.getDate())
    console.log("Date:" + i)

}

function printMonth() {
    let month = ((i.getMonth() + 1))
    console.log("Month:" + month)
}

const a = "Plutonium, W3D5,"
let welcome = function () {
    console.log(a + " the topic for today is Nodejs module system")
}



module.exports.welcome2 = welcome
module.exports.printDate = printDate
module.exports.printMonth = printMonth


