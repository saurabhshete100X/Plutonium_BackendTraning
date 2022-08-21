const authorModel = require('../models/authorModel')

const createAuthor = async function (req,res){
 let author = req.body
 let authorCreated =  await authorModel.create(author)
 res.send({data:authorCreated})
}


const getAllAuthorDetails = async function (req,res){
    let authors = await authorModel.find()
    res.send({data:authors})
}

module.exports.createAuthor=createAuthor
module.exports.getAllAuthorDetails=getAllAuthorDetails

// const AuthorModel= require("../models/authorModel")

// const createAuthor= async function (req, res) {
//     let author = req.body
//     let authorCreated = await AuthorModel.create(author)
//     res.send({data: authorCreated})
// }

// const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

// module.exports.createAuthor= createAuthor
// module.exports.getAuthorsData= getAuthorsData