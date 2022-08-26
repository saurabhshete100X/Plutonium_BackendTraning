const userModel = require("../models/userModel")
const orderModel = require("../models/orderModel")

const mw = function (req, res, next) {
    let isFreeAppUser = req.headers["isfreeappuser"]
    if (!isFreeAppUser) {
        return res.send("Header is Not Present")
    } else
        next()

}

module.exports.mw = mw






















// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
