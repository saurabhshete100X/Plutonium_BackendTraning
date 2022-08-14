const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    category: String,
    Year: Number,
}, { timestamps: true });

module.exports = mongoose.model('Books', bookSchema) //books



// String, Number
// Boolean, Object/json, array