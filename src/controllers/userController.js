const userModel = require("../models/userModel")

// const basicCode = async function (req, res, next) {
//     let tokenDataInHeaders = req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log("HEADER DATA ABOVE")
//     console.log("hey man, congrats you have reached the Handler")
//     //res.send({ msg: "This is coming from controller (handler)"})
//     next()
// }

const createUser = async function (req, res) {
    let user = req.body
    let createUser = await userModel.create(user)
  return  res.send({ "User Created Succesfully": createUser })
}

// const getUsersData = async function (req, res) {
//     let allUsers = await UserModel.find()
//     res.send({ msg: allUsers })
// }

module.exports.createUser = createUser
