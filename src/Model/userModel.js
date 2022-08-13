const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emaidId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] // enum array
    },
    age: Number

}, { timestamps: true });



module.exports = mongoose.model('User', userSchema) //automatically convert small letter : user,

