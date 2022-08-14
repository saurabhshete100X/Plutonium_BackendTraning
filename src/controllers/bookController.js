const bookModel= require("../models/bookModel")

const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await bookModel.find()
    res.send({msg: allBooks})
}

module.exports.createBooks= createBooks
module.exports.getBooksData= getBooksData