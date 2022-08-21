const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")
const { default: mongoose } = require("mongoose")
const isValidObjectId = function (ObjectId) {
    return mongoose.Types.ObjectId.isValid(ObjectId)
}

const createBook = async function (req, res) {
    let book = req.body
    let authorId = req.body.author
    let publisher = req.body.publisher
    if (!authorId) {
        res.send({ msg: "Please Provide AuthorID" })
    }
    if (!publisher) {
        res.send({ msg: "Please Provide PublisherID" })
    }
    if (!isValidObjectId(authorId)) {
        return res.send({ status: false, msg: "Please Enter Valid ID" })
    }
    if (!isValidObjectId(publisher)) {
        return res.send({ status: false, msg: "Please Enter Valid Publisher ID" })
    }
    // let author = await authorModel.findById(authorId)
    // if (!author) {
    //     return res.send({ status: false, msg: "Details Not Present" })
    // }
    // let publisherId = await authorModel.findById(authorId)
    // if (!publisherId) {
    //     return res.send({ msg: "Please Provide PublisherID" })
    // }
    if (!isValidObjectId) {
        return res.send({ msg: "AuthorID Is Not Valid" })
    }
    let createBooks = await bookModel.create(book)
    res.send({ msg: createBooks })

}

const getAllBookDetails = async function (req, res) {

    let getAllBooks = await bookModel.find().populate([{ path: "author" }, { path: "publisher" }])
    res.send({ msg: getAllBooks })
}   

// const ObjectId = mongoose.Types.ObjectId

const booksByPut = async function (req, res) {

    let pub_id1 = '630077e4337deb6f89c745bf' // 'Penguin' 
    let pub_id2 = '6300b5222a1dd62aa53e4c95' // 'HarperCollins'

    let book1 = await bookModel.findOneAndUpdate({ publisher: pub_id1 }, { $set: { isHardCover : true } },{new:true})
    
    console.log(book1)

    res.send({ data: book1 })
}

// const booksByPut = async function(req, res){
//     let book1 = await bookModel.findByIdAndUpdate( {"62a213f41e3fe40140b3878e" : "62a2391cd2b575bd68bb7633"}, {$set: {boolean: true}}, {$new : true})
//     res.send({data: book1})
// }


const authorRating =async function (req,res){
    let check = await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    let updatePrice = await bookModel.updateMany({author:check},{ $inc: { price : +10}},{new : true})
    console.log(updatePrice)
    res.send({data:updatePrice})
}




module.exports.createBooks = createBook
module.exports.getAllBookDetails = getAllBookDetails
module.exports.booksByPut = booksByPut
module.exports.authorRating = authorRating












// const authorModel = require("../models/authorModel")
// const bookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
